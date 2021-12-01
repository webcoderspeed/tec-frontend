import React, { useEffect } from 'react';
import BlogCard from '../components/cards/BlogCard';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../redux/actions/post.actions';

const BlogScreen = () => {

  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  console.log({
    posts
  })

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <div>
      <BlogCard posts={posts?.posts} />
    </div>
  )
}

export default BlogScreen
