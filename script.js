const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');
const showIcon = document.getElementById('showIcon');
const hideIcon = document.getElementById('hideIcon');
const enterButton = document.querySelector('button[type="submit"]');
const exitButton = document.getElementById('exitButton');
const loginContainer = document.querySelector('.login-container');
const gifContainer = document.getElementById('gifContainer');

togglePassword.addEventListener('click', () => {
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;

    if (type === 'password') {
        showIcon.style.display = 'block';
        hideIcon.style.display = 'none';
    } else {
        showIcon.style.display = 'none';
        hideIcon.style.display = 'block';
    }
});

enterButton.addEventListener('click', function(event) {
    event.preventDefault();


    gifContainer.style.display = 'block';


    loginContainer.classList.add('fade-out-container');


    setTimeout(function() {
        window.location.href = 'dashboard.html';
    }, 5000);
});

exitButton.addEventListener('click', function() {
    loginContainer.classList.add('fade-out-container');
    
    setTimeout(function() {
        window.location.href = 'application.html';
    }, 1000);
});
