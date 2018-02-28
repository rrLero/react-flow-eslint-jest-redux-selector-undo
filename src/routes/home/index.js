// @flow

import React from 'react';
import {connect} from 'react-redux';

import {getBoxes} from '../../app/actions';
import type {BoxType} from '../../app/typedef';

type OwnProps = {
};

type DispatchProps = {
    getBoxes: () => void
};

type StateProps = {
    boxes: Array<BoxType>,
    firstState: string
};

type Props = OwnProps & DispatchProps & StateProps;


const Home = (props: Props) => {
    if (!props.boxes.length) {
        props.getBoxes();
    }
    return (
        <ul>
            <h1>{props.firstState}</h1>
            {props.boxes.map(box => (
                <li key={box.id}>
                    {box.name}
                </li>
            ))}
        </ul>
    );
};

export default connect(state => ({
    boxes: state.firstState.boxes,
    firstState: state.firstState.firstState
}), {
    getBoxes
})(Home);

