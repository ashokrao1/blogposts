import { connect } from 'react-redux';

import BlogPostComponent from './blog-post-component';
import * as actions from './blog-post-actions';

import './blog-post.scss';

const mapStateToProps = (state, currentProps) => {
    const blogPosts = state.blogPostReducer.blogPosts;
    return {
        blogPosts
    };
};

export default connect(mapStateToProps, actions)(BlogPostComponent);

