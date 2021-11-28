import * as userConstants from '../constants/user';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_LOGIN_REQUEST:
      return { loading: true };
    case userConstants.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case userConstants.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case userConstants.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_REQUEST:
      return { loading: true };
    case userConstants.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case userConstants.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case userConstants.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case userConstants.USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case userConstants.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case userConstants.USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case userConstants.USER_DETAILS_RESET:
      return { user: {} };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case userConstants.USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case userConstants.USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case userConstants.USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case userConstants.USER_LIST_REQUEST:
      return { loading: true };
    case userConstants.USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case userConstants.USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case userConstants.USER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_DELETE_REQUEST:
      return { loading: true };
    case userConstants.USER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case userConstants.USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case userConstants.USER_UPDATE_REQUEST:
      return { loading: true };
    case userConstants.USER_UPDATE_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case userConstants.USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case userConstants.USER_UPDATE_RESET:
      return {
        user: {},
      };
    default:
      return state;
  }
};

export const userLoginWithSocialReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_LOGIN_WITH_SOCIAL_REQUEST:
      return { loading: true };
    case userConstants.USER_LOGIN_WITH_SOCIAL_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case userConstants.USER_LOGIN_WITH_SOCIAL_FAIL:
      return { loading: false, error: action.payload };
    case userConstants.USER_LOGOUT_WITH_SOCIAL:
      return {};
    default:
      return state;
  }
};

export const followUserReducer = (state = { followings: [] }, action) => {
  switch (action.type) {
    case userConstants.USER_FOLLOW_REQUEST:
      return {
        loading: true,
      };
    case userConstants.USER_FOLLOW_SUCCESS:
      return {
        loading: false,
        followings: action.payload,
      };
    case userConstants.USER_FOLLOW_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const unfollowUserReducer = (state = { followings: [] }, action) => {
  switch (action.type) {
    case userConstants.USER_FOLLOW_REQUEST:
      return {
        loading: true,
      };
    case userConstants.USER_FOLLOW_SUCCESS:
      return {
        loading: false,
        followings: action.payload,
      };
    case userConstants.USER_FOLLOW_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const followerListReducer = (state = { followers: [] }, action) => {
  switch (action.type) {
    case userConstants.USER_FOLLOWER_LIST_REQUEST:
      return {
        loading: true,
      };
    case userConstants.USER_FOLLOWER_LIST_SUCCESS:
      return {
        loading: false,
        followers: action.payload,
      };
    case userConstants.USER_FOLLOWER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const followingListReducer = (state = { followings: [] }, action) => {
  switch (action.type) {
    case userConstants.USER_FOLLOWING_LIST_REQUEST:
      return {
        loading: true,
      };
    case userConstants.USER_FOLLOWING_LIST_SUCCESS:
      return {
        loading: false,
        followings: action.payload,
      };
    case userConstants.USER_FOLLOWING_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const resetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_RESET_PASSWORD_REQUEST:
      return {
        loading: true,
      }
    case userConstants.USER_RESET_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: true,
        userInfo: action.payload,
      }
    case userConstants.USER_RESET_PASSWORD_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case userConstants.USER_RESET_PASSWORD_RESET:
      return {}
    default:
      return state
  }
}

export const forgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_FORGOT_PASSWORD_REQUEST:
      return {
        loading: true,
      }
    case userConstants.USER_FORGOT_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: true,
        message: action.payload
      }
    case userConstants.USER_FORGOT_PASSWORD_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case userConstants.USER_FORGOT_PASSWORD_RESET:
      return {}
    default:
      return state
  }
}