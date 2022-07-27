import Wrapper from "./Wrapper";
import classes from './BlogDetail.module.css';
import Blog from "./Blog";
const BlogDetail = () => {
  return ( 
  <Wrapper>
    <button> Edit</button>
   <Blog className={classes.detail} noButton = {true}/>
   
  </Wrapper>
   );
}
 
export default BlogDetail;