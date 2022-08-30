import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editPopoverActions } from '../store/edit-popover-slice';

import classes from './BlogDetail.module.css';
import Wrapper from '../components/UI/Wrapper';
import Blog from '../components/UI/Blog';
import useFetch from '../hooks/useFetch';
import PopOver from '../components/PopOver/PopOver';

const BlogDetail = () => {
  const dispatch = useDispatch();
  const ifEditPopover = useSelector((state) => state.editPopover.ifPopover);

  const { id } = useParams();
  const url = `http://localhost:8000/api/detail/${id}/`;
  const { blogs, isLoading } = useFetch(url);

  const EditButtonClickHandler = (e) => {
    e.preventDefault();
    dispatch(editPopoverActions.setPopover());
  };

  return (
    <Wrapper>
      <button onClick={EditButtonClickHandler} className={classes.edit}>
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
          {ifEditPopover && (
            <PopOver id={id} title={blogs.title} content={blogs.content} />
          )}
        </>
      )}
    </Wrapper>
  );
};

export default BlogDetail;
