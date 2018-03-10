// @flow

import {createSelector} from 'reselect';

const getBoxes = (state, filter) => {
    return state;
};

const getFilter = (state, filter) => {
    return filter;
};

export const getFilteredBoxes = createSelector(
    [getBoxes, getFilter],
    (boxes, filter) => {
        // return boxes.filter(box => box.name === filter);
        return boxes;
    }
);
