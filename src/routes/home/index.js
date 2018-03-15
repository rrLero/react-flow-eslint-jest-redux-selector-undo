// @flow

import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {ActionCreators as UndoActionCreators} from 'redux-undo';
import {withStyles} from 'material-ui/styles';
import {getBoxes, addBox} from '../../app/actions';
import {getFilteredBoxes} from '../../selectors';
import type {BoxType} from '../../app/typedef';

import Test2 from '../../components/test-selector-undo/index';
import Slide from '../../components/test-material-slide/index';

type OwnProps = {
};

type DispatchProps = {
    getBoxes: () => void,
    addBox: (BoxType) => void,
    onUndo: () => void,
    onRedo: () => void
};

type StateProps = {
    boxes: Array<BoxType>,
    firstState: string,
    canUndo: boolean,
    canRedo: boolean
};

type Props = OwnProps & DispatchProps & StateProps;


class Home extends React.Component<Props> {

    componentWillMount() {
        this.props.getBoxes();
    }

    render() {
        return (
            <div>
                <Test2
                    {...this.props}
                />
                <Slide/>
            </div>
        );
    }
}

export default compose(connect(state => ({
    boxes: getFilteredBoxes(state.startState.present.boxes, 'sent'),
    firstState: state.startState.firstState,
    canUndo: state.startState.past.length > 0,
    canRedo: state.startState.future.length > 0
}), {
    getBoxes,
    addBox,
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
}), withStyles())(Home);

