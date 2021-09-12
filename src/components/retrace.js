import React, { Component } from 'react';
import { Input } from 'antd';
import BtnRetrace from './btn_retrace';

const { TextArea } = Input

class Retrace extends Component {
    state = {
        sourceText: '',
        targetText: ''
    }

    result = (targetText) => {
        console.log('result %s', targetText)
        this.setState(({ }) => {
            return { targetText: targetText };
        });
    }

    onSourceChanged = (e) => {
        console.log('source changed: %s', e.target.value)
        this.setState({ sourceText: e.target.value, });
    }

    sourceText = () => {
        return this.state.sourceText
    }

    render() {
        return (
            <>
                <div>
                    <TextArea
                        rows={10}
                        placeholder='Enter trace string'
                        onChange={this.onSourceChanged} />
                </div>

                <div>
                    <TextArea
                        rows={10}
                        placeholder='Display retrace string'
                        disabled='true'
                        value={this.state.targetText} />
                </div>

                <div>
                    <BtnRetrace
                        result={this.result}
                        sourceText={this.sourceText} />
                </div>
            </>
        );
    }
}

export default Retrace;