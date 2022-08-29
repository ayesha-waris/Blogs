import { useState } from 'react';

import Popover from '@mui/material/Popover';
import classes from './BlogDetail.module.css';
import Wrapper from '../components/Wrapper';
import Blog from '../components/Blog';
import Edit from '../components/Edit';

const BlogDetail = () => {
  ///get value from store

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = (e) => {
    setAnchorEl(null);
  };
  const clickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Wrapper>
      <button onClick={clickHandler} className={classes.edit}>
  
      </button>
      <Blog className={classes.detail} noButton={true} />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        // onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 530, left: 650 }}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <Edit handleClose={handleClose} />
      </Popover>
    </Wrapper>
  );
};

export default BlogDetail;
