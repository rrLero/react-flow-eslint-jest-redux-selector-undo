// @flow
import {CALL_API, get} from '../api/index';

import {
    GET_BOXES_REQUEST, GET_BOXES_SUCCESS, GET_BOXES_FAILURE,
    ADD_BOX
} from './constants';

import type {ApiDispatcher, Dispatcher} from '../store/typedef';
import type {BoxType} from './typedef';

export const getBoxes = (): ApiDispatcher => (dispatch, getState) => {
    return dispatch({
        [CALL_API]: {
            types: [
                GET_BOXES_REQUEST,
                GET_BOXES_SUCCESS,
                GET_BOXES_FAILURE
            ],
            endpoint: () => get('boxes')
        },
        payload: {
            test: 'test'
        }
    });
};

export const addBox = (box: BoxType): Dispatcher => (dispatch, getState) => dispatch({
    type: ADD_BOX,
    box
});

