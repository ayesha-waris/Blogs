import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { editPopoverActions } from '../../store/edit-popover-slice';
import Edit from '../EditBlog/Edit';
import Popover from '@mui/material/Popover';


const PopOver = (props) => {

  const {id, title, content} = props
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const ifEditPopover = useSelector((state) => state.editPopover.ifPopover);

  const openEditor = (e) => {
    setAnchorEl(e.currentTarget);
  }

  if(ifEditPopover){
      openEditor()
  }

  const handleClose = (title, description) => {
    setAnchorEl(null);
    dispatch(editPopoverActions.eliminatePopover());
  };
  const open = Boolean(anchorEl);

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
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
  };


export default PopOver;