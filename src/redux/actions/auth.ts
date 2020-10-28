import { SET_AUTH_USER_DATA } from './../actions_types/auth';


type dataType = {
    id: number,
    email: string,
    login: string
}

type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA,
    data: dataType
}

export const setAuthUserData = (data: dataType): SetAuthUserDataActionType => {
    return {
        type: SET_AUTH_USER_DATA,
        data
    }
}

export type AuthActionTypes = SetAuthUserDataActionType;