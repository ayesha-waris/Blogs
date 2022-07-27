import Wrapper from "./Wrapper";
import classes from './BlogDetail.module.css';
import Blog from "./Blog";
const BlogDetail = () => {
  const clickHandler = () => {
    console.log("hi");
  }
  return ( 
  <Wrapper>
    <button onClick= {clickHandler} className={classes.edit}> Edit</button>
   <Blog className={classes.detail} noButton = {true}/>
   
  </Wrapper>
   );
}
 
export default BlogDetail;