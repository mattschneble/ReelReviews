const logout = async() => {
    try {
        const response = await fetch('/api/user/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            document.location.replace('/');
            console.log(logged_in)
            logged_in = false;
        } else {
            alert(response.statusText);
        } 
    } catch (error) {
        console.error('Logout error:', error);
    }
};

document.querySelector('#logout').addEventListener('click', function (event) {
    event.preventDefault();
    logout();
});