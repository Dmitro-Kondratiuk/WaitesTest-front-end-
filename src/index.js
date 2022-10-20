import React from 'react';
import ReactDOM from 'react-dom/client';
import store from "./redux/redux-state";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderTree=()=> {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store} >
                <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );

}
renderTree(store.getState());
store.subscribe(()=>{
    let state = store.getState()
        renderTree(state)
})

reportWebVitals();
