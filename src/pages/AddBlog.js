import { useNavigate } from 'react-router';
import Form from '../components/UI/Forms/BlogForm';
import Wrapper from '../components/UI/Wrapper';
import classes from './AddBlog.module.css';
import { authActions } from '../store/authSlice';
import { useSelector , useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AddBlog = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated)
  const navigate = useNavigate();
  const url = 'http://localhost:8000/api/create-blog/';
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token_access'));
    if (token) {
     setToken(token);
     dispatch(authActions.login());
    }
  }, [dispatch]);

  const submitForm = (title, content) => {
    const blog = { title, content };

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then((res) => {
      if(!res.ok){
        console.error("Blog not created")
      }
      
    });

    navigate('/index');
  };


  return (
    <Wrapper>
      {!isAuthenticated && <> 
      <Form
        submitHandler={submitForm}
        buttonValue={'Add Blog'}
        className={classes.form}
        clearFields={true}
      />
      </>}
      {isAuthenticated && <> 
      <p>Pease <Link to='/login'> Login </Link> to add a Blog!!</p>
      </>}
    </Wrapper>
  );
};

export default AddBlog;
