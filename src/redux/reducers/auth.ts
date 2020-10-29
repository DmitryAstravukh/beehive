import { setAuthUserData } from '../actions/auth';
import Api, { ResultCodesEnum } from '../../api/api';
import {ThunkAction} from "redux-thunk";
import {AuthActionTypes} from "../actions";
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

type ThunkType = ThunkAction<Promise<void>, InicialStateType, unknown, AuthActionTypes>;

export const getAuthUserData = (): ThunkType => async dispatch => {
    const r = await api.getAuthUserData();
    if(r.resultCode === ResultCodesEnum.Success) dispatch(setAuthUserData(r.data))
}

const authReducer = (state = inicialState, action: AuthActionTypes): InicialStateType => {
    switch (action.type){
        case 'auth/SET_AUTH_USER_DATA':
            return {
                ...action.userData,
                isAuth: true
            }

        default: return state;
    }
}

export default authReducer;