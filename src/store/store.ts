import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import createSagaMiddleWare from "redux-saga";
import { mainSaga } from "./saga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleWare();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mainSaga);

export default store;
