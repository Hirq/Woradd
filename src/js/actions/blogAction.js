import * as actionTypes from 'js/actions/actionTypes';

export const createPost = (post) => {
    return{
        type: actionTypes.CREATE_NEW_POST,
        post: post
    }
};

export const deletePost = (id) => {
    return{
        type: actionTypes.REMOVE_POST,
        id: id
    }
};
