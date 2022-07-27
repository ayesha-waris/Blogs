
import Blog from "./Blog";
import Wrapper from "./Wrapper";

const Home = () => {
  return ( 
    <Wrapper>
    <Blog id={1}/>
    <Blog id={2}/>
    <Blog id={3}/>
    <Blog id={4}/>
    <Blog id={5}/>
    <Blog id={6}/>
    </Wrapper>
   );
}
 
export default Home;