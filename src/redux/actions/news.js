import {ADD_NEW_POST, EDIT_NEW_POST_TEXT, GET_ALL_POSTS} from '../actions_types/news';

export const editNewPostText = (text) => {
    return {
        type: EDIT_NEW_POST_TEXT,
        text
    }
}

export const addNewPost = () => {
    return {
        type: ADD_NEW_POST
    }
}

export const getAllPosts = () => {
    return {
        type: GET_ALL_POSTS
    }
}