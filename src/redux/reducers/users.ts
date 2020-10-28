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
import Api from './../../api/api';
import { setUsers, toggleLoading, toggleFollow, toggleFollowInProgress } from '../actions/users';
import {UserType} from "../../types/users-types";
const api: any = new Api();


type InicialStateType = {
    users: Array<UserType>,
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
    return {
        ...state,
        users: [],
        pageSize
    }
}

const changePageNumber = (state: InicialStateType): InicialStateType => {
    return {
        ...state,
        currentPage: state.currentPage + 1
    }
}

const clearUsersList = (state: InicialStateType): InicialStateType => {
    return {
        ...state,
        users: []
    }
}

export const toggleFollowing = (userId: number, followed: boolean) => (dispatch: any) => {
    dispatch(toggleFollowInProgress(userId, true));

    api.toggleFollow(userId, followed)
        .then((data: any) => {
            dispatch(toggleFollowInProgress(userId, false));

            if(data.resultCode === 0){
                return dispatch(toggleFollow(userId))
            }
        }).catch((error: any) => alert(error))
}

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: any) => {
    dispatch(toggleLoading(true));
    api.getUsers(currentPage, pageSize)
        .then((data: any) => {
            dispatch(toggleLoading(false));
            dispatch(setUsers(data));
        })
}



const usersReducer = (state = inicialState, action: any): InicialStateType => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.users.items
                ],
                totalCount: action.users.totalCount
            }

        case CHANGE_PAGE_SIZE:
            return changePageSize(state, action.pageSize);

        case CHANGE_PAGE_NUMBER:
            return changePageNumber(state);

        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }

        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map((user: UserType) => {
                    if(user.id === action.userId) {
                        return {
                            ...user,
                            followed: !user.followed
                        }
                    }
                    return user
                })
            }


        case TOGGLE_FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followInProgress: action.isFetching ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)

            }

        case CLEAR_USERS_LIST:
            return clearUsersList(state);

        default:
            return state;
    }
}

export default usersReducer;