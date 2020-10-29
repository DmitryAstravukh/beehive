import axios from 'axios';
import {UserType} from "../types/users-types";
import {UserDataType} from "../types/profile-types";
import {ApiFollowedType, ApiGetAuthUserDataType, ApiUpdateUserStatusType} from '../types/api-types';

// export default axios.create({
//     baseURL: 'https://social-network.samuraijs.com/api/1.0',
//     responseType: 'json'
// })

/*
* headers: {
* 'API_KEY': 'a30fca58-772f-41b3-a0b2-6ce795581001'
* }
* */

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export default class Api {
    private ax = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0',
        headers: {
            'API-KEY': 'd1f3422a-8bc6-4dfd-9d5b-b5f6f9569574'
        }
    })

    getUsers = (page: number, count: number) => {
        return this.ax.get<UserType>('/users', {
            params: {page, count}
        }).then(r => r.data)
    }

    getAuthUserData = () => {
        return this.ax.get<ApiGetAuthUserDataType>(`/auth/me`).then(r => r.data)
    }

    getUserData = (userId: number) => {
        return this.ax.get<UserDataType>(`/profile/${userId}`).then(r => r.data)
    }

    private followUser = (userId: number) => {
        return this.ax.post<ApiFollowedType>(`/follow/${userId}`).then(r => r.data);
    }

    private unfollowUser = (userId: number) => {
        return this.ax.delete<ApiFollowedType>(`/follow/${userId}`).then(r => r.data);
    }

    toggleFollow = (userId: number, followed: boolean) => {
        switch (followed) {
            case false: return this.followUser(userId);
            case true: return this.unfollowUser(userId);
        }
    }

    //TODO добавить описание типа когда появится норм документация в api
    getUserStatus = (userId: number) => {
        return this.ax.get(`/profile/status/${userId}`)
    }

    updateUserStatus = (status: string) => {
        return this.ax.put<ApiUpdateUserStatusType>('/profile/status',{status})
    }

}