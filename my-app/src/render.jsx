import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './Redux/State'
import {addPost, addLike, updateNewPostText} from './Redux/State'
import {BrowserRouter} from "react-router-dom";

const rerenderRoot = () => {
    return (
        ReactDOM.render(
            <React.StrictMode>
                <BrowserRouter>
                    <App state={state}
                         addPost={addPost}
                         updateNewPostText={updateNewPostText}
                    />
                </BrowserRouter>
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}

export default rerenderRoot

