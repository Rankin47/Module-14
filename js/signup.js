const signupFormHandler = async (event) => {
    event.preventDefault();
  

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (/*name && */username && password) {
      const response = await fetch('/apis/users/signup', {
        method: 'POST',
        body: JSON.stringify({ /*name, */username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);