import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Styles/bootstrap.min.css';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux'
import BookReducer from './Components/store/reducer'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const loggerMiddleware = storeAPI => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', storeAPI.getState())
  return result
}

const composedEnhancer = composeWithDevTools(
  applyMiddleware(loggerMiddleware, thunkMiddleware)
)

const appStore = createStore(combineReducers({BookReducer}) , composedEnhancer)

ReactDOM.render(
  <React.StrictMode>
        <Provider store={appStore}>
            <App />
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
