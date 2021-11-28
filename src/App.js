import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ForgotPassword from './components/forms/ForgotPassword';
import Login from './components/forms/Login';
import Register from './components/forms/Register';
import ResetPassword from './components/forms/ResetPassword';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/resetPassword' component={ResetPassword} />
        <Route path='/forgotpassword' component={ForgotPassword} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
