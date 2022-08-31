import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import classes from './Blog.module.css';

const Blog = (props) => {
  
  const {id, name, title, content, showButton } = props

  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/detail/${props.id}`);
  };
  return (
    <div
      className={`${classes.blog} ${props.className ? props.className : ''}`}
    >
      <h1> {props.title}</h1>
      <p>{props.content}</p>
      {!props.showButton ? <button onClick={clickHandler}>Detail</button> : null}
    </div>
  );
};

Blog.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  showButton: PropTypes.bool
};


export default Blog;
