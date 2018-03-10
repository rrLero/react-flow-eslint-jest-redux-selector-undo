// @flow

import React from 'react';
import type {Element} from 'react';

type Props = {};
type State = {
    text: string,
    inputText: string,
    mode: string
};

type SaveProps = {
    handleChange: (MouseEvent) => void,
    handleSave: () => void,
    text: string
};

const SaveComponent = ({handleChange, handleSave, text}: SaveProps) => {
    return (
        <div>
            <p>
                <input
                    onChange={handleChange}
                    value={text}
                />
            </p>
            <button onClick={handleSave}>
                Save
            </button>
        </div>
    );
};

const EditComponent = ({handleEdit}: {handleEdit: () => void}) => {
    return (
        <button onClick={handleEdit}>
            Edit
        </button>
    );
};

const If = (props: {condition: boolean, then: Element<typeof EditComponent>, else: Element<typeof SaveComponent>}) => {
    const condition = props.condition || false;
    const positive = props.then || null;
    const negative = props.else || null;

    return condition ? positive : negative;
};

class Test6 extends React.Component<Props, State> {

    state = {text: '', inputText: '', mode: 'view'};

    handleChange = (e: MouseEvent) => {
        if (e.target instanceof HTMLInputElement) {
            this.setState({inputText: e.target.value});
        }
    };

    handleSave = () => {
        this.setState({text: this.state.inputText, mode: 'view'});
    };

    handleEdit = () => {
        this.setState({mode: 'edit'});
    };

    render() {
        const view = this.state.mode === 'view';
        const editComponent = <EditComponent handleEdit={this.handleEdit} />;
        const saveComponent =
            <SaveComponent
                handleChange={this.handleChange}
                handleSave={this.handleSave}
                text={this.state.inputText}
            />;
        return (
            <div>
                <p>Text: {this.state.text}</p>
                <If
                    condition={view}
                    then={editComponent}
                    else={saveComponent}
                />
            </div>
        );
    }
}

export default Test6;
