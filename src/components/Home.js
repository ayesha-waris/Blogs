
import Blog from "./Blog";
import classes from './Home.module.css';

const Home = () => {
  return ( 
    <div className={classes.wrapper}>
    <Blog/>
    <Blog/>
    </div>
   );
}
 
export default Home;