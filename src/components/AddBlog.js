import Form from "./Form";
import Wrapper from "./Wrapper";

const AddBlog = () => {
  const submitHandler = (title, description) => {
    console.log(title , description)
  }
  return ( 
    <Wrapper>
    <Form submitHandler={submitHandler} buttonValue = {'Add Blog'} />
    </Wrapper>
    
   );
}
 
export default AddBlog;