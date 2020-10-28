import { SET_AUTH_USER_DATA } from './../actions_types/auth';

import {AuthActionTypes, setAuthUserData } from '../actions/auth';
import Api from './../../api/api';
const api = new Api();

//type InicialStateType = typeof inicialState;

type InicialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

const inicialState: InicialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const getAuthUserData = () => (dispatch: any) => {
    api.getAuthUserData()
        .then(response => {
            if(response.resultCode === 0){
                dispatch(setAuthUserData(response.data))
            }
        } )
}

const authReducer = (state = inicialState, action: AuthActionTypes): InicialStateType => {
    switch (action.type){
        case SET_AUTH_USER_DATA:
            return {
                ...action.data,
                isAuth: true
            }

        default: return state;
    }
}

export default authReducer;