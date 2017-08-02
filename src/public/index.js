import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from '../controls/Root'
import './index.css';
import {store} from '../redux/configureStore';

//prime
ReactDOM.render(
	<AppContainer>
	    <Root store={store} />
	</AppContainer>,
	document.getElementById("root")
)


