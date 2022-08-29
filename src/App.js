
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home';


import NavBar from './components/NavBar';
import { Fragment } from 'react';

import AddBlog from './pages/AddBlog';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <Fragment>
    <NavBar/>
  <Routes>
    <Route path="/" element={<Navigate to="/index" />} />
    <Route path='/index' element = {<Home/>} />
    <Route path='/newBlog' element  = {<AddBlog/>}/>
    <Route path='/detail/*' element = {<BlogDetail/>} />
    
  </Routes>
  </Fragment>
  );
}

export default App;
