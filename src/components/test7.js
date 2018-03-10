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

const withEither = (conditionalRenderingFn, EitherComponent) => Component => props =>
    (conditionalRenderingFn(props)
        ? <EitherComponent {...props} />
        : <Component {...props} />);

const isViewConditionFn = props => props.mode === 'view';

const withEditContionalRendering = withEither(isViewConditionFn, EditComponent);
const EditSaveWithConditionalRendering = withEditContionalRendering(SaveComponent);

class Test7 extends React.Component<Props, State> {

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
        return (
            <div>
                <p>Text: {this.state.text}</p>
                <EditSaveWithConditionalRendering
                    mode={this.state.mode}
                    handleEdit={this.handleEdit}
                    handleChange={this.handleChange}
                    handleSave={this.handleSave}
                    text={this.state.inputText}
                />
            </div>
        );
    }
}

export default Test7;
