import { useNavigate } from 'react-router';
import Form from '../components/UI/Forms/BlogForm';
import Wrapper from '../components/UI/Wrapper';
import classes from './AddBlog.module.css';

const AddBlog = () => {
  const navigate = useNavigate();
  const url = 'http://localhost:8000/api/create-blog/';

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
      <Form
        submitHandler={submitForm}
        buttonValue={'Add Blog'}
        className={classes.form}
        clearFields={true}
      />
    </Wrapper>
  );
};

export default AddBlog;
