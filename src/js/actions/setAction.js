import * as actionTypes from 'js/actions/actionTypes';

export const createSet = (set) => {
    return {
        type: actionTypes.CREATE_NEW_SET,
        set: set
    }
};

export const deleteSet = (id) => {
    return {
        type: actionTypes.REMOVE_SET,
        id: id
    }
};
