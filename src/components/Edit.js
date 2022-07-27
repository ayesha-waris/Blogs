import classes from './Edit.module.css'
import Form from './Form';
import Wrapper from './Wrapper';
const Edit = (props) => {
  const submitHandler = (title, description) => {
    props.handleClose();
    console.log(title , description)
  }

  return ( 
    
    <div className={`${classes.wrapper}`}>
     <Form className = {classes.edit} submitHandler={submitHandler} buttonValue = {'Edit Blog'}/>
   </div >

   );
}
 
export default Edit;