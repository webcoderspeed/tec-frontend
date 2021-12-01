import React from 'react';
import { Link } from 'react-router-dom';
import Glide from '@glidejs/glide';
import Category from './Category';

const ContentSlider = ({ posts }) => {
  const slider = document.querySelector('.glide');

  slider &&
    new Glide(slider, {
      type: 'slider',
      startAt: 0,
      perView: 4,
      breakpoints: {
        1600: {
          perView: 4,
        },
        1488: {
          perView: 3,
        },
        1299: {
          perView: 3,
        },
        1199: {
          perView: 2,
        },
        991: {
          perView: 2,
        },
        825: {
          perView: 2,
        },
        800: {
          perView: 1,
        },
        768: {
          perView: 1,
        },
        750: {
          perView: 1,
        },
        725: {
          perView: 1,
        },
        700: {
          perView: 1,
        },
        650: {
          perView: 1,
        },
        625: {
          perView: 1,
        },
        600: {
          perView: 1,
        },
        575: {
          perView: 1,
        },
        550: {
          perView: 1,
        },
        525: {
          perView: 1,
        },
        500: {
          perView: 1,
        },
        475: {
          perView: 1,
        },
        450: {
          perView: 1,
        },
        425: {
          perView: 1,
        },
        400: {
          perView: 1,
        },
        375: {
          perView: 1,
        },
        350: {
          perView: 1,
        },
        325: {
          perView: 1,
        },
        300: {
          perView: 1,
        },
        275: {
          perView: 1,
        },
        250: {
          perView: 1,
        },
      },
    }).mount();

  return (
    <div className='p-4 overflow-hidden'>
      <h1 className='text-xl md:text-2xl font-bold mt-4 mb-4 text-gray-800 text-shadow-lg'>
        Trending Article
      </h1>
      <div className='glide flex'>
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides flex gap-24 sm:gap-10'>
            {posts &&
              posts.map((post) => {
                return (
                  <li className='glide__slide' key={post._id}>
                    <div className='h-40 w-96 rounded-xl shadow-md relative overflow-hidden'>
                      <img
                        src={post.file}
                        alt=''
                        className='absolute top-0 left-0 h-full w-full z-0'
                      />
                      <div className='bg-black opacity-50 w-full h-full absolute'></div>
                      <div className='absolute z-30  p-4 flex flex-col justify-start gap-4'>
                        <Link to='/posts/category'>
                          <Category category={post.category[0]} />
                        </Link>
                        <Link
                          to={`/post/${post.title
                            .toLowerCase()
                            .replaceAll(' ', '-')}/${post._id}`}
                          key={post._id}
                        >
                          <h2 className='text-xl font-bold text-white cursor-pointer'>
                            {post.title.substring(0, 50) + '...'}
                          </h2>
                        </Link>
                        <p className='text-white -mt-3'>
                          {new Date().toUTCString().substring(0, 16)}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentSlider;
