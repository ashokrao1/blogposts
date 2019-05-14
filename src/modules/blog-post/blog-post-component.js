import React, { PureComponent } from 'react';
import BlogTile from './components/blog-post-tile';

class BlogPostComponent extends PureComponent {
    // constructor(props){
    //     super(props);
    // }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    componentDidMount() {
        this.props.getBlogPosts();
    }

    renderBlogPosts() {
        const {blogPosts} = this.props;
        return blogPosts.map((post, index, array) => {
            return (
                <BlogTile 
                {...post} 
                showImage= {index%2 === 0}  
                showBody = {index%2 === 1}
                category = {index%2 === 0 ? 'Travelling' : 'Lifestyle'}
                />
            );
        });
    }

    render() {
        const {blogPosts} = this.props;
        if (!blogPosts){
            return  <div className='blogposts'>Loading...</div>;
        } else if (!Array.isArray(blogPosts)) {
            return  <div className='blogposts'>blogPosts</div>;
        }
        return (
            <div className='blogposts'>
                {(Array.isArray(blogPosts) && blogPosts.length > 0) ? this.renderBlogPosts() : 'No Blog Posts to show'}
            </div>
        );
    }

};

export default BlogPostComponent;