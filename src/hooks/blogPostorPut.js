async function BlogAddorEdit(url, requestOptions) {
    
    return fetch(url, {
      method: requestOptions.method,
      headers: requestOptions.headers,
      body: requestOptions.body
    })
      .then(data => data.json())
   }
  
  export default BlogAddorEdit;