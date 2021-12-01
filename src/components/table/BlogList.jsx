import React, { useEffect } from 'react';
import { Button, Space, Table } from 'antd';
import { FiEdit } from 'react-icons/fi';
import { BsFillShareFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import moment from 'moment';
import * as postActions from "../../redux/actions/post.actions";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BlogList = () => {

  const dispatch = useDispatch();

  const posts = useSelector(state => state.posts);
  const { isDeleted } = posts;

  useEffect(() => {
    if (isDeleted) {
      dispatch(postActions.getPostsByUser());
      dispatch({
        type: 'DELETE_POST_RESET'
      })
    }
    dispatch(postActions.getPostsByUser());
  }, [isDeleted, dispatch])

  const rows = posts && posts?.posts?.map(post => {
    return {
      key: post._id,
      title: post.title,
      category: post.category,
      createdAt: moment(post.createdAt).format('MMMM Do YYYY'),
      author: post?.userId?.name,
    }
  })

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => <Link to={`/posts/*/${record.key}`}>{text}</Link>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle" >
          <BsFillShareFill className='cursor-pointer' onClick={() => alert(record.key)} />
          <FiEdit className='cursor-pointer' onClick={() => alert(record.key)} />
          <AiFillDelete className='cursor-pointer' onClick={() => dispatch(postActions.deletePost(record?.key))} />
        </Space>
      ),
    }
  ]

  return (
    <div className='p-4'>
      <Table className='mt-8' dataSource={rows} columns={columns} pagination={false} />
    </div>
  )
}

export default BlogList
