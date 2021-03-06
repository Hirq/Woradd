import { createStore } from 'redux';
import rootReducer from 'js/reducers';

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}