import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  KeyOutlined,
  MailOutlined,
  EyeInvisibleOutlined,
  GoogleCircleFilled,
  EyeTwoTone,
  FacebookFilled,
} from '@ant-design/icons';
import SideImage from '../../assests/images/game.svg';
import logo from '../../assests/images/brand/logo.png';
import * as userActions from '../../redux/actions/user.actions';


const Login = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo, error } = userLogin;

  const onSubmit = (values) => {
    dispatch(userActions.login(email, password));
  };

  useEffect(() => {
    if (!userInfo) {
      dispatch(userActions.loginWithSocials());
    } else {
      history.push('/');
    }
  }, [userInfo, dispatch, history]);

  const loginWithGoogle = () => {
    window.open(process.env.REACT_APP_GOOGLE_LOGIN_URL, '_self');
  };

  const loginWithFacebook = () => {
    window.open(process.env.REACT_APP_FACEBOOK_LOGIN_URL, '_self');
  };

  return (
    <div className='flex'>
      <div className='p-6 mx-auto w-full lg:w-1/2'>
        <div className='flex justify-center'>
          <img src={logo} alt='tec logo' className='h-28' />
        </div>

        <div className='md:mx-16'>
          <h3 className='font-bold text-black text-4xl my-6'>Sign In</h3>
          <Form name="Register Form" onFinish={onSubmit}>
            <Form.Item
              name="email"
              placeholder="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input
                type="email"
                prefix={<MailOutlined />}
                size="large"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="password"
              placeholder="Password"
              rules={[{ required: true, message: "Please enter your password" }]}
            >
              <Input.Password
                size="large"
                prefix={<KeyOutlined />}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            {
              error && <Divider orientation="middle" >{error}</Divider>
            }
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                className="uppercase font-bold"
              >
                Sign In
              </Button>

              <p style={{ color: "#8F8F8F", marginTop: "0.5rem" }}>By clicking the sign in button you accept to agree to the community guidelines</p>

              <Divider orientation="middle">OR</Divider>
              <div className='flex flex-wrap items-center gap-5 justify-evenly'>
                <Button size="large" style={{
                  backgroundColor: '#db4a39',
                }} className='flex justify-center items-center text-white w-56'
                  onClick={() => loginWithGoogle()}
                >
                  <GoogleCircleFilled />
                  Sign In with Google
                </Button>
                <Button size="large" style={{
                  backgroundColor: '#3b5998',
                }}
                  className='flex justify-center items-center text-white w-56'
                  onClick={() => loginWithFacebook()}
                >
                  <FacebookFilled />
                  Sign In with Facebook
                </Button>
              </div>
            </Form.Item>

          </Form>

          <div>
            <div>
              <span className='text-black'>New at TEC? </span>
              <Link to="/register" className="text-blue-500 font-semibold">
                {" "}
                Sign up here
              </Link>
            </div>
            <div>
              <span className='text-black'>Forgot your password? </span>
              <Link to="/forgotpassword" className="text-blue-500 font-semibold">
                {" "}
                Recover here
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='relative hidden lg:block'>
        <img src={SideImage} alt="" className='h-screen' />
      </div>
    </div >
  )
}

export default Login
