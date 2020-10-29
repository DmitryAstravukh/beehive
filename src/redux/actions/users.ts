import {UserType} from "../../types/users-types";


export const getUsers = () => {
    return { type: 'users/GET_USERS' } as const
}

export const setUsers = (users: UserType) => {
    return {
        type: 'users/SET_USERS',
        users
    } as const
}

export const changePageSize = (pageSize: number) => {
    return {
        type: 'users/CHANGE_PAGE_SIZE',
        pageSize
    } as const
}

export const changePageNumber = () => {
    return {
        type: 'users/CHANGE_PAGE_NUMBER'
    } as const
}

export const toggleLoading = (isLoading: boolean) => {
    return {
        type: 'users/TOGGLE_LOADING',
        isLoading
    } as const
}

export const toggleFollow = (userId: number) => {
    return {
        type: 'users/TOGGLE_FOLLOW',
        userId
    } as const
}

export const toggleFollowInProgress = (userId: number, isFetching: boolean) => {
    return {
        type: 'users/TOGGLE_FOLLOW_IN_PROGRESS',
        userId,
        isFetching
    } as const
}

export const clearUsersList = () => {
    return {
        type: 'users/CLEAR_USERS_LIST'
    } as const
}
