import PropTypes from 'prop-types';
import classes from './Edit.module.css';
import Form from '../UI/Forms/BlogForm';
import BlogAddorEdit from '../../hooks/blogPostorPut';

const Edit = (props) => {
  const { id, title, content } = props;

  const url = `http://localhost:8000/api/edit/${id}/`;

  const submitHandler = async(title, content) => {
    const blog = { title, content };
    const token = JSON.parse(localStorage.getItem('access_token'));
    const requestOptions = {
      method: 'PUT',
      body: JSON.stringify(blog),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }}
    const data = await BlogAddorEdit(
      url,
      requestOptions
      );
    console.log(data)
    if (data) {
      props.handleClose(title, content);
      
    }
   
  };

  return (
    <div className={classes.wrapper}>
      <Form
        className={classes.edit}
        submitHandler={submitHandler}
        buttonValue={'Edit Blog'}
        title={title}
        description={content}
      />
    </div>
  );
};

Edit.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Edit;

