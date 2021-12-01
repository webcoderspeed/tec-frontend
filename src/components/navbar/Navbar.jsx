import React, { useEffect } from 'react';
import * as icons from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { Avatar } from 'antd';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithSocials, logout } from '../../redux/actions/user.actions';

const Navbar = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!userInfo) {
      dispatch(loginWithSocials());
    }
  }, [userInfo, dispatch]);

  return (
    <header className='p-4  sticky top-0 bg-white shadow-md shadow-white z-50'>
      <div className='flex md:justify-around justify-between items-center flex-wrap'>
        <span className='flex gap-2 md:gap-4 items-center'>
          <Link to='/facebook' className='md:text-xl text-blue-800'>
            <icons.FaFacebook />
          </Link>
          <Link to='/twitter' className='md:text-xl text-blue-600'>
            <icons.FaTwitter />
          </Link>
          <Link to='/instagram' className='md:text-xl text-red-600'>
            <icons.FaInstagram />
          </Link>
          <Link to='/youtube' className='md:text-xl text-red-600'>
            <icons.FaYoutube />
          </Link>
        </span>
        <span className='flex gap-2 items-center font-bold'>
          {userInfo ? (
            <details className='relative cursor-pointer'>
              <summary className='flex flex-col justify-center items-center'>
                <Avatar src={`${userInfo?.file}`} />
              </summary>
              <ul className='absolute -ml-12 mt-2 bg-white border-t-2 border-yellow-400 rounded-md shadow'>
                {userInfo && userInfo.isAdmin ? (
                  <>
                    <li>
                      <Link
                        to='/admin'
                        className='text-xs text-black hover:text-yellow-400 py-1 p-4'
                      >
                        Admin
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/profile'
                        className='text-xs text-black hover:text-yellow-400 py-1 p-4'
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <span
                        className='text-xs text-black hover:text-yellow-400 py-1 p-4'
                        onClick={logoutHandler}
                      >
                        Logout
                      </span>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        to='/profile'
                        className='text-xs text-black hover:text-yellow-400 py-1 p-4'
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <span
                        className='text-xs text-black hover:text-yellow-400 py-1 p-4'
                        onClick={logoutHandler}
                      >
                        Logout
                      </span>
                    </li>
                  </>
                )}
              </ul>
            </details>
          ) : (
            <span className='flex items-center gap-4'>
              <Link to='/login' className='border-b-2 border-yellow-400 py-1'>
                Login
              </Link>
              <Link
                to='/register'
                className='bg-yellow-400 text-gray-800 bg-opacity-80 px-4 py-1 rounded-2xl'
              >
                Register
              </Link>
            </span>
          )}
        </span>
      </div>
      <nav className='flex md:justify-around justify-between items-center flex-wrap py-4 gap-4'>
        <NavLink to='/' className='flex items-center'>
          <h1 className='hemi-cube text-4xl mr-2'>
            TE<span className='text-yellow-400'>C</span>
          </h1>
          <span className='hidden md:block font-bold text-sm'>
            The Entertainment <span className='text-yellow-400'> Convoy</span>
          </span>
        </NavLink>
        <div className='flex items-center justify-center gap-4'>
          <ul className='hidden md:flex md:items-center md:justify-center'>
            <li>
              <NavLink
                to='/'
                className='px-2 py-1 font-bold hover:text-yellow-400'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/movies'
                className='px-2 py-1 font-bold hover:text-yellow-400'
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/posts'
                className='px-2 py-1 font-bold hover:text-yellow-400'
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/games'
                className='px-2 py-1 font-bold hover:text-yellow-400'
              >
                Games
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/music'
                className='px-2 py-1 font-bold hover:text-yellow-400'
              >
                Music
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
