// @flow

import {combineReducers} from 'redux';
import firstState from '../app/reducers';

import type {State as FirstState} from '../app/typedef';

export type State = {|
    firstState: FirstState
|};

export default combineReducers({
    firstState
});
