document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const openBtn = document.querySelector('.open-btn');
    const resetBtn = document.querySelector('.reset-btn');
    const nextMessageBtn = document.querySelector('.next-message-btn');
    const letterText = document.getElementById('letter-text');
    const bgMusic = document.getElementById('bg-music');
    const musicBtn = document.querySelector('.music-btn');
    
    // Messages array
    const messages = [
        "Every moment with you is a blessing I don't deserve. Your smile lights up my world like nothing else ever could.",
        "I know things are tough between us at this moment but I'd love you no matter what.",
        "I know I'm an asshole and sorry once again for everything bad that I did. Mwah, I love you."
    ];
    
    let currentMessageIndex = 0;
    let isMusicPlaying = false;
    
    // Open envelope
    openBtn.addEventListener('click', function() {
        envelope.classList.add('open');
    });
    
    // Reset envelope
    resetBtn.addEventListener('click', function() {
        envelope.classList.remove('open');
        currentMessageIndex = 0;
        letterText.textContent = messages[currentMessageIndex];
    });
    
    // Cycle through messages
    nextMessageBtn.addEventListener('click', function() {
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        letterText.textContent = messages[currentMessageIndex];
    });
    
    // Music control
    musicBtn.addEventListener('click', function() {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicBtn.textContent = "🎵 Play Music";
            musicBtn.classList.remove('playing');
        } else {
            bgMusic.play()
                .then(() => {
                    musicBtn.textContent = "🔊 Music Playing";
                    musicBtn.classList.add('playing');
                })
                .catch(e => {
                    console.log("Audio play prevented:", e);
                    alert("Please interact with the page first to allow audio playback.");
                });
        }
        isMusicPlaying = !isMusicPlaying;
    });
    
    // Enable music button after first user interaction
    document.body.addEventListener('click', function initAudio() {
        // This just enables the button, doesn't autoplay
        musicBtn.disabled = false;
        document.body.removeEventListener('click', initAudio);
    }, { once: true });
    
    // Initially disable music button
    musicBtn.disabled = true;
});