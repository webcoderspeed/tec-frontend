import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as postAction from '../redux/actions/post.actions';
// import Spinner from '../components/Spinner';
import DOMpurify from 'dompurify';
import Comments from '../components/forms/Comments';


const PostDetailPage = () => {

  const { id } = useParams();

  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);


  const { post } = posts;
  const comments = post?.comments;

  useEffect(() => {
    dispatch(postAction.getPost(id));
    dispatch(postAction.getComments(id));
  }, [id, dispatch]);


  return (
    <div className='post-details'>
      {
        post &&
        <div>
          <img src={`/${post.image}`} alt={post.title} className='w-full h-96 ' />
          <div className='mt-4 mb-4 p-4 md:px-32'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl md:text-center mt-4 mb-4 font-bold'>{post.title}</h1>
            <div
              className='text-justify' id='post'
              dangerouslySetInnerHTML={{ __html: DOMpurify.sanitize(post?.content) }}>
            </div>
            <Comments comments={comments || post?.comments} />
          </div>
        </div>
      }
    </div>
  )
}

export default PostDetailPage
