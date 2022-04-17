import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { imagesReducer } from "./imagesReducer";
import { uploadImages } from "./imagesReducer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(imagesReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(uploadImages);

export default store;