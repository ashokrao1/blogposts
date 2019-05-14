import * as ActionTypes from './blog-post-constants';

export const getBlogPosts = () => {
    return {
        type: ActionTypes.GET_BLOG_POSTS,
        data: {
            successAction: ActionTypes.GET_BLOG_POSTS_SUCCESS,
            errorAction: ActionTypes.GET_BLOG_POSTS_FAILURE
        }
    }
}