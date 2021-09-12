import React, { Component, FileList } from 'react';
import { Input } from 'antd';

class Setting extends Component {
    state = {
        file: '',
        path: ''
    }
    handleChange = (selectorFiles) => {
        console.log(selectorFiles);
        const files = Array.from(selectorFiles)

        const filePath = files[0].path
        console.log('filePath:%s', filePath)
        const paths = filePath.split('\\')
        const length = paths.length
        console.log('length:%s', length)
        const path = paths.slice(0, length - 1).join('\\')
        console.log('path:%s', path)
        this.setState({
            file: selectorFiles,
            path: path
        });

    }
    render() {
        return (
            <>
                <div>
                    <h1>
                        mapping path :
                        <Input
                            type='text'
                            disabled='true'
                            placeholder='Display mapping file path.'
                            value={this.state.path} />
                    </h1>
                </div>
                <div>
                    <h1>
                        mapping file :
                        <Input
                            type='file'
                            onChange={(e) => this.handleChange(e.target.files)} />
                    </h1>
                </div>
            </>
        );
    }
}

export default Setting;