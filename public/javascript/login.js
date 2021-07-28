const loginFormHandler = async (event) => {
    try { event.preventDefault();

        console.log(event)

        const username = document.querySelector('#username-login').value.trim();
        const password = document.querySelector('#password-login').value.trim();
    
        if(username && password) {
            const response = await fetch('/api/museum/login', {
                method: 'post',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: { 'Content-Type': 'application/json' }
            })

            if(response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert(response.statusText)
            }
        }        
    } catch (error) {
        console.log(error);

    }
}

const createAccount = async (event) => {
    try {
        
        event.preventDefault();
    
        const username = document.querySelector('#username-signup').value.trim();
        const email = document.querySelector('#email-signup').value.trim();
        const password = document.querySelector('#password-signup').value.trim();
    
        if (username && email && password) {
            const response = await fetch('/api/museum', {
                method: 'post',
                body: JSON.stringify({
                    username,
                    email,
                    password
                }),
                headers: { 'Content-Type': 'application/json' }
            });
    
            if (response.ok) {
                document.location.replace('/');
            } else {
                alert(response.statusText);
            }
        }
    } catch (error) {
        console.log(error)
    }
}

document.querySelector('.signup-form').addEventListener('submit', createAccount);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
