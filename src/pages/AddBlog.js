import { useNavigate } from 'react-router';
import Form from '../components/UI/Forms/BlogForm';
import Wrapper from '../components/UI/Wrapper';
import classes from './AddBlog.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BlogAddorEdit from '../hooks/blogPostorPut'

const AddBlog = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const navigate = useNavigate();
  const url = 'http://localhost:8000/api/create-blog/';
  const token = JSON.parse(localStorage.getItem('access_token'));
  const [blogNotAdded, setBlogNotAdded] = useState(false);
  const submitForm = async (title, content) => {
    const author = JSON.parse(localStorage.getItem('username'));
    const blog = { author: author, title: title, content: content };
  
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
  };

  const data = await BlogAddorEdit(
    url,
   requestOptions
   );
  if (data) {
    setBlogNotAdded(false);
    navigate('/index');
  } else {
    setBlogNotAdded(true);
  }

  };

  return (
    <Wrapper>


      {isAuthenticated && (
        <>
          <Form
            submitHandler={submitForm}
            buttonValue={'Add Blog'}
            className={classes.form}
            clearFields={true}
          />
        </>
      )}
      {!isAuthenticated && (
        <>
          <p>
            Pease <Link to="/login"> Login </Link> to add a Blog!!
          </p>
        </>
      )}
    </Wrapper>
  );
};

export default AddBlog;
