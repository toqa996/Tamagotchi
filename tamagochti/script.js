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
    
    if (food === 0 || sleep === 0 || play === 0) {
        catImage.src = 'dead.jpg';
        message.textContent = 'The cat has died. Game over.';
        disableButtons();
        clearInterval(gameLoop);
        return;
    }
    if (food < 30 || sleep < 30 || play < 30) {
        catImage.src = 'demon.jpg';
        message.textContent = 'The cat is angry and needs immediate attention!';
    } else if (food < 70 || sleep < 70 || play < 70) {
        if (food <= sleep && food <= play) {
            catImage.src = 'hungry.jpg';
            message.textContent = 'The cat is hungry!';
        } else if (sleep <= food && sleep <= play) {
            catImage.src = 'sleepy.jpg';
            message.textContent = 'The cat is sleepy!';
        } else {
            catImage.src = 'bored.jpg';
            message.textContent = 'The cat is bored!';
        }
    } else if (food >= 90 && sleep >= 90 && play >= 90) {
        catImage.src = 'max-health.jpg';
        message.textContent = 'The cat is very happy!';
    } else {
        catImage.src = 'mid-health.jpg';
        message.textContent = 'The cat is feeling okay.';
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
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
}

const gameLoop = setInterval(() => {
    food -= foodDecay;
    sleep -= sleepDecay;
    play -= playDecay;
    updateStats();
}, 1000);