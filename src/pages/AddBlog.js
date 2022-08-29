import { useNavigate } from 'react-router';
import Form from '../components/Form';
import Wrapper from '../components/Wrapper';
import classes from './AddBlog.module.css';

const AddBlog = () => {
  const navigate = useNavigate();

  const submitHandler = async (title, content) => {
    const blog = { title, content };

    fetch('http://localhost:8000/api/create-blog/', {
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
        submitHandler={submitHandler}
        buttonValue={'Add Blog'}
        className={classes.form}
        clearFields={true}
      />
    </Wrapper>
  );
};

export default AddBlog;
