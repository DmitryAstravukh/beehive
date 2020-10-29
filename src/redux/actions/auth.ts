import { UserDataTypeAuth } from '../../types/auth-types';

export const setAuthUserData = (userData: UserDataTypeAuth) => {
    return {
        type: 'auth/SET_AUTH_USER_DATA',
        userData
    } as const
}
