import React, { useEffect } from "react";
import "antd/dist/antd.css";
import {
  UserOutlined,
  KeyOutlined,
  MailOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  GoogleCircleFilled,
  FacebookFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import { Form, Button, Input, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as userActions from '../../redux/actions/user.actions';
import SideImage from '../../assests/images/game.svg';
import logo from '../../assests/images/brand/logo.png';

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const onSubmit = ({ name, email, password }) => {
    dispatch(userActions.register(name, email, password, 'expert'))
  };

  useEffect(() => {
    if (!userInfo) {
      dispatch(userActions.loginWithSocials());
    } else {
      history.push('/');
    }
  }, [history, userInfo, dispatch])

  const loginWithGoogle = () => {
    window.open(process.env.REACT_APP_GOOGLE_LOGIN_URL, '_self');
  };

  const loginWithFacebook = () => {
    window.open(process.env.REACT_APP_FACEBOOK_LOGIN_URL, '_self');
  };

  return (
    <div className='flex py-12'>
      <div className="p-6 mx-auto w-full lg:w-1/2">

        <div className='md:mx-16'>
          <h3 className="font-bold text-black text-4xl my-6">Sign Up</h3>

          <Form name="Register Form" onFinish={onSubmit}>
            <Form.Item
              name="name"
              placeholder="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input
                type="text"
                prefix={<UserOutlined />}
                size="large"
                placeholder="Name"
              />
            </Form.Item>

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
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              placeholder="Confirm Password"
              dependencies={["password"]}
              rules={[
                { required: true },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (value && getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error("The two passwords do not match")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                size="large"
                prefix={<KeyOutlined />}
                placeholder="Confirm Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                style={{
                  backgroundColor: "#0F90D1",
                }}
                className="uppercase font-bold"
              >
                Sign Up
              </Button>

              <Divider orientation="middle">OR</Divider>

              <div className='flex flex-wrap items-center gap-5 justify-evenly'>
                <Button size="large" style={{
                  backgroundColor: '#db4a39',
                }} className='flex justify-center items-center text-white w-56'
                  onClick={() => loginWithGoogle()}
                >
                  <GoogleCircleFilled />
                  Sign Up with Google
                </Button>
                <Button size="large" style={{
                  backgroundColor: '#3b5998',
                }}
                  className='flex justify-center items-center text-white w-56'
                  onClick={() => loginWithFacebook()}
                >
                  <FacebookFilled />
                  Sign Up with Facebook
                </Button>
              </div>
            </Form.Item>
          </Form>

          <div>
            <span className='text-black'>Already have an account? </span>
            <Link to="/login" className="text-blue-500 font-semibold">
              {" "}
              Sign in now
            </Link>
          </div>
        </div>

      </div>

      <div className='relative hidden lg:block'>
        <img src={SideImage} alt="" className='h-screen' />
      </div>

    </div>
  );
}

export default Register
