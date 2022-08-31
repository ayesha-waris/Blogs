import PropTypes from 'prop-types';
import classes from './Edit.module.css';
import Form from '../UI/Forms/Form';

const Edit = (props) => {
  const { id, title, content } = props;

  const url = `http://localhost:8000/api/edit/${id}/`;

  const submitHandler = (title, content) => {
    const blog = { title, content };
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then((res) => {
      if (!res.ok) {
        console.error('Blog not edited successfully');
      }
    });
    props.handleClose(title, content);
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

