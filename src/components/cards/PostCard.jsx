import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostCard = ({ posts }) => {
  return (
    <div className='flex gap-5 items-center justify-center p-4 flex-wrap'>
      {
        posts && posts?.map(post => {
          return (
            <Link to={`/posts/${post?.title?.toLowerCase()?.replaceAll(' ', '-')}/${post?._id}`} key={post?._id} >
              <div className='bg-white rounded-xl h-auto w-full md:w-96 md:h-96 card-img-hover hover:shadow-lg shadow-md '>
                <div className='h-60 overflow-hidden rounded-xl rounded-b-none'>
                  <img src={post?.image} alt={post?.title} className='h-full w-full' />
                </div>
                <div className='p-4'>
                  <h1 className='font-bold text-xl'>{post?.title?.substring(0, 36) + '...'}</h1>
                  <div className='flex flex-wrap items-center justify-between mt-4'>
                    <Link to={`/user/${post?.userId?.name?.replace(' ', '-')}`}><h4 className='hover:text-yellow-400 text-gray-700 font-bold'>{post?.userId?.name}</h4></Link>
                    <p className='text-xs'>{moment(post?.createdAt)?.fromNow()}</p>
                  </div>
                </div>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default PostCard
