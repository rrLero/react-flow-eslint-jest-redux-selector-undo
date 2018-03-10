// @flow

import React, {Fragment} from 'react';
import type {BoxType} from '../app/typedef';

type Props = {
    firstState: string,
    boxes: Array<BoxType>,
    addBox: (BoxType) => void,
    onUndo: () => void,
    onRedo: () => void,
    canRedo: boolean,
    canUndo: boolean
};

class Test2 extends React.Component<Props> {

    render() {
        return (
            <Fragment>
                <ul>
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

export default Test2;
