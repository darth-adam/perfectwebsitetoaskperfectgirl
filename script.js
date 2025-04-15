document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const envelope = document.querySelector('.envelope');
    const openBtn = document.querySelector('.open-btn');
    const resetBtn = document.querySelector('.reset-btn');
    const nextBtn = document.querySelector('.next-btn');
    const letterText = document.getElementById('letter-text');
    const musicBtn = document.querySelector('.music-btn');
    const loveSong = document.getElementById('love-song');
    const heartsContainer = document.querySelector('.hearts-container');
    
    // Romantic messages
    const messages = [
        "My dearest Nour, every moment with you is a blessing I don't deserve. Your smile lights up my world like nothing else ever could.",
        "My love, I know things are tough between us right now, but I want you to know I'll love you no matter what we go through.",
        "I know I can be an asshole sometimes, and I'm truly sorry for everything. Please forgive me. Mwah, I love you more than words can say."
    ];
    
    // State variables
    let currentMessageIndex = 0;
    let isMusicPlaying = false;
    let isFirstInteraction = true;
    
    // Initialize first message
    letterText.textContent = messages[currentMessageIndex];
    
    // Envelope open/close functionality
    openBtn.addEventListener('click', function() {
        envelope.classList.add('open');
        createHearts();
    });
    
    resetBtn.addEventListener('click', function() {
        envelope.classList.remove('open');
        currentMessageIndex = 0;
        letterText.textContent = messages[currentMessageIndex];
    });
    
    // Message cycling
    nextBtn.addEventListener('click', function() {
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        letterText.textContent = messages[currentMessageIndex];
    });
    
    // Music control
    musicBtn.addEventListener('click', toggleMusic);
    
    // Enable interactions after first click
    document.body.addEventListener('click', enableInteractions, { once: true });
    
    // Create floating hearts animation
    function createHearts() {
        // Clear any existing hearts
        heartsContainer.innerHTML = '';
        
        // Create 8 hearts with different animations
        for (let i = 0; i < 8; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart-particle');
            
            // Random positioning
            const leftPos = Math.random() * 80 + 10;
            heart.style.left = `${leftPos}%`;
            
            // Random animation delay and duration
            const delay = Math.random() * 2;
            const duration = 2 + Math.random() * 2;
            
            heart.style.animation = `floatUp ${duration}s ease-in-out ${delay}s infinite`;
            
            heartsContainer.appendChild(heart);
        }
    }
    
    // Music toggle function
    function toggleMusic() {
        if (isMusicPlaying) {
            loveSong.pause();
            musicBtn.textContent = '🎵 Play Our Song';
            musicBtn.classList.remove('playing');
        } else {
            loveSong.play()
                .then(() => {
                    musicBtn.textContent = '🔊 Our Song Playing';
                    musicBtn.classList.add('playing');
                })
                .catch(error => {
                    console.error('Audio playback failed:', error);
                    alert('Please click anywhere on the page first to enable audio.');
                });
        }
        isMusicPlaying = !isMusicPlaying;
    }
    
    // Enable all interactions after first click
    function enableInteractions() {
        musicBtn.disabled = false;
        openBtn.disabled = false;
        resetBtn.disabled = false;
        isFirstInteraction = false;
        
        // Remove the disabled styling
        document.querySelectorAll('button').forEach(btn => {
            btn.style.opacity = '1';
            btn.style.cursor = 'pointer';
        });
    }
    
    // Initial setup - disable buttons until first interaction
    function initialize() {
        musicBtn.disabled = true;
        openBtn.disabled = true;
        resetBtn.disabled = true;
        
        // Style disabled buttons
        document.querySelectorAll('button').forEach(btn => {
            btn.style.opacity = '0.7';
            btn.style.cursor = 'not-allowed';
            btn.style.transition = 'opacity 0.3s';
        });
    }
    
    initialize();
});