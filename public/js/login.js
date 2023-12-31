const loginFormHandler = async(event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(username && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            const responseData = await response.json();
            document.location.replace('/')
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async(event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const confirm = document.querySelector('#confirm-signup').value.trim();

    if(username && email && password === confirm) {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            const responseData = await response.json();
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    } else if(password !== confirm) {
        alert('Passwords do not match!');
        return;
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);