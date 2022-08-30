import React from 'react';
import PropTypes from 'prop-types'
import Popover from '@mui/material/Popover';

import Edit from '../EditBlog/Edit';

const PopOver = (props) => {
    const {id, open, anchorEl,handleClose, title, content } = props
    
    return (
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
              title={title}
              content={content}
            />
      </Popover>
    );
}
 
Edit.propTypes = {
    handleClose: PropTypes.func,
    id: PropTypes.string,
    open: PropTypes.bool,
    anchorEl: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
  };


export default PopOver;