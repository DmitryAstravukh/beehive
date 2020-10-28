import axios from 'axios';

// export default axios.create({
//     baseURL: 'https://social-network.samuraijs.com/api/1.0',
//     responseType: 'json'
// })

/*
* headers: {
* 'API_KEY': 'a30fca58-772f-41b3-a0b2-6ce795581001'
* }
* */

export default class Api {
    #ax = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0',
        headers: {
            'API-KEY': 'd1f3422a-8bc6-4dfd-9d5b-b5f6f9569574'
        }
    })

    getUsers = (page, count) => {
        return this.#ax.get('/users', {
            params: {page, count}
        })
            .then(response => response.data)
    }

    getAuthUserData = () => {
        return this.#ax.get(`/auth/me`).then(response => response.data)
    }

    getUserData = (userId) => {
        return this.#ax.get(`/profile/${userId}`)
            .then(response => response.data)
    }

    #followUser = (userId) => {
        return this.#ax.post(`/follow/${userId}`)
            .then(response => response.data, error => error);
    }

    #unfollowUser = (userId) => {
        return this.#ax.delete(`/follow/${userId}`)
            .then(response => response.data, error => error);
    }

    toggleFollow = (userId, followed) => {
        switch (followed) {
            case false: return this.#followUser(userId);
            case true: return this.#unfollowUser(userId);
        }
    }

    getUserStatus = (userId) => {
        return this.#ax.get(`/profile/status/${userId}`)
    }

    updateUserStatus = (status) => {
        return this.#ax.put('/profile/status',{status})
    }

}