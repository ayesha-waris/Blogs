import { useNavigate } from 'react-router';
import Form from '../components/Form';
import Wrapper from '../components/Wrapper';
import classes from './AddBlog.module.css';


const AddBlog = () => {
  const navigate = useNavigate();

   const submitHandler =  async (e,title, description) => {
    console.log(title , description)
    // const blog = {
    //   title:title,
    //   description:description,
    //   id
    // }
    
     navigate('/index');
  }
  return ( 
    <Wrapper>
    <Form submitHandler={submitHandler} buttonValue = {'Add Blog'} className={classes.form} />
    </Wrapper>
    
   );
}
 
export default AddBlog;