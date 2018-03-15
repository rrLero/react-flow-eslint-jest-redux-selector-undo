// @flow

import {combineReducers} from 'redux';
import startState from '../app/reducers';

import type {State as StartState} from '../app/reducers';

export type State = {|
    startState: StartState
|};

export default combineReducers({
    startState
});
