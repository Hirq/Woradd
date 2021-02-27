import { combineReducers } from 'redux';
import  contacts  from 'js/reducers/contactReducer';
import notes from 'js/reducers/noteReducer';
import sets from 'js/reducers/setReducer';
import posts from 'js/reducers/blogReducer';

export default combineReducers({
    contacts: contacts,
    notes: notes,
    sets: sets,
    posts: posts,
});
