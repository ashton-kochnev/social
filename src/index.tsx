import reportWebVitals from './reportWebVitals';
import store from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const _callSubscriber = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
                 dispatch={store.dispatch.bind(store)}
                 // addPost={store.addPost.bind(store)}
                 // updateNewPostText={store.updateNewPostText.bind(store)}
                 // addMessage={store.addMessage.bind(store)}
                 // updateNewMessage={store.updateNewMessage.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

_callSubscriber()

store.subscribe(_callSubscriber)

reportWebVitals();