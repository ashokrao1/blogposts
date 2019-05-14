import React, { PureComponent } from 'react';

class BlogTile extends PureComponent {

    //move this to util
    truncate(str, len) {
        return (str.length > len) ? str.substr(0, str.length-4) + '...' : str;
    }

    render() {
        const { title,
            body,
            category,
            showImage,
            showBody
        } = this.props;

        return (
            <div className='blogTile'>
                {showImage ? <div className='image-ph'></div> : null}
                <div className='tile-content'>
                <label> {category} </label>
                <div><h2>{title}</h2></div>
                <label>{new Date().toLocaleDateString('en-US',  {day: 'numeric', month: 'short', year: 'numeric' })}</label>
                {showBody ? <div><p>{this.truncate(body, 100)}</p></div> : null}
                <a href='JavaScript:Void(0);' role='button'>Read more</a>
                </div>
                
            </div>
        );
      
    }
}

export default BlogTile;