import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
  switch(action.type){
    case actionTypes.CREATE_NEW_POST:
      return [
        ...state,
      Object.assign({}, action.post)
      ];
    case actionTypes.REMOVE_POST:
      return state.filter((data, i) => i !== action.id);
    default:
      return state;
    }
};