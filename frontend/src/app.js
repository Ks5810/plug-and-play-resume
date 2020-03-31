/**
 * app.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from "./store/configureStore";
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';
import AppRouter from "./routers/AppRouter";
import 'react-dates/initialize';
import "./styles/scss/styles.scss";
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

console.log('app.js is running');

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={ store }>
                <AppRouter/>
            </Provider>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));


