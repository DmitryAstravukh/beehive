import Api, {ResultCodesEnum} from '../../api/api';
import {setUsers, toggleLoading, toggleFollow, toggleFollowInProgress} from '../actions/users';
import {UserItemType} from "../../types/users-types";
import {ThunkAction} from "redux-thunk";
import {UsersActionTypes} from "../actions";
const api: any = new Api();


type InicialStateType = {
    users: Array<UserItemType>,
    currentPage: number,
    pageSize: number,
    pageSizeSteps: Array<number>,
    totalCount: number,
    isLoading: boolean,
    followInProgress: Array<number>
}

const inicialState = {
    users: [],
    currentPage: 1, //api default
    pageSize: 10, //api default
    pageSizeSteps: [10, 20, 50, 100],
    totalCount: 0,
    isLoading: true,
    followInProgress:[]
}

const changePageSize = (state: InicialStateType, pageSize: number): InicialStateType => {
    return { ...state, users: [], pageSize }
}

const changePageNumber = (state: InicialStateType): InicialStateType => {
    return { ...state, currentPage: state.currentPage + 1 }
}

const clearUsersList = (state: InicialStateType): InicialStateType => {
    return { ...state, users: [] }
}

type ThunkType = ThunkAction<Promise<void>, InicialStateType, unknown, UsersActionTypes>;

export const toggleFollowing = (userId: number, followed: boolean): ThunkType => async dispatch => {
    dispatch(toggleFollowInProgress(userId, true));
    const data = await api.toggleFollow(userId, followed);
    dispatch(toggleFollowInProgress(userId, false));
    if(data.resultCode === ResultCodesEnum.Success) dispatch(toggleFollow(userId))
}

export const getUsers = (currentPage: number, pageSize: number): ThunkType => async dispatch => {
    dispatch(toggleLoading(true));
    const users = await api.getUsers(currentPage, pageSize);
    dispatch(toggleLoading(false));
    dispatch(setUsers(users));
}

const usersReducer = (state = inicialState, action: UsersActionTypes): InicialStateType => {
    switch (action.type) {
        case 'users/SET_USERS':
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.users.items
                ],
                totalCount: action.users.totalCount
            }

        case 'users/CHANGE_PAGE_SIZE': return changePageSize(state, action.pageSize);

        case 'users/CHANGE_PAGE_NUMBER': return changePageNumber(state);

        case 'users/TOGGLE_LOADING': return { ...state, isLoading: action.isLoading }

        case 'users/TOGGLE_FOLLOW':
            return {
                ...state,
                users: state.users.map((user: UserItemType) => {
                    if(user.id === action.userId) {
                        return {
                            ...user,
                            followed: !user.followed
                        }
                    }
                    return user
                })
            }


        case 'users/TOGGLE_FOLLOW_IN_PROGRESS':
            return {
                ...state,
                followInProgress: action.isFetching ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)

            }

        case 'users/CLEAR_USERS_LIST': return clearUsersList(state);

        default: return state;
    }
}

export default usersReducer;