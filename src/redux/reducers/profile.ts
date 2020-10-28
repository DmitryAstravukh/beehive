import { SET_USER_PROFILE_DATA, SET_USER_STATUS } from './../actions_types/profile';

import Api from './../../api/api';
import { setUserProfileData, setUserStatus } from '../actions/profile';
import {UserDataType} from "../../types/profile-types";
const api: any = new Api();



type InicialStateType = {
    userData: UserDataType,
    isLoadedUserData: boolean,
    status: string
}

const inicialState: InicialStateType = {
    userData: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos: {
            large: '',
            small: ''
        },
        userId: null
    },
    isLoadedUserData: false,
    status: ''
};

export const getUserData = (userId: number) => (dispatch: any) => {
    api.getUserData(userId)
        .then((data: any) => dispatch(setUserProfileData(data)));
}

export const getUserStatus = (userId: number) => (dispatch: any) => {
    api.getUserStatus(userId).then((response: any) => dispatch(setUserStatus(response.data)))
}

export const updateUserStatus = (status: string) => (dispatch: any) => {
    api.updateUserStatus(status)
        .then((response: any) => {
            if(response.resultCode === 0) dispatch(setUserStatus(response.data))
        })
}


const profileReducer = (state = inicialState, action: any): InicialStateType => {
    switch (action.type) {
        case SET_USER_PROFILE_DATA:
            return {
                ...state,
                userData: {
                    ...action.userData
                },
                isLoadedUserData: true
            }

        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export default profileReducer;