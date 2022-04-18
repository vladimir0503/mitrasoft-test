import { getImages, getImageInfo } from "../api/api";
import { put, call, takeEvery, fork } from 'redux-saga/effects';
import { LOAD_IMAGES, LOAD_IMAGE_INFO, TOGGLE_LOADER } from "./imagesReducer";

export const fetchImageInfo = (id) => {
    return { type: 'FETCH_IMAGE_INFO', id: id }
};

export const fetchImages = () => {
    return { type: 'FETCH_IMAGES' };
};

function* watchFetchInfo() {
    yield takeEvery('FETCH_IMAGE_INFO', loadImageInfo)
};

function* watchFetchImages() {
    yield takeEvery('FETCH_IMAGES', loadImages);
};

const delay = () => new Promise(resolve => setTimeout(resolve, 500));

function* loadImages() {
    try {
        yield put({ type: TOGGLE_LOADER, payload: true });
        const data = yield call(getImages);
        yield put({ type: LOAD_IMAGES, payload: data.data });
        yield call(delay);
        yield put({ type: TOGGLE_LOADER, payload: false });
    } catch (error) {
        console.log(error);
    };
};

function* loadImageInfo(param) {
    try {
        yield put({ type: TOGGLE_LOADER, payload: true });
        const data = yield call(getImageInfo, param.id);
        yield put({ type: LOAD_IMAGE_INFO, payload: data.data });
        yield call(delay);
        yield put({ type: TOGGLE_LOADER, payload: false });
    } catch (error) {
        console.log(error);
    };
};

export function* rootSaga() {
    yield fork(loadImageInfo)
    yield fork(watchFetchImages)
    yield fork(watchFetchInfo)
};