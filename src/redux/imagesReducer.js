import { getImages } from '../api/api';
import { put, call } from 'redux-saga/effects'

const LOAD_IMAGES = 'LOAD_IMAGES';
const LOAD_IMAGE_INFO = 'LOAD_IMAGE_INFO';
const TOGGLE_LOADER = 'TOGGLE_LOADER';

const initialState = {
    images: [],
    imageInfo: {},
    loading: false
};

const sortByCategory = (arr, segmentSize) => {
    const res = [];
    for (let i = 0; i < arr.length; i += segmentSize) {
        const segment = arr.slice(i, i + segmentSize);
        res.push(segment);
    };
    return res;
};

export const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_IMAGES:
            return {
                ...state,
                images: sortByCategory(action.payload, 6)
            }

        case LOAD_IMAGE_INFO:
            return {
                ...state,
                imageInfo: action.payload
            }

        case TOGGLE_LOADER:
            return {
                ...state,
                loading: action.payload
            }

        default:
            break;
    };
};

const delay = () => new Promise(resolve => setTimeout(resolve, 500));

export function* uploadImages() {
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