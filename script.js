// Array of deeply emotional and soul-melting messages
const loveMessages = [
    "You are the reason my heart beats, the reason I breathe 💕",
    "Your smile is the most beautiful thing I've ever seen in my life",
    "I love how your eyes light up when you're happy - it's my favorite sight",
    "You make me a better person just by being in my life, my angel",
    "Every day with you is a gift I never want to take for granted again",
    "Your happiness means everything to me - more than my own life",
    "I promise to cherish every moment we have together like it's our last",
    "You are my home, my safe place, my everything, my world",
    "I love you more than words could ever express, more than life itself",
    "Please give me the chance to love you the way you deserve to be loved",
    "I can't imagine waking up without you by my side",
    "You are my soulmate, my other half, the missing piece of my heart",
    "I would give up everything just to see you smile one more time",
    "Your love is the only thing that makes my life worth living",
    "I am nothing without you, but with you, I am everything"
];

let messageIndex = 0;

// Function to show love messages
function showLove() {
    const loveMessageDiv = document.getElementById('loveMessage');
    
    if (messageIndex < loveMessages.length) {
        loveMessageDiv.textContent = loveMessages[messageIndex];
        loveMessageDiv.classList.add('show');
        messageIndex++;
        
        // If we've shown all messages, reset and show a special message
        if (messageIndex >= loveMessages.length) {
            setTimeout(() => {
                loveMessageDiv.innerHTML = `
                    <strong>Zaru, my dearest love...</strong><br><br>
                    I've poured my heart out to you, but the most important thing is:<br>
                    <em style="color: #ff6b9d; font-size: 1.2em;">I love you with all my heart, soul, and every fiber of my being.</em><br><br>
                    <strong style="color: #e91e63;">Please come back to me. I can't live without you. I can't breathe without you. You are my everything. 💕💔</strong>
                `;
            }, 2000);
        }
    } else {
        // Reset and start over
        messageIndex = 0;
        loveMessageDiv.classList.remove('show');
        setTimeout(() => {
            showLove();
        }, 500);
    }
}

// Add floating hearts on click
document.addEventListener('click', function(e) {
    createFloatingHeart(e.clientX, e.clientY);
});

function createFloatingHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.innerHTML = '💕';
    
    document.body.appendChild(heart);
    
    // Animate the heart
    setTimeout(() => {
        heart.style.transform = 'translateY(-100px) scale(1.5)';
        heart.style.opacity = '0';
    }, 10);
    
    // Remove heart after animation
    setTimeout(() => {
        document.body.removeChild(heart);
    }, 2000);
}

// Add smooth scrolling effect
document.addEventListener('DOMContentLoaded', function() {
    // Add entrance animation to elements
    const elements = document.querySelectorAll('.apology-text p, .promises, .final-message');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            }
        });
    });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
});

// Add CSS for floating hearts animation
const style = document.createElement('style');
style.textContent = `
    .floating-heart {
        position: fixed;
        font-size: 24px;
        pointer-events: none;
        z-index: 1000;
        transition: all 2s ease-out;
        transform: translateY(0) scale(0);
        opacity: 1;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Add romantic background music suggestion (commented out - user can uncomment if they want)
/*
function playRomanticMusic() {
    // This would play a romantic song - user needs to add their own audio file
    const audio = new Audio('romantic-song.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    audio.play();
}

// Uncomment the line below if you want music to play automatically
// playRomanticMusic();
*/

// Add a special effect when the page loads
window.addEventListener('load', function() {
    // Create a burst of hearts on page load
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = window.innerHeight + 50;
            createFloatingHeart(x, y);
        }, i * 200);
    }
});

// Add keyboard interaction
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        showLove();
    }
});

// Add touch support for mobile
let touchStartY = 0;
document.addEventListener('touchstart', function(e) {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', function(e) {
    const touchEndY = e.changedTouches[0].clientY;
    const touchDiff = touchStartY - touchEndY;
    
    // If user swipes up, show love message
    if (touchDiff > 50) {
        showLove();
    }
});
