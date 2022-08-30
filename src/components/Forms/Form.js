import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = (props) => {
  const {className, buttonValue, title, description , clearFields} = props; 
 
  const [_title, setTitle] = useState(title ? title : 'Title');
  const [_description, setDescription] = useState(
    description ? description : 'Add Your Blog.....'
  );

  const submitHandler = (e) => {
    e.preventDefault();
    props.submitHandler(title, description);
  };

  const titleClickHanndler = (e) => {

    if(clearFields){
      setTitle('')
    }

  }
  const descriptionClickHanndler = (e) => {
    if(clearFields){
      setDescription('')
    }
  }
  return (
    <form onSubmit={submitHandler} className={className}>
      <input
        value={_title}
        onClick={ titleClickHanndler}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={_title}
      />
      <br />
      <textarea
        placeholder={_description}
        onClick = { descriptionClickHanndler }
        onChange={(e) => setDescription(e.target.value)}
        value={_description}
      />
      <button>{buttonValue}</button>
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  submitHandler: PropTypes.func,
  buttonValue: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  clearFields: PropTypes.bool

}
export default Form;
