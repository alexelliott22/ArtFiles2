const loginFormHandler = async function(event) {
    event.preventDefault();
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

        if (username && password) {
        fetch('/api/museum/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function() {
            document.location.replace('/');
        })
        .catch(err => console.log(err))
        }
    }
        
    //     const response = await fetch('/api/museum/login', {
    //         method: 'post',
    //         body: JSON.stringify({
    //             email,
    //             password
    //         }),
    //         headers: { 'Content-Type': 'application/json' }
    //     });

    //     if (response.ok) {
    //         document.location.replace('/');
    //     } else {
    //         alert(response.statusText);
    //     }
    // }
// }

async function signupFormHandler(event) {
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
}

var signUpForm = document.querySelector(".signup-form")
signUpForm.addEventListener("submit", signupFormHandler )

var loginInForm = document.querySelector(".login-form")
loginInForm.addEventListener("submit", loginFormHandler )