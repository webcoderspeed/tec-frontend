import axios from 'axios';
import * as userConstants from '../constants/user';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    );

    dispatch({
      type: userConstants.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: userConstants.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: userConstants.USER_LOGOUT })
  dispatch({ type: userConstants.USER_DETAILS_RESET })
  dispatch({ type: userConstants.USER_LIST_RESET })
  axios.post('/api/socialAuth/logout');
  document.location.href = '/login'
};

export const register = (name, email, password, role) => async (dispatch) => {

  try {
    dispatch({
      type: userConstants.USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users',
      {
        name,
        email,
        password,
        role
      },
      config
    );

    dispatch({
      type: userConstants.USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: userConstants.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: userConstants.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: userConstants.USER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({
      type: userConstants.USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: userConstants.USER_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: userConstants.USER_UPDATE_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, user, config);

    dispatch({
      type: userConstants.USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
    dispatch({
      type: userConstants.USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: userConstants.USER_UPDATE_PROFILE_FAIL,
      payload: message,
    });
  }
};

export const listUsers = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: userConstants.USER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/users?keyword=${keyword}`, config);

    dispatch({
      type: userConstants.USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: userConstants.USER_LIST_FAIL,
      payload: message,
    });
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: userConstants.USER_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/users/${id}`, config);

    dispatch({ type: userConstants.USER_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: userConstants.USER_DELETE_FAIL,
      payload: message,
    });
  }
};

export const addUser =
  (name, email, password, phone, file, role) => async (dispatch, getState) => {
    try {
      dispatch({
        type: userConstants.ADD_USER_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = axios.post(
        '/api/users/add',
        {
          name,
          email,
          password,
          phone,
          file,
          role,
        },
        config
      );

      dispatch({
        type: userConstants.ADD_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: userConstants.ADD_USER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: userConstants.USER_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/users/${user._id}`,
      user,
      config
    );

    dispatch({ type: userConstants.USER_UPDATE_SUCCESS });

    dispatch({ type: userConstants.USER_DETAILS_SUCCESS, payload: data });

    dispatch({ type: userConstants.USER_DETAILS_RESET });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: userConstants.USER_UPDATE_FAIL,
      payload: message,
    });
  }
};


export const loginWithSocials = () => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.USER_LOGIN_WITH_SOCIAL_REQUEST,
    })

    const { data } = await axios.get('api/socialAuth/login/success');

    dispatch({
      type: userConstants.USER_LOGIN_WITH_SOCIAL_SUCCESS,
      payload: data.user
    })
    dispatch({
      type: 'USER_LOGIN_SUCCESS',
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (error) {
    dispatch({
      type: userConstants.USER_LOGIN_WITH_SOCIAL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export const forgotPassword = (email) => async (dispatch) => {
  try {

    dispatch({
      type: userConstants.USER_FORGOT_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/forgotPassword',
      { email },
      config
    );

    dispatch({
      type: userConstants.USER_FORGOT_PASSWORD_SUCCESS,
      payload: data,
    });


  } catch (error) {
    dispatch({
      type: userConstants.USER_FORGOT_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const resetPassword = (password, confirmPassword, token) => async (dispatch) => {
  try {

    dispatch({
      type: userConstants.USER_RESET_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.put(
      `/api/users/resetPassword/${token}`,
      { password, confirmPassword },
      config
    );

    dispatch({
      type: userConstants.USER_RESET_PASSWORD_SUCCESS,
      payload: data,
    });


    localStorage.setItem('userInfo', JSON.stringify(data));
    document.location.href = '/login'

  } catch (error) {
    dispatch({
      type: userConstants.USER_RESET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}