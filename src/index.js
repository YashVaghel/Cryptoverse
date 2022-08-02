import React from "react";
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom'
import 'antd/dist/antd.css'

import { Provider } from "react-redux";
import store from './app/store'
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
<Router>
    <Provider store={store}>

<App/>
    </Provider>
</Router>
 ,
);
