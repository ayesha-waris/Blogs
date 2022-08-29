import { useNavigate } from 'react-router';

import classes from './Blog.module.css';

const Blog = (props) => {
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
      {!props.noButton ? <button onClick={clickHandler}>Detail</button> : null}
    </div>
  );
};

export default Blog;
