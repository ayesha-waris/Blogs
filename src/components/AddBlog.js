import { useNavigate } from 'react-router';
import classes from './AddBlog.module.css';
import Form from "./Form";
import Wrapper from "./Wrapper";

const AddBlog = () => {
  const navigate = useNavigate();
   const submitHandler =  async (e,title, description) => {
    console.log(title , description)
    
     navigate('/index');
  }
  return ( 
    <Wrapper>
    <Form submitHandler={submitHandler} buttonValue = {'Add Blog'} className={classes.form} />
    </Wrapper>
    
   );
}
 
export default AddBlog;