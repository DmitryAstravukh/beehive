import {ADD_NEW_POST, EDIT_NEW_POST_TEXT, GET_ALL_POSTS} from '../actions_types/news';
import avatar from './../assets/image/avatar.jpg';

const initialState = {
    newPost: {
        text: '',
    },
    posts: [
        {
            id: 1,
            ownerId: 23,
            ownerName: 'Ivanov Ivan',
            ownerAvatar: '',
            releaseDate: '20.08.2020',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi aspernatur, beatae dolor ipsam officiis quia sit tenetur voluptas. Aliquid amet aperiam aspernatur commodi distinctio doloribus, harum ipsam possimus reprehenderit!',
            likes: 8,
            views: 100
        },
        {
            id: 2,
            ownerId: 24,
            ownerName: 'Ivanov Ivan1',
            ownerAvatar: avatar,
            releaseDate: '21.08.2020',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi aspernatur, beatae dolor ipsam officiis quia sit tenetur voluptas. Aliquid amet aperiam aspernatur commodi distinctio doloribus, harum ipsam possimus reprehenderit!',
            likes: 9,
            views: 20
        },
        {
            id: 3,
            ownerId: 25,
            ownerName: 'Ivanov Ivan 2',
            ownerAvatar: '',
            releaseDate: '22.08.2020',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi aspernatur, beatae dolor ipsam officiis quia sit tenetur voluptas. Aliquid amet aperiam aspernatur commodi distinctio doloribus, harum ipsam possimus reprehenderit!',
            likes: 10,
            views: 10
        }
    ]
}

const editNewPostText = (state, text) => {
    return {
        ...state,
        newPost: {
            text
        }
    }
}

const addNewPost = (state) => {
    const date = new Date();
    const newPost = {
        id: 4,
        ownerId: 25,
        ownerName: 'Ivanov Ivan 3',
        ownerAvatar: '',
        releaseDate: `${date.getDate()}.${(date.getMonth() + 1)}.${date.getFullYear()}`,
        text: state.newPost.text,
        likes: 11,
        views: 11
    };

    return {
        ...state,
        posts: [
            ...state.posts,
            newPost
        ],
        newPost: {
            text: ''
        }
    }
}

const getAllPosts = (state) => {
    return state.posts;
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_NEW_POST_TEXT :
            return editNewPostText(state, action.text);

        case ADD_NEW_POST :
            return addNewPost(state);

        case GET_ALL_POSTS :
            return getAllPosts(state);

        default: return state;

    }
}
export default newsReducer;