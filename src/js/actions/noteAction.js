import * as actionTypes from './actionTypes';

export const createNote = (note) => {
    return {
        type: actionTypes.CREATE_NEW_NOTE,
        note: note
    }
};

export const deleteNote = (id) => {
    return {
        type: actionTypes.REMOVE_NOTE,
        id: id
    }
};
