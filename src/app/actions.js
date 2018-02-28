// @flow
import {CALL_API, get} from '../api/index';

import {
    GET_BOXES_REQUEST,
    GET_BOXES_SUCCESS,
    GET_BOXES_FAILURE
} from './constants';

import type {ApiDispatcher} from '../store/typedef';

export const getBoxes = (): ApiDispatcher => (dispatch, getState) => {
    return dispatch({
        [CALL_API]: {
            types: [
                GET_BOXES_REQUEST,
                GET_BOXES_SUCCESS,
                GET_BOXES_FAILURE
            ],
            endpoint: () => get('boxes')
        }
    });
};
