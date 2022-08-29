
import Blog from "../components/Blog";
import Wrapper from "../components/Wrapper";
import useFetch from '../hooks/useFetch'


const Home = () => {

  const url = 'http://localhost:8000/api/blogs/'

const { blogs, isLoading} = useFetch(url);

  return ( 
    
    <Wrapper>
    {isLoading && <div> is Loading ...............</div>}
    {blogs && blogs.map(blog => <Blog key={blog.id} id={blog.id} title={blog.title} content={blog.content} />) }

    </Wrapper>
   );
}
 
export default Home;