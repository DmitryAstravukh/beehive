import { SET_USER_PROFILE_DATA, SET_USER_STATUS } from './../actions_types/profile';
import {UserDataType} from "../../types/profile-types";


type SetUserProfileDataType = {
    type: typeof SET_USER_PROFILE_DATA,
    userData: UserDataType
}
export const setUserProfileData = (userData: UserDataType): SetUserProfileDataType => {
    return {
        type: SET_USER_PROFILE_DATA,
        userData
    }
}


type SetUserStatusType = {
    type: typeof SET_USER_STATUS,
    status: string
}
export const setUserStatus = (status: string): SetUserStatusType => {
    return {
        type: SET_USER_STATUS,
        status
    }
}

export type ProfileActionTypes = SetUserProfileDataType | SetUserStatusType;