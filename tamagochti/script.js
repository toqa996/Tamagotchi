let food = 100, sleep = 100, play = 100;
const foodDecay = 7, sleepDecay = 10, playDecay = 5;
const catImage = document.getElementById('cat-image');
const message = document.getElementById('message');
const backgroundMusic = document.getElementById('background-music');
const feedButton = document.getElementById('feed-button');
const sleepButton = document.getElementById('sleep-button');
const playButton = document.getElementById('play-button');

backgroundMusic.play();

function disableButtons() {
    feedButton.disabled = true;
    sleepButton.disabled = true;
    playButton.disabled = true;
    feedButton.classList.add('disabled');
    sleepButton.classList.add('disabled');
    playButton.classList.add('disabled');
}

function updateStats() {
    document.getElementById('food').textContent = food;
    document.getElementById('sleep').textContent = sleep;
    document.getElementById('play').textContent = play;
    
    if (food <= 0 || sleep <= 0 || play <= 0) {
        catImage.src = 'photo/dead.png';
        message.textContent = 'Meowji456 has died. Game over.';
        disableButtons();
        clearInterval(gameLoop);
        return;
    }
    if (food < 30 || sleep < 30 || play < 30) {
        catImage.src = 'photo/demon.png';
        message.textContent = 'Meowji456 is angry and needs immediate attention!';
    } else if (food < 70 || sleep < 70 || play < 70) {
        if (food <= sleep && food <= play) {
            catImage.src = 'photo/hungry.png';
            message.textContent = 'Meowji456 is hungry!';
        } else if (sleep <= food && sleep <= play) {
            catImage.src = 'photo/sleepy.png';
            message.textContent = 'Meowji456 is sleepy!';
        } else {
            catImage.src = 'photo/bored.png';
            message.textContent = 'Meowji456 is bored!';
        }
    } else if (food >= 90 && sleep >= 90 && play >= 90) {
        catImage.src = 'photo/max-health.png';
        message.textContent = 'Meowji456 is very happy!';
    } else {
        catImage.src = 'photo/mid-health.png';
        message.textContent = 'Meowji456 is feeling okay.';
    }
}

function feedCat() {
    food = Math.min(food + 10, 100);
    updateStats();
}

function putToSleep() {
    sleep = Math.min(sleep + 15, 100);
    updateStats();
}

function playWithCat() {
    play = Math.min(play + 5, 100);
    updateStats();
}

function toggleMusic() {
    var icon = document.getElementById('volume-icon');
    var button = document.getElementById('music-mode'); 
    var backgroundMusic = document.getElementById('background-music'); 

    if (!backgroundMusic) {
        console.error("Element with ID 'background-music' not found!");
        return;
    }

    if (backgroundMusic.paused) {
        backgroundMusic.play();
        icon.classList.remove('fa-regular', 'fa-circle');
        icon.classList.add('fa-regular', 'fa-x');
        button.style.backgroundColor = "#DC3545"; 
    } else {
        backgroundMusic.pause();
        icon.classList.remove('fa-regular', 'fa-x');
        icon.classList.add('fa-regular', 'fa-circle');
        button.style.backgroundColor = "#4169E1"; 
}
}

const gameLoop = setInterval(() => {
    food -= foodDecay;
    sleep -= sleepDecay;
    play -= playDecay;
    updateStats();
}, 1000);

// Dark mode
const darkModeButton = document.getElementById('dark-mode');
     let isDarkMode = false;

     function myFunction() {
        isDarkMode = !isDarkMode;
         if (isDarkMode) {
             document.body.classList.add('dark-mode');
             darkModeButton.innerHTML = '<i class="fas fa-sun"></i>';
             isDarkMode = true;
         } else {
             document.body.classList.remove('dark-mode');
             darkModeButton.innerHTML = '<i class="fas fa-moon"></i>';
             isDarkMode = false;
         }
     }
    