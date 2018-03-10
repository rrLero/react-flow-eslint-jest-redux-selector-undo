// @flow

import React from 'react';

type Props = {};
type State = {
    text: string,
    inputText: string,
    mode: string
};

class Test4 extends React.Component<Props, State> {

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
                    !view &&
                    (
                        <p>
                            <input
                                onChange={this.handleChange}
                                value={this.state.inputText}
                            />
                        </p>
                    )
                }
                {
                    (() => {
                        const handler = view
                            ? this.handleEdit
                            : this.handleSave;
                        const label = view ? 'Edit' : 'Save';

                        return (
                            <button onClick={handler}>
                                {label}
                            </button>
                        );
                    })()
                }
            </div>
        );
    }
}

export default Test4;
