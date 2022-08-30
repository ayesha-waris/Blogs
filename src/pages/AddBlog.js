import { useNavigate } from 'react-router';
import Form from '../components/Forms/Form';
import Wrapper from '../components/UI/Wrapper';
import classes from './AddBlog.module.css';

const AddBlog = () => {
  const navigate = useNavigate();
  const url = 'http://localhost:8000/api/create-blog/';

  const submitForm = async (title, content) => {
    const blog = { title, content };

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added');
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
