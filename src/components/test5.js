// @flow

import React from 'react';

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

class Test5 extends React.Component<Props, State> {

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
        return (
            <div>
                <p>Text: {this.state.text}</p>
                {
                    view
                        ? <EditComponent handleEdit={this.handleEdit}/>
                        : (
                            <SaveComponent
                                handleChange={this.handleChange}
                                handleSave={this.handleSave}
                                text={this.state.inputText}
                            />
                        )
                }
            </div>
        );
    }
}

export default Test5;
