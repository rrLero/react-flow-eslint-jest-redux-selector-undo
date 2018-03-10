// @flow

import React from 'react';
import {connect} from 'react-redux';
import {ActionCreators as UndoActionCreators} from 'redux-undo';
import {getBoxes, addBox} from '../../app/actions';
import {getFilteredBoxes} from '../../selectors';
import type {BoxType} from '../../app/typedef';

import Test from '../../components/test1';
import Test2 from '../../components/test2';
import Test3 from '../../components/test3';
import Test4 from '../../components/test4';
import Test5 from '../../components/test5';
import Test6 from '../../components/test6';
import Test7 from '../../components/test7';

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
                <Test/>
                <Test3/>
                <Test4/>
                <Test5/>
                <Test6/>
                <Test7/>
            </div>

        );
    }
}

export default connect(state => ({
    boxes: getFilteredBoxes(state.firstState.present.boxes, 'sent'),
    firstState: state.firstState.firstState,
    canUndo: state.firstState.past.length > 0,
    canRedo: state.firstState.future.length > 0
}), {
    getBoxes,
    addBox,
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
})(Home);

