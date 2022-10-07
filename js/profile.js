const newFormHandler = async (event) => {
    event.preventDefault();
  
    const blog_title = document.querySelector('#blog-blog_title').value.trim();
    
    const description = document.querySelector('#blog-desc').value.trim();
  
    if (blog_title && description) {
      const response = await fetch(`/apis/blogs`, {
        method: 'POST',
        body: JSON.stringify({ blog_title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('error');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/apis/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('error');
      }
    }
  };
  
  document
    .querySelector('.new-blog-form')
    .addEventListener('go', newFormHandler);
  
  document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);
  