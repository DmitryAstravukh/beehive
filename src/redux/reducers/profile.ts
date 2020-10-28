import { SET_USER_PROFILE_DATA, SET_USER_STATUS } from './../actions_types/profile';

import Api from './../../api/api';
import {ProfileActionTypes, setUserProfileData, setUserStatus} from '../actions/profile';
import {UserDataType} from "../../types/profile-types";
import {ThunkAction} from "redux-thunk";
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

type ThunkType = ThunkAction<Promise<void>, InicialStateType, unknown, ProfileActionTypes>;

export const getUserData = (userId: number): ThunkType => async dispatch => {
    const data = await api.getUserData(userId);
    dispatch(setUserProfileData(data))
}


export const getUserStatus = (userId: number): ThunkType => async dispatch => {
    const response = await api.getUserStatus(userId);
    dispatch(setUserStatus(response.data))
}


export const updateUserStatus = (status: string): ThunkType => async dispatch => {
    const response = await api.updateUserStatus(status);
    if(response.resultCode === 0) dispatch(setUserStatus(response.data))
}


const profileReducer = (state = inicialState, action: ProfileActionTypes): InicialStateType => {
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