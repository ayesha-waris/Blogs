import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

import Popover from '@mui/material/Popover';
import classes from './BlogDetail.module.css';
import Wrapper from '../components/Wrapper';
import Blog from '../components/Blog';
import Edit from '../components/Edit';
import useFetch from '../hooks/useFetch';

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

      {blogs && 
      <>
        <Blog
          className={classes.detail}
          noButton={true}
          title={blogs.title}
          content={blogs.content}
        />
      
      
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 530, left: 800 }}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <Edit
          handleClose={handleClose}
          id={id}
          title={blogs.title}
          content={blogs.content}
        />
      </Popover>
      </>
}
    </Wrapper>
  );
};

export default BlogDetail;
