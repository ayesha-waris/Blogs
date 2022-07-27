import classes from './Form.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
const Form = (props) => {

  const navigate = useNavigate();
  const [title, setTitle] = useState(props.title? props.title : 'Title');
  const [description, setDescription] = useState(props.description? props.description : 'Add Your Blog.....');

if(props.description){
  setDescription(props.description);
} 

const submitHandler = (e) => {
e.preventDefault();
    props.submitHandler(title,description);
    navigate('/index');

 }
  return (
    
    <form onSubmit={submitHandler} className={classes.form}>
      <input value={title}
            onChange={(e) => setTitle(e.target.value)} placeholder={title} />
      <br/>
      <textarea defaultValue={description}/>  
      <button >{props.buttonValue} </button> 
    </form>
    
    );
}
 
export default Form;