// @flow

import React, {Fragment} from 'react';
import {withStyles} from 'material-ui/styles';
import type {BoxType} from '../../app/typedef';
import styles from './styles';

type OwnProps = {
    firstState: string,
    boxes: Array<BoxType>,
    addBox: (BoxType) => void,
    onUndo: () => void,
    onRedo: () => void,
    canRedo: boolean,
    canUndo: boolean
};

type WithProps = {
    classes: $Call<typeof styles>
};

type Props = OwnProps & WithProps;

class Test2 extends React.Component<Props> {

    render() {
        const {classes} = this.props;

        return (
            <Fragment>
                <ul className={classes.mineRule1}>
                    <h1>{this.props.firstState}</h1>
                    {this.props.boxes.map(box => (
                        <li key={box.id}>
                            {box.name}
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => this.props.addBox({
                        id: Date.now(),
                        name: 'test',
                        icon: 'test'
                    })}
                    type={'button'}>
                    AddBox
                </button>
                <p>
                    <button onClick={this.props.onUndo} disabled={!this.props.canUndo}>
                        Undo
                    </button>
                    <button onClick={this.props.onRedo} disabled={!this.props.canRedo}>
                        Redo
                    </button>
                </p>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Test2);
