import React, { Component } from 'react';
import { Button } from 'antd';
import fs from 'fs'
class BtnRetrace extends Component {
    state = { loading: false }

    requestRetrace = () => {
        this.setState({ loading: true });

        console.log('path:%s', fs.promises.)
        const source = this.props.sourceText()
        console.log('retrace start: %s', source)

        if (source.trim() == '') {
            this.showError('There is no source text.')
        } else {
            // TODO update retraced text after retrace completed.
            setTimeout(() => {
                this.setState({ loading: false });
                console.log('retrace finished')
                this.props.result(source)
            }, 5000);
        }
    }

    showError = (message) => {
        console.log(message)
        this.props.result(message)
        this.setState({ loading: false });
    }

    render() {
        const { loading } = this.state;
        return (
            <>
                <Button
                    type="primary"
                    loading={loading}
                    onClick={() => this.requestRetrace()}>
                    Retrace
                </Button>
            </>
        );
    }
}

export default BtnRetrace;