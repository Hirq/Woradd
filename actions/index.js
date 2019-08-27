import { ADD_ARTICLE, DELETE_ARTICLE } from "../constants/actionTypes";
                           
export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export const deleteContact = (id) => {
    return { 
        type: DELETE_ARTICLE, 
        id: id
    }
}
