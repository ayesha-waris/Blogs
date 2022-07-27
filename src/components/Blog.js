import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';

import classes from './Blog.module.css';
const Blog = (props) => {
    const navigate = useNavigate();
  const clickHandler = () => {
      navigate(`/detail/${props.id}`)
  }
  return ( 
    // <div className={props.className? props.className : classes.blog}>
<div className={`${classes.blog} ${props.className? props.className : ''}`}>
    <h1> Title</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus obcaecati voluptatem earum. Numquam esse, quod, sint dolor sunt sequi quo ipsum aliquid sapiente ab atque, officia reprehenderit aut recusandae totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia esse accusantium ullam voluptatem? Ducimus dolor vitae, perferendis optio maxime maiores! Labore dolorem explicabo corporis quaerat a numquam officia eum.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, libero. Voluptatem quis dignissimos, expedita hic sapiente harum cum, laborum laboriosam accusamus sequi officiis incidunt nostrum labore, atque inventore numquam dolor?
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis autem ex, odio est eum nemo quisquam illo vel, consequuntur quas voluptatem ea, molestiae atque nisi a magnam. Beatae, facilis tenetur?
    </p>
    {!props.noButton? <button onClick = {clickHandler}>Detail</button> : null}
</div>
     
);
}
 
export default Blog;