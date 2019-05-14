import * as ActionTypes from './blog-post-constants';

const initialState = {
    blogPosts: null
};

const getBlogPosts = (blogPosts) => {
    return blogPosts.slice(0,8);
}

const BlogPostReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        //case ActionTypes.GET_BLOG_POSTS:
        case ActionTypes.GET_BLOG_POSTS_SUCCESS:
            return {
                ...state,
                blogPosts: getBlogPosts(action.data)
            }
        case ActionTypes.GET_BLOG_POSTS_FAILURE:
            return {
                ...state,
                blogPosts: 'Failed to load blog Posts'
            }
        default:
            return state;
    }
};

export default BlogPostReducer;