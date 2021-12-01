import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const IntroSection = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div className='flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl'>
      <div className='pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5'>
        <div className='max-w-xl mb-6'>
          <div>
            <p className='inline-block px-3  py-1 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-green-700'>
              Brand new
            </p>
          </div>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
            New media and mobile entertainment
            <br className='hidden md:block' />
            are revolutionizing the way.{' '}
            <span className='inline-block text-green-600'>
              learn about the world
            </span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
            Entertainment has this way of resetting itself.
          </p>
        </div>
        <div className='flex items-center'>
          <Link
            to={userInfo ? `/profile/${userInfo._id}` : '/register'}
            className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outline-none'
          >
            Get started
          </Link>
          <Link
            to={userInfo ? `/profile/${userInfo._id}` : '/login'}
            aria-label=''
            className='inline-flex items-center font-semibold transition-colors duration-200 text-green-400 hover:text-green-800'
          >
            Learn more
          </Link>
        </div>
      </div>
      <div>
        <img
          src='https://kitwind.io/assets/kometa/two-thirds-phone.png'
          className='object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm'
          alt=''
        />
      </div>
    </div>
  );
};
export default IntroSection;
