import {UserDataType} from "../../types/profile-types";


export const setUserProfileData = (userData: UserDataType) => {
    return {
        type: 'profile/SET_USER_PROFILE_DATA',
        userData
    } as const
}

export const setUserStatus = (status: string) => {
    return {
        type: 'profile/SET_USER_STATUS',
        status
    } as const
}
