// @flow

import React from 'react';

type Props = {};

class FileInput extends React.Component<Props> {

    fileInput: HTMLInputElement | { files: Array<{name: string}> };

    shouldComponentUpdate() {
        return false;
    }

    handleSubmit = (event: MouseEvent) => {
        event.preventDefault();
        console.log(// eslint-disable-line no-console
            `Selected file - ${this.fileInput.files[0].name}`, this.fileInput
        );
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Upload file:
                    <input
                        type="file"
                        ref={input => {
                            this.fileInput = input ? input : document.createElement('input');
                        }}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default FileInput;
