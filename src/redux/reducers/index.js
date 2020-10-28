import { combineReducers } from 'redux';
import newsReducer from './news';
import usersReducer from './users';
import profileReducer from './profile';
import authReducer from './auth';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    newsReducer,
    usersReducer,
    profileReducer,
    authReducer,
    form: formReducer
});
