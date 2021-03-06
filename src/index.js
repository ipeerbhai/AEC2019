import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
import { Provider } from 'react-redux';
import {createStore } from 'redux';
import reducer from './store/reducer';

axios.defaults.baseURL = 'http://localhost:5001';

//------------------------------------------------------------------------------------------------
const store = createStore(reducer); // create the global store and give it a reference to our reducer.

//------------------------------------------------------------------------------------------------
// Function:
//  Enable routing for our app.
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
