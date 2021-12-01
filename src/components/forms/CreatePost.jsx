import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { createPost } from '../../redux/actions/post.actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const posts = useSelector((state) => state.posts);

  const { isCreating, isCreated } = posts;

  const [fileUploadError, setFileUploadError] = useState(false);

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post('/api/uploads', formData, config);

      if (
        data.message === 'MimeType : image/png,image/jpeg,video/mp4,image/png'
      ) {
        setFileUploadError(true);
      } else {
        setFileUploadError(false);
        setImage(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCkEditorChange = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((image) => {
            body.append('file', image);
            fetch(`/api/uploads`, {
              method: 'post',
              body: body,
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({
                  default: `/${res}`,
                });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  const onFinish = (values) => {
    dispatch(createPost({
      title,
      content,
      image,
      category: values?.category,
    }));
  };

  useEffect(() => {
    if (isCreated) {
      setTitle('');
      setContent('');
      setImage('');
      history.push('/profile');
    }
  }, [history, isCreated])


  return (
    <div className='px-24 py-4'>
      <h2 className='text-2xl font-semibold my-2'>Create a new post</h2>
      <Form layout='vertical' onFinish={onFinish} className=''>
        <Form.Item
          label='Title'
          name='title'
          rules={[{ required: true, message: 'Please enter a title!' }]}
          className='font-semibold'
        >
          <Input onChange={(e) => setTitle(e.target.value)} />
        </Form.Item>
        <Form.Item
          label='Category'
          name='category'
          rules={[{ required: true, message: 'Please select a category!' }]}
          className='font-semibold'
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Content'
          name='content'
          rules={[{ required: true, message: 'Please enter a content!' }]}
          className='font-semibold'
        >
          <CKEditor
            data={content}
            editor={ClassicEditor}
            onChange={handleCkEditorChange}
            config={{
              extraPlugins: [uploadPlugin],
              toolbar: [
                'heading',
                '|',
                'bold',
                'italic',
                'link',
                'bulletedList',
                'numberedList',
                'blockQuote',
                'undo',
                'redo',
                'imageUpload',
                'insertTable',
                'mediaEmbed',
                'imageStyle:full',
                'imageStyle:side',
                'imageStyle:alignLeft',
                'imageStyle:alignRight',
              ],
              image: {
                toolbar: [
                  'imageTextAlternative',
                  'imageStyle:full',
                  'imageStyle:side',
                  'imageStyle:alignLeft',
                  'imageStyle:alignRight',
                ],
              },
            }}
          />
        </Form.Item>
        <Form.Item
          label='Image'
          rules={[{ required: true, message: 'Please enter a image!' }]}
          className='font-semibold'
        >
          <input
            type='file'
            name='image'
            onChange={uploadFileHandler}
            className='font-semibold'
          />
          {fileUploadError && (
            <div className='text-red-500'>
              Please upload an image with the following extensions: png, jpeg,
              mp4
            </div>
          )}
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Create Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );  
};

export default CreatePost;
