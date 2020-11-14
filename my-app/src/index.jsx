
import reportWebVitals from "./reportWebVitals";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/State'
import {BrowserRouter} from "react-router-dom";

const rerenderRoot = () => {
    return (
        ReactDOM.render(
            <React.StrictMode>
                <BrowserRouter>
                    <App state={store.getState()}
                         dispatch={store.dispatch.bind(store)}
                         // addMessage={store.addMessage.bind(store)}
                         // updateMessage={store.updateMessage}
                    />
                </BrowserRouter>
            </React.StrictMode>, document.getElementById('root')))
}

rerenderRoot(store.getState());

store.subscribe(rerenderRoot)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();