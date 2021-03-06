import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import api from '../api';
import rootReducer from '../reducers';

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        compose(applyMiddleware(thunk, api))
    );
}
