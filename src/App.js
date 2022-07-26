
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './components/Home';
import AddBlog from './components/AddBlog';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Navigate to="/index" />} />
    <Route path='/index' element = {<Home/>} />
    <Route path='/newBlog' element  = {<AddBlog/>}/>
    <Route path='/detail/*' element = {<BlogDetail/>} />
  </Routes>
  );
}

export default App;
