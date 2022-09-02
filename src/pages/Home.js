
import Blog from "../components/UI/Blog"
import Wrapper from "../components/UI/Wrapper";
import useFetch from '../hooks/useFetch'


const Home = () => {

const url = 'http://localhost:8000/api/blogs/'
const { blogs, isLoading} = useFetch(url);
console.log(blogs)

  return ( 
    
    <Wrapper>
    {isLoading && <div> is Loading ...............</div>}
    {blogs && blogs.results.map(blog => <Blog key={blog.pk} id={blog.pk.toString()} title={blog.title} content={blog.content} />) }

    </Wrapper>
   );
}
 
export default Home;