export const LOAD_IMAGES = 'LOAD_IMAGES';
export const LOAD_IMAGE_INFO = 'LOAD_IMAGE_INFO';
export const TOGGLE_LOADER = 'TOGGLE_LOADER';

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