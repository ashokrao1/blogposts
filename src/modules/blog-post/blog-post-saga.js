import { call, put, takeLatest } from 'redux-saga/effects';


import * as Constants from './blog-post-constants';

//TODO: ajaxHandler to be in commons
const makeAjaxCall = (endpoint, options) => {
    return fetch(endpoint, options).then(response => response.json()).catch(response => response);
}

const ajaxHandler = function* (endpoint, options) {  
    let response = yield makeAjaxCall(endpoint, options);
    return response;
};



const getBlogPosts = function* (action){
    let {errorAction, successAction} = action.data;
    let response = yield call(ajaxHandler, '//api.myjson.com/bins/rz0wi', {});

    if (Array.isArray(response)) {
        yield put({
            type: successAction,
            data: response
        }) 
    } else {
        yield put({
            type: errorAction
        }) 
    }

};

function* watchGetBlogPost() {
    yield takeLatest(Constants.GET_BLOG_POSTS, getBlogPosts);
}


export {
     watchGetBlogPost
};