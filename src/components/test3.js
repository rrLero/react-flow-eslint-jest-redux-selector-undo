// @flow

import React from 'react';

type Props = {};
type State = {
    text: string,
    inputText: string,
    mode: string
};

class Test3 extends React.Component<Props, State> {

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
        if (this.state.mode === 'view') {
            return (
                <div>
                    <p>Text: {this.state.text}</p>
                    <button onClick={this.handleEdit}>
                        Edit
                    </button>
                </div>
            );
        } else {
            return (
                <div>
                    <p>Text: {this.state.text}</p>
                    <input
                        onChange={this.handleChange}
                        value={this.state.inputText}
                    />
                    <button onClick={this.handleSave}>
                        Save
                    </button>
                </div>
            );
        }
    }
}

export default Test3;
