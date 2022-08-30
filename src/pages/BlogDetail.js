import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Popover from '@mui/material/Popover';
import classes from './BlogDetail.module.css';
import Wrapper from '../components/UI/Wrapper';
import Blog from '../components/UI/Blog';
import Edit from '../components/EditBlog/Edit';
import useFetch from '../hooks/useFetch';
import PopOver from '../components/PopOver/PopOver';

const BlogDetail = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/api/detail/${id}/`;
  const { blogs, isLoading } = useFetch(url);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = (title, description) => {
    setAnchorEl(null);
  };

  const clickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const open = Boolean(anchorEl);

  return (
    <Wrapper>
      <button onClick={clickHandler} className={classes.edit}>
        Edit
      </button>
      {isLoading && <div> is Loading ...............</div>}

      {!blogs && 'Blog not available'}

      {blogs && (
        <>
          <Blog
            className={classes.detail}
            showButton={true}
            title={blogs.title}
            content={blogs.content}
          />

          <PopOver
            id={id}
            open={open}
            anchorEl={anchorEl}
            handleClose={handleClose}
            title={blogs.title}
            content={blogs.content}
            />
          
        </>
      )}
    </Wrapper>
  );
};

export default BlogDetail;
