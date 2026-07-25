// --- MEMORY DATA ---
const memories = [
    {
        title: "Kindness",
        text: "<p>Before I met you, I thought kindness simply meant being nice.</p><p>Then I met you.</p><p>You showed me that kindness is patience when someone is struggling.</p><p>It is understanding without judgement.<br>It is forgiving without keeping score.<br>It is caring about another person's happiness as much as your own.</p><p>You taught me that kindness isn't weakness.<br>It is one of the greatest strengths a person can have.</p><p>Because of you, I became a kinder person.</p><p>Thank you for showing me what kindness truly looks like.</p>"
    },
    {
        title: "Laughter",
        text: "<p>I don't think there was a single day where we didn't laugh.</p><p>Sometimes it was because of something important.<br>Sometimes because of something completely ridiculous.</p><p>Somehow...<br>Every ordinary moment became unforgettable simply because you were in it.</p><p>Your laugh had a way of making the whole world feel lighter.</p><p>It reminded me that happiness doesn't always arrive through big moments.<br>Sometimes it arrives through the sound of someone you love laughing beside you.</p>"
    },
    {
        title: "Your Heart",
        text: "<p>One thing I always admired about you was how much you cared.</p><p>Whether it was helping me in Genshin Impact...<br>Checking if I had eaten...<br>Making sure I wasn't ending the day feeling lonely...<br>Or simply asking,<br>\"Are you okay?\"</p><p>You always tried.</p><p>Your determination wasn't loud.<br>It lived quietly inside the way you loved people.</p><p>That is something I will always admire about you.</p>"
    },
    {
        title: "Dreams We Shared",
        text: "<p>Somewhere along the journey...<br>Your dreams quietly became my dreams.</p><p>A little family.<br>A son.<br>A daughter.<br>A Skyline parked outside.<br>A peaceful farm.</p><p>Weekend shopping together.<br>Eating the meals you wanted to cook.<br>Growing older while creating countless ordinary little memories.</p><p>Dreams become beautiful because we imagine them together.</p><p>Thank you for sharing yours with me.</p>"
    },
    {
        title: "Curiosity",
        text: "<p>One of my favourite things about you was your curiosity.</p><p>Every time you wanted to understand something...<br>You came to me.<br>You asked questions.<br>You listened.</p><p>Somehow...<br>You always made me feel like I knew everything...<br>Even though I definitely didn't.</p><p>Thank you for making me feel trusted.<br>Those little conversations are memories I'll always smile about.</p>"
    },
    {
        title: "September 2022",
        text: "<p>I'll never forget September.<br>I proposed to you.</p><p>Two days later...<br>You looked at me and said,<br>\"The things you said... anyone else could say those. That doesn't mean anyone can have me.\"</p><p>I was completely speechless.</p><p>Then...<br>Just a little while later...<br>You were watching The Notebook.</p><p>You looked at me...<br>and quietly said,<br>\"Never die on me.\"</p><p>Looking back...<br>I think that moment captured us perfectly.</p><p>Honest.<br>Emotional.<br>Imperfect.<br>Yet beautifully real.</p>"
    },
    {
        title: "Finding Our Way",
        text: "<p>We lost each other more than once.</p><p>There were days when it felt like we had reached the end.<br>Yet somehow...<br>Life always found a way to bring us back into each other's world.</p><p>Looking back now, I don't remember those moments because they were painful.<br>I remember them because every time we found our way back, it reminded me how much we valued what we had.</p><p>For a long time...<br>Home wasn't simply a place.<br>It was wherever we were together.</p><p>Thank you for every moment we found our way back to one another.</p>"
    },
    {
        title: "What You Taught Me",
        text: "<p>Before you,<br>I thought strength meant never showing emotion.</p><p>You taught me something far more valuable.</p><p>You taught me patience.<br>You taught me kindness.<br>You taught me that giving without expecting anything in return is one of the most beautiful things a person can do.</p><p>Those lessons have become part of who I am.<br>They will stay with me for the rest of my life.</p><p>Thank you for changing me in ways you may never fully realize.</p>"
    },
    {
        title: "My Wish For You",
        text: "<p>More than anything...<br>I hope life is gentle with you.</p><p>I hope your smile never loses its warmth.<br>I hope your laughter fills every room you walk into.<br>I hope every dream you carry slowly becomes reality.<br>I hope you always believe in yourself, even on difficult days.</p><p>And if I'm allowed one selfish wish...<br>It's that somewhere, somehow...<br>A part of me will always smile whenever I think of you smiling.</p>"
    },
    {
        title: "Every Morning",
        text: "<p>Some of my favourite memories weren't grand adventures.<br>They were ordinary mornings.</p><p>Waking up to your message.<br>Hearing your voice.<br>Seeing your face.</p><p>Somehow...<br>Every day felt a little easier simply because you were there.</p><p>Those mornings reminded me that happiness isn't always something extraordinary.</p><p>Sometimes...<br>Happiness is simply having someone to say,<br>\"Good morning.\"</p>"
    },
    {
        title: "Thank You",
        text: "<p>Life introduces us to many people.<br>Only a few quietly change who we become.</p><p>You were one of those people.</p><p>Thank you...<br>For every conversation.<br>Every laugh.<br>Every lesson.<br>Every adventure.<br>Every difficult day we survived together.<br>Every ordinary day that somehow became extraordinary.</p><p>No matter where life takes us,<br>I'll always be grateful that our paths crossed.<br>You will forever be one of the brightest chapters of my life.</p>"
    },
    {
        title: "Happy Birthday",
        text: "<p>Happy Birthday, Charli. ❤️</p><p>Today isn't about the past.<br>It's about celebrating you.</p><p>The person who made people laugh without trying.<br>The person whose kindness made others feel safe.<br>The person whose curiosity made every conversation interesting.<br>The person who could make ordinary moments feel unforgettable.</p><p>I genuinely hope this year brings you everything you've been working toward.</p><p>I hope your studies go well.<br>I hope you achieve every goal you set for yourself.<br>I hope life rewards your determination with opportunities that make you proud.</p><p>Keep being kind.<br>Keep smiling.<br>Keep believing in yourself, even on the days when it's difficult.</p><p>The world is a better place because someone like you exists in it.</p><p>Thank you for every memory.</p><p>Happy Birthday.<br>I hope today is as wonderful as you are.</p><p>✨</p>"
    }
];

// --- SYSTEM STATE ---
let currentMemoryIndex = 0;
let isConstellationComplete = false;
let interactable = false; // prevents clicking while sequences play

// --- DOM ELEMENTS ---
const titleMain = document.getElementById('title-main');
const titleSub = document.getElementById('title-sub');
const btnLookup = document.getElementById('btn-lookup');
const openingScreen = document.getElementById('opening-screen');
const canvas = document.getElementById('sky');
const ctx = canvas.getContext('2d');
const moon = document.getElementById('moon');
const cinematicText = document.getElementById('cinematic-text');
const textDisplay = document.getElementById('text-display');
const memoryOverlay = document.getElementById('memory-overlay');
const memoryTitle = document.getElementById('memory-title');
const memoryBody = document.getElementById('memory-body');
const btnContinue = document.getElementById('btn-continue');
const btnFinish = document.getElementById('btn-finish');
const credits = document.getElementById('credits');
const btnReplay = document.getElementById('btn-replay');

// Easter Egg
const secretOverlay = document.getElementById('secret-overlay');
const btnSecretClose = document.getElementById('btn-secret-close');
let moonClicks = 0;
let moonClickTimer = null;

// --- CANVAS ENGINE ---
let width, height;
let backgroundStars = [];
let fireflies = [];
let shootingStars = [];
let memoryStars = []; // The 12 interactive stars

// Coordinates for the 12 stars (Percentages of screen width/height to stay responsive)
const starPositions = [
    { x: 0.15, y: 0.30 }, { x: 0.35, y: 0.20 }, { x: 0.55, y: 0.25 },
    { x: 0.75, y: 0.15 }, { x: 0.85, y: 0.40 }, { x: 0.65, y: 0.50 },
    { x: 0.45, y: 0.60 }, { x: 0.25, y: 0.55 }, { x: 0.15, y: 0.75 },
    { x: 0.35, y: 0.85 }, { x: 0.60, y: 0.80 }, { x: 0.80, y: 0.70 }
];

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    updateMemoryStarPositions();
}
window.addEventListener('resize', resize);

class BackgroundStar {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5;
        this.baseAlpha = Math.random() * 0.5 + 0.1;
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.angle = Math.random() * Math.PI * 2;
    }
    draw() {
        this.angle += this.twinkleSpeed;
        const alpha = this.baseAlpha + Math.sin(this.angle) * 0.2;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, alpha)})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

class Firefly {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height + height * 0.2; 
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3 - 0.1; // Slight upward drift
        this.life = Math.random() * Math.PI * 2;
    }
    draw() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life += 0.01;
        
        // Wrap around
        if (this.y < -10) this.y = height + 10;
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;

        const alpha = (Math.sin(this.life) + 1) / 2 * 0.6; // Fade in/out
        ctx.fillStyle = `rgba(249, 229, 161, ${alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(249, 229, 161, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
    }
}

class ShootingStar {
    constructor() {
        this.reset();
        this.active = false;
        this.timer = Math.random() * 800 + 400; // 15-25 seconds approx at 60fps
    }
    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height * 0.3;
        this.length = Math.random() * 80 + 40;
        this.speed = Math.random() * 4 + 4;
        this.angle = (Math.random() * Math.PI/4) + Math.PI/4; // Down-right
        this.opacity = 1;
    }
    draw() {
        if (!this.active) {
            this.timer--;
            if (this.timer <= 0) {
                this.active = true;
                this.reset();
            }
            return;
        }

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.opacity -= 0.015;

        if (this.opacity <= 0) {
            this.active = false;
            this.timer = Math.random() * 800 + 400;
            return;
        }

        const gradient = ctx.createLinearGradient(this.x, this.y, this.x - Math.cos(this.angle)*this.length, this.y - Math.sin(this.angle)*this.length);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - Math.cos(this.angle)*this.length, this.y - Math.sin(this.angle)*this.length);
        ctx.stroke();
    }
}

class MemoryStar {
    constructor(index, percentX, percentY) {
        this.index = index;
        this.px = percentX;
        this.py = percentY;
        this.size = 2;
        this.state = 'hidden'; // hidden -> active (pulsing) -> completed (solid)
        this.pulseAngle = 0;
        this.particles = [];
        this.lineProgress = 0; // For drawing lines to the next star
    }
    
    updatePos() {
        this.x = this.px * width;
        this.y = this.py * height;
    }

    draw() {
        if (this.state === 'hidden') return;

        let currentSize = this.size;
        let alpha = 0.8;
        let glow = 5;

        if (this.state === 'active') {
            this.pulseAngle += 0.05;
            currentSize = this.size + Math.sin(this.pulseAngle) * 1.5;
            alpha = 1;
            glow = 15 + Math.sin(this.pulseAngle) * 5;
        } else if (this.state === 'completed') {
            currentSize = this.size + 1;
            glow = 10;
        }

        // Draw Line to previous star if constellation is drawing
        if (this.index > 0 && this.state === 'completed') {
            const prev = memoryStars[this.index - 1];
            if (prev.state === 'completed') {
                ctx.strokeStyle = `rgba(249, 229, 161, ${0.4 * prev.lineProgress})`;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(prev.x, prev.y);
                ctx.lineTo(
                    prev.x + (this.x - prev.x) * prev.lineProgress,
                    prev.y + (this.y - prev.y) * prev.lineProgress
                );
                ctx.stroke();
                
                // Animate line drawing
                if (prev.lineProgress < 1 && isConstellationComplete) {
                    prev.lineProgress += 0.005; // 8-10 seconds for whole chain
                } else if (!isConstellationComplete && prev.lineProgress < 1) {
                    prev.lineProgress = 1; // Instant if already past this memory
                }
            }
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.shadowBlur = glow;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Draw Explosion Particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            let p = this.particles[i];
            p.x += p.vx; p.y += p.vy;
            p.life -= 0.02;
            if (p.life <= 0) {
                this.particles.splice(i, 1);
            } else {
                ctx.fillStyle = `rgba(255, 255, 255, ${p.life})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
                ctx.fill();
            }
        }
    }

    explode() {
        for(let i=0; i<20; i++) {
            this.particles.push({
                x: this.x, y: this.y,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                life: 1,
                size: Math.random() * 2
            });
        }
    }
}

// Initialize Engine
function initCanvas() {
    resize();
    for (let i = 0; i < 150; i++) backgroundStars.push(new BackgroundStar());
    for (let i = 0; i < 40; i++) fireflies.push(new Firefly());
    shootingStars.push(new ShootingStar());
    
    starPositions.forEach((pos, i) => {
        memoryStars.push(new MemoryStar(i, pos.x, pos.y));
    });
    updateMemoryStarPositions();
    animate();
}

function updateMemoryStarPositions() {
    memoryStars.forEach(s => s.updatePos());
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    
    backgroundStars.forEach(s => s.draw());
    shootingStars.forEach(s => s.draw());
    
    // Draw constellation lines and interactive stars
    memoryStars.forEach(s => s.draw());
    
    fireflies.forEach(f => f.draw());
    
    requestAnimationFrame(animate);
}

// --- LOGIC & FLOW ---

function startJourney() {
    // 1. Initial Black screen setup
    setTimeout(() => {
        // Fade in stars and moon
        moon.style.opacity = '1';
        setTimeout(() => {
            titleMain.classList.add('fade-in');
            setTimeout(() => {
                titleSub.classList.add('fade-in');
                setTimeout(() => {
                    btnLookup.classList.add('fade-in');
                }, 2000);
            }, 1500);
        }, 1000);
    }, 1000);
}

btnLookup.addEventListener('click', () => {
    // Transition to sky
    openingScreen.style.opacity = '0';
    moon.classList.add('glowing');
    
    setTimeout(() => {
        openingScreen.classList.add('hidden');
        // Activate first star
        memoryStars[0].state = 'active';
        interactable = true;
    }, 2500); // Cinematic transition
});

// Canvas Click handler for stars
canvas.addEventListener('click', (e) => {
    if (!interactable) return;
    
    const activeStar = memoryStars[currentMemoryIndex];
    if (!activeStar || activeStar.state !== 'active') return;

    // Check hit radius (generous for mobile)
    const dx = e.clientX - activeStar.x;
    const dy = e.clientY - activeStar.y;
    const dist = Math.sqrt(dx*dx + dy*dy);

    if (dist < 40) {
        interactable = false;
        activeStar.explode();
        
        setTimeout(() => {
            openMemoryCard(currentMemoryIndex);
        }, 800);
    }
});

function openMemoryCard(index) {
    canvas.classList.add('blurred');
    const mem = memories[index];
    
    memoryTitle.innerText = `⭐ ${mem.title}`;
    memoryBody.innerHTML = mem.text;
    
    if (index === 11) { // Final Memory
        btnContinue.classList.add('hidden');
        btnFinish.classList.remove('hidden');
    } else {
        btnContinue.classList.remove('hidden');
        btnFinish.classList.add('hidden');
    }

    memoryOverlay.classList.remove('hidden');
}

btnContinue.addEventListener('click', () => {
    memoryOverlay.classList.add('hidden');
    canvas.classList.remove('blurred');
    
    memoryStars[currentMemoryIndex].state = 'completed';
    
    // Moon gets brighter logic handled via CSS shadow iteration or simply keeping class
    
    setTimeout(() => {
        if (currentMemoryIndex === 5) { // Midway point (After Memory 6)
            playMidwaySequence();
        } else if (currentMemoryIndex === 10) { // Before Final Memory
            playConstellationSequence();
        } else {
            currentMemoryIndex++;
            memoryStars[currentMemoryIndex].state = 'active';
            interactable = true;
        }
    }, 1000);
});

function playMidwaySequence() {
    textDisplay.innerText = "The sky remembers.";
    cinematicText.classList.remove('hidden');
    
    setTimeout(() => {
        cinematicText.classList.add('hidden');
        setTimeout(() => {
            currentMemoryIndex++;
            memoryStars[currentMemoryIndex].state = 'active';
            interactable = true;
        }, 3000); // Breathe for 3 seconds
    }, 3000);
}

function playConstellationSequence() {
    isConstellationComplete = true; // Triggers line drawing in animation loop
    
    // Wait for lines to draw (8-10s)
    setTimeout(() => {
        textDisplay.innerText = "Some people become part of the sky we carry with us.";
        cinematicText.classList.remove('hidden');
        
        setTimeout(() => {
            cinematicText.classList.add('hidden');
            setTimeout(() => {
                currentMemoryIndex++;
                memoryStars[currentMemoryIndex].state = 'active';
                interactable = true;
            }, 2000);
        }, 5000);
    }, 9000);
}

btnFinish.addEventListener('click', () => {
    // Dissolve card to stars effect
    memoryOverlay.style.opacity = '0';
    setTimeout(() => {
        memoryOverlay.classList.add('hidden');
        canvas.classList.remove('blurred');
        memoryStars[currentMemoryIndex].stat
