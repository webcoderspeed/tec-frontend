import React from 'react'
import { Link } from 'react-router-dom'
import BlogList from '../components/table/BlogList'

const ProfileScreen = () => {
  return (
    <div className='p-4'>
      <Link to='/posts/create' className='px-4 py-2 rounded-md text-white bg-blue-600 font-semibold my-4 '>
        Create Post
      </Link>
      <BlogList />
    </div>
  )
}

export default ProfileScreen
