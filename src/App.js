import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ForgotPassword from './components/forms/ForgotPassword';
import Login from './components/forms/Login';
import Register from './components/forms/Register';
import ResetPassword from './components/forms/ResetPassword';
// import Header from './components/header/Header';
import HomeScreen from './screens/HomeScreen';
import Search from './components/search/Search';
import MovieScreen from './screens/MovieScreen';
import Detail from './components/movie/Detail';
import Navbar from './components/navbar/Navbar';
import CreatePost from './components/forms/CreatePost';
import PostDetailPage from './screens/PostDetailScreen';
import MusicScreen from './screens/MusicScreen';
import GameScreen from './screens/GameScreen';
import GameDetailPage from './screens/GameDetailPage';
import ProfileScreen from './screens/ProfileScreen';
import BlogScreen from './screens/BlogScreen';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/resetpassword' component={ResetPassword} />
        <Route path='/forgotpassword' component={ForgotPassword} />
        <Route path='/movies' exact component={MovieScreen} />
        <Route path='/movies/:id' component={Detail} />
        <Route path='/posts/create' component={CreatePost} />
        <Route path='/posts/*/:id' component={PostDetailPage} />
        <Route path='/music' component={MusicScreen} />
        <Route path='/games' exact component={GameScreen} />
        <Route path='/games/:id' component={GameDetailPage} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/posts' component={BlogScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
