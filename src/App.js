
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home';


import NavBar from './components/NavBar';
import { Fragment } from 'react';

import AddBlog from './pages/AddBlog';
import BlogDetail from './pages/BlogDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Fragment>
    <NavBar/>
  <Routes>
    <Route path="/" element={<Navigate to="/index" />} />
    <Route path='/index' element = {<Home/>} />
    <Route path='/newBlog' element  = {<AddBlog/>}/>
    <Route exact path='/detail/:id' element = {<BlogDetail/>} />
    <Route path="*" element = {<NotFound/>}/>
  </Routes>
  </Fragment>
  );
}

export default App;
