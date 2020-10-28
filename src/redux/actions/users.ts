import {
    GET_USERS,
    SET_USERS,
    CHANGE_PAGE_SIZE,
    CHANGE_PAGE_NUMBER,
    TOGGLE_LOADING,
    TOGGLE_FOLLOW,
    TOGGLE_FOLLOW_IN_PROGRESS,
    CLEAR_USERS_LIST
} from './../actions_types/users';
import {UserType} from "../../types/users-types";

type GetUsersType = { type: typeof GET_USERS }
export const getUsers = (): GetUsersType => {
    return { type: GET_USERS }
}


type SetUsersType = {
    type: typeof SET_USERS,
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersType => {
    return {
        type: SET_USERS,
        users
    }
}


type ChangePageSizeType = {
    type: typeof CHANGE_PAGE_SIZE,
    pageSize: number
}
export const changePageSize = (pageSize: number): ChangePageSizeType => {
    return {
        type: CHANGE_PAGE_SIZE,
        pageSize
    }
}


type ChangePageNumberType = {
    type: typeof CHANGE_PAGE_NUMBER
}
export const changePageNumber = (): ChangePageNumberType => {
    return {
        type: CHANGE_PAGE_NUMBER
    }
}


type ToggleLoadingType = {
    type: typeof TOGGLE_LOADING,
    isLoading: boolean
}
export const toggleLoading = (isLoading: boolean): ToggleLoadingType => {
    return {
        type: TOGGLE_LOADING,
        isLoading
    }
}


type ToggleFollowType = {
    type: typeof TOGGLE_FOLLOW,
    userId: number
}
export const toggleFollow = (userId: number): ToggleFollowType => {
    return {
        type: TOGGLE_FOLLOW,
        userId
    }
}


type ToggleFollowInProgressType = {
    type: typeof  TOGGLE_FOLLOW_IN_PROGRESS,
    userId: number,
    isFetching: boolean
}
export const toggleFollowInProgress = (userId: number, isFetching: boolean): ToggleFollowInProgressType => {
    return {
        type: TOGGLE_FOLLOW_IN_PROGRESS,
        userId,
        isFetching
    }
}


type ClearUsersListType = {
    type: typeof CLEAR_USERS_LIST
}
export const clearUsersList = (): ClearUsersListType => {
    return {
        type: CLEAR_USERS_LIST
    }
}