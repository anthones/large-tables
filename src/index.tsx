import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducers } from "./reducers";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  initialTypeOptions as typeOptions,
  initialStatusOptions as statusOptions,
} from "./actions";
import "./index.css";

const reduxDebug = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

const initialStore = {
  typeOptions,
  statusOptions,
};
const store = createStore(reducers, initialStore, reduxDebug && reduxDebug());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
