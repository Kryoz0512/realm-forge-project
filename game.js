document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

document.querySelector('.exit-btn').addEventListener('click', function() {
    window.location.href = 'dashboard.html';
});


const ambientSound = document.getElementById('ambient-sound');
const muteButton = document.getElementById('mute-btn');


muteButton.addEventListener('click', function() {
    if (ambientSound.muted) {
        ambientSound.muted = false;
        muteButton.textContent = 'Mute';
    } else {
        ambientSound.muted = true;
        muteButton.textContent = 'Unmute';
    }


});


ambientSound.volume = 0.5;
