import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/reducersIndex';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = applyMiddleware(logger);
const createStoreWithMiddleware = createStore(rootReducer, devTools, applyMiddleware(thunk, logger))
const store = createStore(rootReducer, devTools, middleware);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
