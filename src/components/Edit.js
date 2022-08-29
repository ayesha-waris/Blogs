import { connect } from 'react-redux';
import classes from './Edit.module.css';
import Form from './Form';

const Edit = (props) => {

  const {id, title, content} = props

  const url = `http://localhost:8000/api/edit/${id}/`;

  const submitHandler = (title, content) => {
    const blog = { title, content };
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added');
    });
    props.handleClose(title, content);
    console.log(title, content);
  };

  return (
    <div className={`${classes.wrapper}`}>
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

export default Edit;
