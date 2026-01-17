// Cursor effect
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

document.querySelectorAll('.navbar-item, .announcement-card').forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
    });
});

// Toggle Announcements and Profile sections
const announcementContainer = document.querySelector('.announcement-container');
const profileContainer = document.querySelector('.profile-container');

document.getElementById('announcements').addEventListener('click', () => {
    profileContainer.style.display = 'none';
    announcementContainer.style.display = 'grid';
});

document.getElementById('profile').addEventListener('click', () => {
    announcementContainer.style.display = 'none';
    profileContainer.style.display = 'block';
});

// Logout and exit functionality
document.getElementById('logout').addEventListener('click', () => {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
});

document.getElementById('exit-icon').addEventListener('click', () => {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'application.html';
    }, 1000);
});

function fetchServerData() {
    const serverOnline = true;
    const randomPlayerCount = Math.floor(Math.random() * (200000 - 2000 + 1)) + 2000;

    const serverStatusText = document.querySelector('.status-text');
    const playerCountElement = document.querySelector('.players span');

    if (serverOnline) {
        serverStatusText.textContent = 'Server is Online';
        serverStatusText.style.color = '#27ae60';
    } else {
        serverStatusText.textContent = 'Server is Offline';
        serverStatusText.style.color = '#e74c3c';
    }


    playerCountElement.textContent = `Players Online: ${randomPlayerCount}`;
}


fetchServerData();
setInterval(fetchServerData, 4000);


const achievementsToggle = document.getElementById('achievements-toggle');
const achievementsSection = document.getElementById('achievements-section');

achievementsToggle.addEventListener('click', function() {
    if (achievementsSection.style.display === 'none') {
        achievementsSection.style.display = 'block';
        achievementsToggle.innerText = 'Hide Achievements';
    } else {
        achievementsSection.style.display = 'none';
        achievementsToggle.innerText = 'View Achievements';
    }
});


const viewQuestDetailsBtn = document.getElementById('view-quest-details-btn');
const questDetailsSection = document.getElementById('quest-details-section');
const closeQuestDetailsBtn = document.getElementById('close-quest-details-btn');

viewQuestDetailsBtn.addEventListener('click', () => {
    questDetailsSection.style.display = 'block';
});

closeQuestDetailsBtn.addEventListener('click', () => {
    questDetailsSection.style.display = 'none';
});
