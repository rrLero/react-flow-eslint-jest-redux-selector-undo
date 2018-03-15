// @flow

import undoable, {distinctState} from 'redux-undo';
import {GET_BOXES_REQUEST, GET_BOXES_SUCCESS, GET_BOXES_FAILURE, ADD_BOX} from './constants';

import type {BoxType} from './typedef';

const DEFAULT_STATE = {
    firstState: 'HelloWorld',
    boxes: []
};

export type State = {
    firstState: string,
    boxes: Array<BoxType>
};

type Action =
    | { type: 'GET_BOXES_REQUEST' }
    | { type: 'GET_BOXES_SUCCESS', response: Array<BoxType> }
    | { type: 'GET_BOXES_FAILURE', error: string }
    | { type: 'ADD_BOX', box: BoxType };

const Boxes = (state: State = DEFAULT_STATE, action: Action): State => {

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

    if (action.type === ADD_BOX) {
        return {
            ...state,
            boxes: [...state.boxes, action.box]
        };
    }

    return state;
};

const undoableBoxes = undoable(Boxes, {
    filter: distinctState()
});

export default undoableBoxes;
