import { useState } from 'react';
import { useParams } from 'react-router-dom';

import classes from './BlogDetail.module.css';
import Wrapper from '../components/UI/Wrapper';
import Blog from '../components/UI/Blog';
import useFetch from '../hooks/useFetch';

const BlogDetail = (isEditable = false) => {
  const { id } = useParams();
  const url = `http://localhost:8000/api/detail/${id}/`;
  const { blogs, isLoading } = useFetch(url);


  return (
    <Wrapper>

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
          
        </>
      )}
    </Wrapper>
  );
};

export default BlogDetail;
