import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import * as userReducer from './reducers/user.reducers';
import { postReducer } from './reducers/post.reducers';

const reducer = combineReducers({
  userLogin: userReducer.userLoginReducer,
  userRegister: userReducer.userRegisterReducer,
  userDetails: userReducer.userDetailsReducer,
  userUpdateProfile: userReducer.userUpdateProfileReducer,
  userList: userReducer.userListReducer,
  userDelete: userReducer.userDeleteReducer,
  userUpdate: userReducer.userUpdateReducer,
  userFollow: userReducer.followUserReducer,
  userUnFollow: userReducer.unfollowUserReducer,
  userFollower: userReducer.followerListReducer,
  userFollowing: userReducer.followingListReducer,
  userloginWithSocial: userReducer.userLoginWithSocialReducer,
  userForgotPassword: userReducer.forgotPasswordReducer,
  userResetPassword: userReducer.resetPasswordReducer,

  posts: postReducer,

})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store