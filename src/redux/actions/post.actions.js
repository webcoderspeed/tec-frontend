import axios from 'axios';
import * as postConstants from '../constants/post';

// get posts
export const getPosts = (keyword = '') => async (dispatch, getState) => {
  try {
    dispatch({
      type: postConstants.GET_POSTS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/posts?keyword=${keyword}`, config);


    dispatch({
      type: postConstants.GET_POSTS_SUCCESS,
      payload: {
        posts: data.posts,
      },
    });
  } catch (error) {
    dispatch({
      type: postConstants.GET_POSTS_FAILURE,
      payload: {
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      }
    });
  }
}

export const getPost = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: postConstants.GET_POST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };


    const { data } = await axios.get(`/api/posts/${id}`, config);


    dispatch({
      type: postConstants.GET_POST_SUCCESS,
      payload: {
        post: data,
      },
    });
  } catch (error) {
    dispatch({
      type: postConstants.GET_POST_FAILURE,
      payload: {
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      }
    });
  }
}

export const createPost = (post) => async (dispatch, getState) => {
  try {
    dispatch({
      type: postConstants.CREATE_POST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    console.log(post);

    const { data } = await axios.post('/api/posts', post, config);

    dispatch({
      type: postConstants.CREATE_POST_SUCCESS,
      payload: {
        post: data,
      },
    });
  } catch (error) {
    dispatch({
      type: postConstants.CREATE_POST_FAILURE,
      payload: {
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      }
    });
  }
}

export const getComments = (postId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: postConstants.GET_POST_COMMENTS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/posts/${postId}/comment`, config);

    dispatch({
      type: postConstants.GET_POST_COMMENTS_SUCCESS,
      payload: {
        comments: data.comments,
      },
    });
  }
  catch (error) {
    dispatch({
      type: postConstants.GET_POST_COMMENTS_FAILURE,
      payload: {
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      }
    });
  }
}

export const createComment = (postId, comment) => async (dispatch, getState) => {
  try {
    dispatch({
      type: postConstants.CREATE_POST_COMMENT_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/posts/${postId}/comment`, { comment }, config);

    dispatch({
      type: postConstants.CREATE_POST_COMMENT_SUCCESS,
      payload: {
        comment: data,
      },
    });
  }
  catch (error) {
    dispatch({
      type: postConstants.CREATE_POST_COMMENT_FAILURE,
      payload: {
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      }
    });
  }
}

export const deleteComment = (postId, commentId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: postConstants.DELETE_POST_COMMENT_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/posts/${postId}/comment/${commentId}`, config);

    dispatch({
      type: postConstants.DELETE_POST_COMMENT_SUCCESS,
      payload: {
        comment: data,
      },
    });
  }
  catch (error) {
    dispatch({
      type: postConstants.DELETE_POST_COMMENT_FAILURE,
      payload: {
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      }
    });
  }
}

export const deletePost = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: postConstants.DELETE_POST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/posts/${id}`, config);

    dispatch({
      type: postConstants.DELETE_POST_SUCCESS,
      payload: {
        id,
      },
    });
  }
  catch (error) {
    dispatch({
      type: postConstants.DELETE_POST_FAILURE,
      payload: {
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      }
    });
  }
}

export const getPostsByUser = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: postConstants.GET_POSTS_BY_USER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/posts/user`, config);
    console.log(data)

    dispatch({
      type: postConstants.GET_POSTS_BY_USER_SUCCESS,
      payload: {
        posts: data.posts,
      },
    });
  }
  catch (error) {
    dispatch({
      type: postConstants.GET_POSTS_BY_USER_FAILURE,
      payload: {
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      }
    });
  }
}