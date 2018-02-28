// @flow

import {GET_BOXES_REQUEST, GET_BOXES_SUCCESS, GET_BOXES_FAILURE} from './constants';

import type {State, BoxType} from './typedef';

const DEFAULT_STATE: State = {
    firstState: 'HelloWorld',
    boxes: []
};

type Action =
    | { type: 'GET_BOXES_REQUEST' }
    | { type: 'GET_BOXES_SUCCESS', response: Array<BoxType> }
    | { type: 'GET_BOXES_FAILURE', error: string };

export default (state: State = DEFAULT_STATE, action: Action): State => {

    if (action.type === GET_BOXES_REQUEST) {
        return {
            ...state
        };
    }

    if (action.type === GET_BOXES_SUCCESS) {
        return {
            ...state,
            boxes: action.response
        };
    }

    if (action.type === GET_BOXES_FAILURE) {
        return {
            ...state
        };
    }

    return state;
};
