import { DevicePluginClient } from 'flipper-plugin';
import React from 'react';
import App from './components/app.js';

export function devicePlugin(client: DevicePluginClient) {
	return {}; // API exposed from this plugin
}

export function Component() {
	// Plugin UI
	return (<App />);
}