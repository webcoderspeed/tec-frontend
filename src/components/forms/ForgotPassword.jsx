import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assests/images/brand/logo.png'
import { Form, Input, Alert, Result } from 'antd';
import { MailOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from "react-redux";
import * as userActions from '../../redux/actions/user.actions';
import { USER_FORGOT_PASSWORD_RESET } from '../../redux/constants/user';
import DotLoader from 'react-spinners/DotLoader';

const ForgotPassword = () => {

  const dispatch = useDispatch();

  const userForgotPassword = useSelector(state => state.userForgotPassword);
  const { loading, message: forgotPasswordMessage, success, error } = userForgotPassword;

  console.log(forgotPasswordMessage?.message);

  const onSubmit = ({ email }) => {
    dispatch(userActions.forgotPassword(email))
  }

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        dispatch({
          type: USER_FORGOT_PASSWORD_RESET
        })
      }, 3000);
    }
  }, [success, forgotPasswordMessage, dispatch])


  return (
    <div className='flex'>
      <div className="font-sans antialiased text-gray-600 min-h-full flex flex-col relative p-6 mx-auto w-full lg:w-1/2">
        <main className="relative z-10 flex-auto flex items-center justify-center text-sm text-center text-gray-600 py-16 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-sm">
            <img src={logo} alt='tribe' />
            {
              loading ? (
                <div className='flex justify-center items-center'>
                  <DotLoader color='blue' />
                </div>
              ) : error ? (
                <Alert
                  message='Error in sending the mail'
                  showIcon
                  description={error}
                  type='error'
                  closable
                />
              ) : (
                <Result
                  className={`${success ? 'block' : 'hidden'}`}
                  status="success"
                  title={forgotPasswordMessage?.message}
                  subTitle="Check your email the reset password token is only valid for 10 mintues"
                />
              )
            }
            <h1 className="text-center mb-2 text-gray-900 text-sm font-semibold">Reset your password</h1>
            <p className="text-center text-sm mb-10">Enter your email and we'll send you a link to reset your password.</p>

            <Form onFinish={onSubmit}>
              <div className="relative">
                <Form.Item
                  name="email"
                  placeholder="email"
                  rules={[{ required: true, message: "Please enter email" }]}
                >
                  <Input
                    type="email"
                    prefix={<MailOutlined />}
                    size="large"
                    autoFocus className="rounded-md" placeholder="Email address"
                  />
                </Form.Item>
              </div>

              <button type="submit" className="block w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mt-4 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50">
                Reset your password
              </button>
            </Form>
          </div>
        </main>

        <footer className="relative z-10 flex-none text-sm text-center py-4 px-4 sm:px-6 lg:px-8">
          <div className="text-gray-900 sm:flex sm:items-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <p>Don't have an account?</p>
            <Link to="/register" className="rounded-md border border-gray-300 hover:border-gray-400 py-2 px-10 font-medium flex items-center justify-center">
              Get access
              <svg aria-hidden="true" width="11" height="10" fill="none" className="flex-none ml-1.5">
                <path d="M5.977 9.639L10.616 5 5.977.362l-.895.89L8.19 4.353H.384v1.292H8.19L5.082 8.754l.895.885z" fill="currentColor" />
              </svg>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default ForgotPassword
