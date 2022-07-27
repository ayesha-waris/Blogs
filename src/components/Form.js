import classes from './Form.module.css';
import { useState } from 'react';

const Form = (props) => {
  const [title, setTitle] = useState(props.title ? props.title : 'Title');
  const [description, setDescription] = useState(
    props.description ? props.description : 'Add Your Blog.....'
  );

  if (props.description) {
    setDescription(props.description);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    props.submitHandler(title, description);
  };
  return (
    <form onSubmit={submitHandler} className={props.className}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={title}
      />
      <br />
      <textarea defaultValue={description} />
      <button>{props.buttonValue} </button>
    </form>
  );
};

export default Form;
