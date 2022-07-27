
import Blog from "./Blog";
import classes from './Home.module.css';

const Home = () => {
  return ( 
    <div className={classes.wrapper}>
    <Blog id={1}/>
    <Blog id={2}/>
    <Blog id={3}/>
    <Blog id={4}/>
    <Blog id={5}/>
    <Blog id={6}/>
    </div>
   );
}
 
export default Home;