import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type){
    case actionTypes.CREATE_NEW_SET:
      return [
        ...state, 
        Object.assign({}, action.set)
      ];
    case actionTypes.REMOVE_SET:
      return state.filter((data, i) => i !== action.id);
    default:
      return state;
  }
};