import { combineReducers } from 'redux';
import  contacts  from './contactReducer';
import notes from './noteReducer';
import sets from './setReducer';
import posts from './blogReducer';

export default combineReducers({
    contacts: contacts,
    notes: notes,
    sets: sets,
    posts: posts,
});
