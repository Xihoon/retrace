import React, { Component } from 'react';
import {
	Layout,
	Tabs,
    Tab
} from 'flipper-plugin';

import Retrace from './retrace.js';
import Setting from './setting.js';

class App extends Component {
    render() {
        return (
        <Layout.Container>
			<Tabs>
                <Tab gap pad tab="Retrace">
					<Retrace />
				</Tab>
                <Tab tab="Setting">
					<Setting />
				</Tab>
			</Tabs>
		</Layout.Container>
        );
    }
}

export default App;