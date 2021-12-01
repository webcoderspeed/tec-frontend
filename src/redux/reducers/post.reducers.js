import * as postConstants from '../constants/post';

// Initial state
const initialState = {
  posts: [],
  post: {},
  isLoading: false,
  error: null,
  isDeleting: false,
  isDeleted: false,
  isCreating: false,
  isCreated: false,
  isUpdating: false,
  isUpdated: false,
};

// Reducer
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case postConstants.GET_POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case postConstants.GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload.posts,
      };
    case postConstants.GET_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case postConstants.GET_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case postConstants.GET_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        post: action.payload.post,
      };
    case postConstants.GET_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case postConstants.CREATE_POST_REQUEST:
      return {
        ...state,
        isCreating: true,
        isCreated: false,
        error: null,
      };
    case postConstants.CREATE_POST_SUCCESS:
      return {
        ...state,
        isCreating: false,
        isCreated: true,
        posts: [...state.posts, action.payload.post],
      };
    case postConstants.CREATE_POST_FAILURE:
      return {
        ...state,
        isCreating: false,
        isCreated: false,
        error: action.payload.error,
      };
    case postConstants.UPDATE_POST_REQUEST:
      return {
        ...state,
        isUpdating: true,
        isUpdated: false,
        error: null,
      };
    case postConstants.UPDATE_POST_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        isUpdated: true,
        posts: state.posts.map(post =>
          post.id === action.payload.post.id ? action.payload.post : post
        ),
      };
    case postConstants.UPDATE_POST_FAILURE:
      return {
        ...state,
        isUpdating: false,
        isUpdated: false,
        error: action.payload.error,
      };
    case postConstants.DELETE_POST_REQUEST:
      return {
        ...state,
        isDeleting: true,
        isDeleted: false,
        error: null,
      };
    case postConstants.DELETE_POST_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        isDeleted: true,
        posts: state.posts.filter(post => post.id !== action.payload.id),
      };
    case postConstants.DELETE_POST_FAILURE:
      return {
        ...state,
        isDeleting: false,
        isDeleted: false,
        error: action.payload.error,
      };
    case postConstants.DELETE_POST_RESET:
      return {
        ...state,
        isDeleting: false,
        isDeleted: false,
        error: null,
      };
    case postConstants.GET_POST_COMMENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case postConstants.GET_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        post: {
          ...state.post,
          comments: action.payload.comments,
        },
      };
    case postConstants.GET_POST_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case postConstants.CREATE_POST_COMMENT_REPLY_REQUEST:
      return {
        ...state,
        isCreating: true,
        isCreated: false,
        error: null,
      };
    case postConstants.CREATE_POST_COMMENT_REPLY_SUCCESS:
      return {
        ...state,
        isCreating: false,
        isCreated: true,
        post: {
          ...state.post,
          comments: state.post.comments.map(comment =>
            comment.id === action.payload.comment.id
              ? {
                ...comment,
                replies: [...comment.replies, action.payload.reply],
              }
              : comment
          ),
        },
      };
    case postConstants.CREATE_POST_COMMENT_REPLY_FAILURE:
      return {
        ...state,
        isCreating: false,
        isCreated: false,
        error: action.payload.error,
      };
    case postConstants.UPDATE_POST_COMMENT_REPLY_REQUEST:
      return {
        ...state,
        isUpdating: true,
        isUpdated: false,
        error: null,
      };
    case postConstants.UPDATE_POST_COMMENT_REPLY_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        isUpdated: true,
        post: {
          ...state.post,
          comments: state.post.comments.map(comment =>
            comment.id === action.payload.comment.id
              ? {
                ...comment,
                replies: comment.replies.map(reply =>
                  reply.id === action.payload.reply.id
                    ? action.payload.reply
                    : reply
                ),
              }
              : comment
          ),
        },
      };
    case postConstants.UPDATE_POST_COMMENT_REPLY_FAILURE:
      return {
        ...state,
        isUpdating: false,
        isUpdated: false,
        error: action.payload.error,
      };
    case postConstants.DELETE_POST_COMMENT_REPLY_REQUEST:
      return {
        ...state,
        isDeleting: true,
        isDeleted: false,
        error: null,
      };
    case postConstants.DELETE_POST_COMMENT_REPLY_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        isDeleted: true,
        post: {
          ...state.post,
          comments: state.post.comments.map(comment =>
            comment.id === action.payload.comment.id
              ? {
                ...comment,
                replies: comment.replies.filter(reply => reply.id !== action.payload.reply.id),
              }
              : comment
          ),
        },
      };
    case postConstants.DELETE_POST_COMMENT_REPLY_FAILURE:
      return {
        ...state,
        isDeleting: false,
        isDeleted: false,
        error: action.payload.error,
      };
    case postConstants.GET_POST_LIKE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case postConstants.GET_POST_LIKE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        post: {
          ...state.post,
          likes: action.payload.likes,
        },
      };
    case postConstants.GET_POST_LIKE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case postConstants.GET_POST_DISLIKE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case postConstants.GET_POST_DISLIKE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        post: {
          ...state.post,
          dislikes: action.payload.dislikes,
        },
      };
    case postConstants.GET_POST_DISLIKE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case postConstants.CREATE_POST_LIKE_REQUEST:
      return {
        ...state,
        isCreating: true,
        isCreated: false,
        error: null,
      };
    case postConstants.CREATE_POST_LIKE_SUCCESS:
      return {
        ...state,
        isCreating: false,
        isCreated: true,
        post: {
          ...state.post,
          likes: [...state.post.likes, action.payload.like],
        },
      };
    case postConstants.CREATE_POST_LIKE_FAILURE:
      return {
        ...state,
        isCreating: false,
        isCreated: false,
        error: action.payload.error,
      };
    case postConstants.CREATE_POST_DISLIKE_REQUEST:
      return {
        ...state,
        isCreating: true,
        isCreated: false,
        error: null,
      };
    case postConstants.CREATE_POST_DISLIKE_SUCCESS:
      return {
        ...state,
        isCreating: false,
        isCreated: true,
        post: {
          ...state.post,
          dislikes: [...state.post.dislikes, action.payload.dislike],
        },
      };
    case postConstants.CREATE_POST_DISLIKE_FAILURE:
      return {
        ...state,
        isCreating: false,
        isCreated: false,
        error: action.payload.error,
      };
    case postConstants.CREATE_POST_COMMENT_REQUEST:
      return {
        ...state,
        isCreating: true,
        isCreated: false,
        error: null,
      };
    case postConstants.CREATE_POST_COMMENT_SUCCESS:
      return {
        ...state,
        isCreating: false,
        isCreated: true,
        post: {
          ...state.post,
          comments: [...state.post.comments, action.payload.comment],
        },
      };
    case postConstants.CREATE_POST_COMMENT_FAILURE:
      return {
        ...state,
        isCreating: false,
        isCreated: false,
        error: action.payload.error,
      };

    case postConstants.DELETE_POST_COMMENT_REQUEST:
      return {
        ...state,
        isDeleting: true,
        isDeleted: false,
        error: null,
      };
    case postConstants.DELETE_POST_COMMENT_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        isDeleted: true,
        post: {
          ...state.post,
          comments: state.post.comments.filter(comment => comment.id !== action.payload.comment.id),
        },
      };
    case postConstants.DELETE_POST_COMMENT_FAILURE:
      return {
        ...state,
        isDeleting: false,
        isDeleted: false,
        error: action.payload.error,
      };
    case postConstants.GET_POSTS_BY_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case postConstants.GET_POSTS_BY_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload.posts,
      };
    case postConstants.GET_POSTS_BY_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case postConstants.GET_POSTS_BY_USER_RESET:
      return {
        ...state,
        posts: [],
      };
    case postConstants.GET_POSTS_RESET:
      return {
        ...state,
        posts: [],
      };
    default:
      return state;
  }
}