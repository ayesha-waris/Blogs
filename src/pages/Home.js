
import Blog from "../components/UI/Blog"
import Wrapper from "../components/UI/Wrapper";
import useFetch from '../hooks/useFetch'
import { ceil } from "mathjs";
import { useState , useCallback} from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FilterRadioButton from "../components/UI/Forms/FiterRadioButton";


const Home = () => {

  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
 
  
  const [url, setUrl] = useState(`http://localhost:8000/api/blogs/`);
  const { blogs, isLoading} = useFetch(url);
  console.log(blogs)

  const handlePagination = useCallback ((e, value) => {
    setPage(value)
    console.log(value)
    setUrl(`http://localhost:8000/api/blogs/?limit=5&offset=${(value-1)*5}`)

  },[])
  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);

  };
  const handleSearch = (event) => {
    setUrl(`http://localhost:8000/api/blogs/?q=${searchQuery}`)

  };
  return ( 
    
    <Wrapper>
        <TextField
        id="outlined-name"
        label="Search"
        value={searchQuery}
        onChange={handleSearchQuery}
      />
      <button onClick={handleSearch}>  Search </button>
      

    {isLoading && <div> is Loading ...............</div>}
    {blogs && 
  
    blogs.results.map(blog => <Blog key={blog.pk} id={blog.pk.toString()} title={blog.title} content={blog.content} />) 
    }
    {blogs && <> <Stack spacing={2} >
      <Pagination  count={ceil(blogs.count/5)} page={page}  hideNextButton={true} hidePrevButton={true} variant="outlined" onChange={ (e, value) => handlePagination(e,value)}/>
      </Stack>
     </>}
     
      
    
  </Wrapper>
   );
}
 
export default Home;