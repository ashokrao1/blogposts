import { combineReducers } from 'redux';

import blogPostReducer from './modules/blog-post/blog-post-reducer';

const combinedReducer = combineReducers({
    blogPostReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET_APP_STORE') {
        state = undefined;
    }
    return combinedReducer(state, action);
};
  
export default rootReducer;