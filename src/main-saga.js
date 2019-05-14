import { fork } from 'redux-saga/effects';

import watchGetBlogPost from './modules/blog-post/blog-post-saga';

  function* mainSaga() {
    yield [
      fork(watchGetBlogPost)
    ];
  }
  
  export default mainSaga;