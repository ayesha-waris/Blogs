import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/Navbar/NavBar';
import { Fragment } from 'react';

import AddBlog from './pages/AddBlog';
import BlogDetail from './pages/BlogDetail';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MyBlogs from './pages/MyBlogs';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/index" />} />
        <Route path="index" element={<Home />}>
          
        </Route>
        <Route path="/index/detail/:id" element={<BlogDetail />} />
        <Route path="/newBlog" element={<AddBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/myBlogs" element={<MyBlogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
