import { useState } from "react";
import Wrapper from "./Wrapper";
import Popover from '@mui/material/Popover';
import classes from './BlogDetail.module.css';
import Typography from '@mui/material/Typography';
import Blog from "./Blog";
import Edit from "./Edit";
const BlogDetail = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = (e) => {
  
    setAnchorEl(null);
  };
  const clickHandler = (e) => {
    setAnchorEl(e.currentTarget);

  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return ( 
  <Wrapper>
    <button onClick= {clickHandler} className={classes.edit}> Edit</button>
   <Blog className={classes.detail} noButton = {true}/>
   
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
        <Edit handleClose = {handleClose} />
      </Popover >
   
  </Wrapper>
   );
}
 
export default BlogDetail;