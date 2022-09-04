import { useNavigate, Link } from 'react-router';
import PropTypes from 'prop-types';
import classes from './Blog.module.css';
import { useState } from 'react';
import PopOver from './PopOver/PopOver';

const Blog = (props) => {
  const {
    id,
    className,
    title,
    content,
    showButton,
    isEditable = false,
  } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = (title, description) => {
    setAnchorEl(null);
  };

  const blogEditClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const navigate = useNavigate();

  const blogDetailClickHandler = () => {
    navigate(`/index/detail/${id}`);
  };
  const open = Boolean(anchorEl);
  return (
    <div className={`${classes.blog} ${className ? className : ''}`}>
      <h1> {title}</h1>
      <p>{content}</p>
      {!showButton ? (
        <button onClick={blogDetailClickHandler}>Detail</button>
      ) : null}
      {isEditable ? <button onClick={blogEditClickHandler}>Edit</button> : null}
      <PopOver
        id={id}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        title={title}
        content={content}
      />
    </div>
  );
};

Blog.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  showButton: PropTypes.bool,
  isEditable: PropTypes.bool,
};

export default Blog;
