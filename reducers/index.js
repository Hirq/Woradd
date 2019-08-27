import { ADD_ARTICLE, DELETE_ARTICLE } from "../constants/actionTypes";


const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === DELETE_ARTICLE) {
    return state.articles.filter((data, i) => i !== action.id);

  }

  return state;
}



export default rootReducer;