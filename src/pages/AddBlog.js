import { useNavigate } from 'react-router';
import Form from '../components/UI/Forms/BlogForm';
import Wrapper from '../components/UI/Wrapper';
import classes from './AddBlog.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AddBlog = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const navigate = useNavigate();
  const url = 'http://localhost:8000/api/create-blog/';
  const token = JSON.parse(localStorage.getItem('access_token'));

  const submitForm = (title, content) => {
    const author = 'ayeshawariss';
    const blog = { author: author, title:title, content:content };
    console.log(JSON.stringify(blog));

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',     
      },
    }).then((res) => {
      if (!res.ok) {
        console.log(res)
        console.error('Blog not created');
      }
    });

    navigate('/index');
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
