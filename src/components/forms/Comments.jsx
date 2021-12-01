import React, { useEffect, useState } from 'react';
import { Comment, Tooltip, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as postActions from '../../redux/actions/post.actions';

const Comments = ({ comments: comm }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [comments, setComments] = useState([]);

  const posts = useSelector((state) => state.posts);
  const post = posts?.post;

  const { isCreated, comments: COMM } = post;

  useEffect(() => {
    if (isCreated) {
      setComments([...COMM]);
    } else {
      setComments(comm);
    }
  }, [isCreated, COMM, comm]);




  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const [comment, setComment] = useState('');
  const [reply, setReply] = useState(false);

  const { TextArea } = Input;

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip title='Like' className='flex items-center gap-1'>
      <span onClick={like}>
        {action === 'liked' ? <LikeFilled /> : <LikeOutlined />}
        <span className='comment-action'>{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip title='Dislike' className='flex items-center gap-1'>
      <span onClick={dislike}>
        {action === 'disliked' ? <DislikeFilled /> : <DislikeOutlined />}
        <span className='comment-action'>{dislikes}</span>
      </span>
    </Tooltip>,
    <span>Reply to</span>,
  ];

  console.log(
    comments
  )


  const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'comments' : 'comment'
        }`}
      itemLayout='horizontal'
      renderItem={(COMMENT) => (
        <Comment
          className='bg-white'
          key={COMMENT._id}
          actions={actions}
          author={
            <Link to={`/users/${COMMENT.name}/${COMMENT.user}`}>
              {COMMENT.name}
            </Link>
          }
          avatar={<Avatar src={COMMENT?.userId?.file} alt={COMMENT.name} />}
          content={
            <>
              <p>{COMMENT.comment}</p>
            </>
          }
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment(COMMENT.postedAt).fromNow()}</span>
            </Tooltip>
          }
        ></Comment>
      )}
    />
  );

  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(postActions.createComment(id, comment));
    setComment('');
  };

  useEffect(() => {
    dispatch(postActions.getComments(id));

  }, [dispatch, id]);

  return (
    <div className='p-4'>
      <Form.Item>
        <TextArea rows={4} onChange={handleChange} value={comment} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType='submit'
          // loading={true}
          onClick={handleSubmit}
          type='primary'
        >
          Add Comment
        </Button>
      </Form.Item>
      {comments?.length > 0 && <CommentList comments={comments} />}
    </div>
  );
};

export default Comments;
