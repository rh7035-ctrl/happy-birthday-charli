window.addEventListener('load', () => {
    
    const memories = [
        { title: "Kindness", text: "<p>Before I met you, I thought kindness simply meant being nice.</p><p>Then I met you.</p><p>You showed me that kindness is patience when someone is struggling.</p><p>It is understanding without judgement.<br>It is forgiving without keeping score.<br>It is caring about another person's happiness as much as your own.</p><p>You taught me that kindness isn't weakness.<br>It is one of the greatest strengths a person can have.</p><p>Because of you, I became a kinder person.</p><p>Thank you for showing me what kindness truly looks like.</p>" },
        { title: "Laughter", text: "<p>I don't think there was a single day where we didn't laugh.</p><p>Sometimes it was because of something important.<br>Sometimes because of something completely ridiculous.</p><p>Somehow...<br>Every ordinary moment became unforgettable simply because you were in it.</p><p>Your laugh had a way of making the whole world feel lighter.</p><p>It reminded me that happiness doesn't always arrive through big moments.<br>Sometimes it arrives through the sound of someone you love laughing beside you.</p>" },
        { title: "Your Heart", text: "<p>One thing I always admired about you was how much you cared.</p><p>Whether it was helping me in Genshin Impact...<br>Checking if I had eaten...<br>Making sure I wasn't ending the day feeling lonely...<br>Or simply asking,<br>\"Are you okay?\"</p><p>You always tried.</p><p>Your determination wasn't loud.<br>It lived quietly inside the way you loved people.</p><p>That is something I will always admire about you.</p>" },
        { title: "Dreams We Shared", text: "<p>Somewhere along the journey...<br>Your dreams quietly became my dreams.</p><p>A little family.<br>A son.<br>A daughter.<br>A Skyline parked outside.<br>A peaceful farm.</p><p>Weekend shopping together.<br>Eating the meals you wanted to cook.<br>Growing older while creating countless ordinary little memories.</p><p>Dreams become beautiful because we imagine them together.</p><p>Thank you for sharing yours with me.</p>" },
        { title: "Curiosity", text: "<p>One of my favourite things about you was your curiosity.</p><p>Every time you wanted to understand something...<br>You came to me.<br>You asked questions.<br>You listened.</p><p>Somehow...<br>You always made me feel like I knew everything...<br>Even though I definitely didn't.</p><p>Thank you for making me feel trusted.<br>Those little conversations are memories I'll always smile about.</p>" },
        { title: "September 2022", text: "<p>I'll never forget September.<br>I proposed to you.</p><p>Two days later...<br>You looked at me and said,<br>\"The things you said... anyone else could say those. That doesn't mean anyone can have me.\"</p><p>I was completely speechless.</p><p>Then...<br>Just a little while later...<br>You were watching The Notebook.</p><p>You looked at me...<br>and quietly said,<br>\"Never die on me.\"</p><p>Looking back...<br>I think that moment captured us perfectly.</p><p>Honest.<br>Emotional.<br>Imperfect.<br>Yet beautifully real.</p>" },
        { title: "Finding Our Way", text: "<p>We lost each other more than once.</p><p>There were days when it felt like we had reached the end.<br>Yet somehow...<br>Life always found a way to bring us back into each other's world.</p><p>Looking back now, I don't remember those moments because they were painful.<br>I remember them because every time we found our way back, it reminded me how much we valued what we had.</p><p>For a long time...<br>Home wasn't simply a place.<br>It was wherever we were together.</p><p>Thank you for every moment we found our way back to one another.</p>" },
        { title: "What You Taught Me", text: "<p>Before you,<br>I thought strength meant never showing emotion.</p><p>You taught me something far more valuable.</p><p>You taught me patience.<br>You taught me kindness.<br>You taught me that giving without expecting anything in return is one of the most beautiful things a person can do.</p><p>Those lessons have become part of who I am.<br>They will stay with me for the rest of my life.</p><p>Thank you for changing me in ways you may never fully realize.</p>" },
        { title: "My Wish For You", text: "<p>More than anything...<br>I hope life is gentle with you.</p><p>I hope your smile never loses its warmth.<br>I hope your laughter fills every room you walk into.<br>I hope every dream you carry slowly becomes reality.<br>I hope you always believe in yourself, even on difficult days.</p><p>And if I'm allowed one selfish wish...<br>It's that somewhere, somehow...<br>A part of me will always smile whenever I think of you smiling.</p>" },
        { title: "Every Morning", text: "<p>Some of my favourite memories weren't grand adventures.<br>They were ordinary mornings.</p><p>Waking up to your message.<br>Hearing your voice.<br>Seeing your face.</p><p>Somehow...<br>Every day felt a little easier simply because you were there.</p><p>Those mornings reminded me that happiness isn't always something extraordinary.</p><p>Sometimes...<br>Happiness is simply having someone to say,<br>\"Good morning.\"</p>" },
        { title: "Thank You", text: "<p>Life introduces us to many people.<br>Only a few quietly change who we become.</p><p>You were one of those people.</p><p>Thank you...<br>For every conversation.<br>Every laugh.<br>Every lesson.<br>Every adventure.<br>Every difficult day we survived together.<br>Every ordinary day that somehow became extraordinary.</p><p>No matter where life takes us,<br>I'll always be grateful that our paths crossed.<br>You will forever be one of the brightest chapters of my life.</p>" },
        { title: "Happy Birthday", text: "<p>Happy Birthday, Charli. ❤️</p><p>Today isn't about the past.<br>It's about celebrating you.</p><p>The person who made people laugh without trying.<br>The person whose kindness made others feel safe.<br>The person whose curiosity made every conversation interesting.<br>The person who could make ordinary moments feel unforgettable.</p><p>I genuinely hope this year brings you everything you've been working toward.</p><p>I hope your studies go well.<br>I hope you achieve every goal you set for yourself.<br>I hope life rewards your determination with opportunities that make you proud.</p><p>Keep being kind.<br>Keep smiling.<br>Keep believing in yourself, even on the days when it's difficult.</p><p>The world is a better place because someone like you exists in it.</p><p>Thank you for every memory.</p><p>Happy Birthday.<br>I hope today is as wonderful as you are.</p><p class='center-text'>✨</p>" }
    ];

    let currentMemoryIndex = 0;
    let isConstellationComplete = false;
    let interactable = false;
    
    // Audio Setup
    const bgMusic = document.getElementById('bg-music');
    bgMusic.volume = 0.3; // Gentle, soothing volume
    const musicToggle = document.getElementById('music-toggle');
    let isMusicPlaying = false;

    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicToggle.innerText = '🔇 Muted';
            isMusicPlaying = false;
        } else {
            bgMusic.play();
            musicToggle.innerText = '🎵 Playing';
            isMusicPlaying = true;
        }
    });
    
    const canvas = document.getElementById('sky');
    const ctx = canvas.getContext('2d');
    const moon = document.getElementById('moon');
    const openingScreen = document.getElementById('opening-screen');
    const instructionScreen = document.getElementById('instruction-screen');
    const instructionText = document.getElementById('instruction-text');
    const memoryOverlay = document.getElementById('memory-overlay');
    const cinematicText = document.getElementById('cinematic-text');
    
    let width, height;
    let backgroundStars = [], fireflies = [], memoryStars = [], clouds = [];

    const starPositions = [
        {x: 0.75, y: 0.25}, {x: 0.55, y: 0.18}, {x: 0.35, y: 0.22}, {x: 0.22, y: 0.32},
        {x: 0.15, y: 0.45}, {x: 0.15, y: 0.60}, {x: 0.22, y: 0.72}, {x: 0.35, y: 0.82},
        {x: 0.55, y: 0.85}, {x: 0.72, y: 0.80}, {x: 0.85, y: 0.70}, {x: 0.80, y: 0.58}
    ];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        memoryStars.forEach(s => s.updatePos());
    }
    window.addEventListener('resize', resize);

    // Ghibli Painted Clouds
    class PaintedCloud {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * (height * 0.6);
            this.size = Math.random() * 150 + 100;
            this.speed = Math.random() * 0.1 + 0.05;
            this.opacity = Math.random() * 0.03 + 0.01;
        }
        draw() {
            this.x += this.speed;
            if (this.x > width + this.size) this.x = -this.size;
            
            let gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
            gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
        }
    }

    class bgStar {
        constructor() {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
            this.size = Math.random() * 1.5;
            this.alpha = Math.random() * 0.5 + 0.1;
        }
        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
        }
    }

    class Firefly {
        constructor() {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
            this.size = Math.random() * 2.5 + 1; // Slightly larger for Ghibli feel
            this.life = Math.random() * 10;
        }
        draw() {
            this.y -= 0.15;
            if (this.y < -10) this.y = height + 10;
            this.life += 0.02;
            ctx.fillStyle = `rgba(238, 245, 154, ${(Math.sin(this.life)+1)/2 * 0.7})`; // Warmer green/yellow
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill();
        }
    }

    class MemStar {
        constructor(i, px, py) {
            this.index = i; this.px = px; this.py = py;
            this.state = 'hidden'; 
            this.pulse = 0; 
            this.line = 0;
            this.introProgress = 0; 
            this.updatePos(); 
        }
        updatePos() { this.x = this.px * width; this.y = this.py * height; }
        
        draw() {
            if(this.state === 'hidden') return;
            
            let s = 0, a = 0, glow = 0;
            
            if (this.index > 0 && this.state === 'completed') {
                let prev = memoryStars[this.index - 1];
                if (prev.state === 'completed') {
                    ctx.strokeStyle = `rgba(253, 228, 147, ${0.5 * prev.line})`;
                    ctx.lineWidth = 2;
                    ctx.beginPath(); ctx.moveTo(prev.x, prev.y);
                    ctx.lineTo(prev.x + (this.x - prev.x)*prev.line, prev.y + (this.y - prev.y)*prev.line);
                    ctx.stroke();
                    if (isConstellationComplete && prev.line < 1) prev.line += 0.005;
                }
            }

            if(this.state === 'active') {
                if(this.introProgress < 1) this.introProgress += 0.01;
                this.pulse += 0.05;
                
                let targetSize = 6 + Math.sin(this.pulse) * 2;
                s = targetSize * this.introProgress;
                a = this.introProgress;
                glow = 20 * this.introProgress; // Stronger glow
            } else if(this.state === 'completed') {
                s = 4;
                a = 0.9;
                glow = 5;
            }
            
            ctx.fillStyle = `rgba(255, 255, 255, ${a})`;
            ctx.shadowBlur = glow;
            ctx.shadowColor = 'rgba(253, 228, 147, 0.9)'; // Golden Ghibli glow
            ctx.beginPath(); ctx.arc(this.x, this.y, s, 0, Math.PI * 2); ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    function init() {
        resize();
        for(let i=0; i<60; i++) backgroundStars.push(new bgStar());
        for(let i=0; i<15; i++) fireflies.push(new Firefly());
        for(let i=0; i<6; i++) clouds.push(new PaintedCloud());
        starPositions.forEach((p, i) => memoryStars.push(new MemStar(i, p.x, p.y)));
        
        animate();
        
        setTimeout(() => {
            moon.style.opacity = '1';
            setTimeout(() => document.getElementById('title-main').classList.add('fade-in'), 1000);
            setTimeout(() => document.getElementById('title-sub').classList.add('fade-in'), 2500);
            setTimeout(() => document.getElementById('btn-lookup').classList.add('fade-in'), 4000);
        }, 500);
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        backgroundStars.forEach(s => s.draw());
        clouds.forEach(c => c.draw());
        memoryStars.forEach(s => s.draw());
        fireflies.forEach(f => f.draw());
        requestAnimationFrame(animate);
    }

    document.getElementById('btn-lookup').addEventListener('click', (e) => {
        e.preventDefault();
        openingScreen.classList.remove('fade-in');
        openingScreen.style.opacity = '0';
        moon.classList.add('glowing');
        
        // Start Audio and show toggle button
        bgMusic.play().then(() => {
            isMusicPlaying = true;
            musicToggle.innerText = '🎵 Playing';
        }).catch(() => {
            // Browsers block autoplay sometimes, so it gracefully defaults to muted
            isMusicPlaying = false;
            musicToggle.innerText = '🔇 Muted';
        });
        musicToggle.classList.remove('hidden');

        setTimeout(() => {
            openingScreen.classList.add('hidden');
            memoryStars[0].state = 'active'; 
            
            // Show instruction to tap brightest star
            instructionScreen.classList.remove('hidden');
            instructionText.classList.add('fade-in');
            
            setTimeout(() => {
                instructionText.classList.remove('fade-in');
                setTimeout(() => instructionScreen.classList.add('hidden'), 2000);
            }, 4000);
            
            interactable = true;
        }, 2000);
    });

    function handleStarTouch(clientX, clientY) {
        if(!interactable) return;
        let active = memoryStars[currentMemoryIndex];
        if(!active || active.state !== 'active') return;
        if(active.introProgress < 0.5) return;
        
        const rect = canvas.getBoundingClientRect();
        let dx = (clientX - rect.left) - active.x;
        let dy = (clientY - rect.top) - active.y;
        let dist = Math.sqrt(dx*dx + dy*dy);
        
        if(dist < 100) {
            interactable = false;
            canvas.classList.add('blurred');
            let mem = memories[currentMemoryIndex];
            document.getElementById('memory-title').innerText = `⭐ ${mem.title}`;
            document.getElementById('memory-body').innerHTML = mem.text;
            
            if(currentMemoryIndex === 11) {
                document.getElementById('btn-continue').classList.add('hidden');
                document.getElementById('btn-finish').classList.remove('hidden');
            } else {
                document.getElementById('btn-continue').classList.remove('hidden');
                document.getElementById('btn-finish').classList.add('hidden');
            }
            memoryOverlay.classList.remove('hidden');
        }
    }

    canvas.addEventListener('click', (e) => handleStarTouch(e.clientX, e.clientY));

    document.getElementById('btn-continue').addEventListener('click', () => {
        memoryOverlay.classList.add('hidden');
        canvas.classList.remove('blurred');
        memoryStars[currentMemoryIndex].state = 'completed';
        
        setTimeout(() => {
            if(currentMemoryIndex === 5) {
                document.getElementById('text-display').innerText = "The sky remembers.";
                cinematicText.classList.remove('hidden');
                setTimeout(() => { cinematicText.classList.add('hidden'); advanceStar(); }, 3000);
            } else if(currentMemoryIndex === 10) {
                isConstellationComplete = true; 
                setTimeout(() => {
                    document.getElementById('text-display').innerText = "Some people become part of the sky we carry with us.";
                    cinematicText.classList.remove('hidden');
                    setTimeout(() => { cinematicText.classList.add('hidden'); advanceStar(); }, 4000);
                }, 8000);
            } else {
                advanceStar();
            }
        }, 1000);
    });

    function advanceStar() {
        currentMemoryIndex++;
        memoryStars[currentMemoryIndex].state = 'active'; 
        interactable = true;
    }

    document.getElementById('btn-finish').addEventListener('click', () => {
        memoryOverlay.classList.add('hidden');
        canvas.classList.remove('blurred');
        memoryStars[currentMemoryIndex].state = 'completed';
        
        setTimeout(() => {
            document.getElementById('credits').classList.remove('hidden');
            
            // THE FIX: Explicitly adding the fade-in class to the text
            setTimeout(() => {
                moon.classList.add('hint-active');
                document.getElementById('moon-hint').classList.add('fade-in');
            }, 5000);
            
        }, 3000);
    });

    document.getElementById('btn-replay').addEventListener('click', () => location.reload());

    let moonClicks = 0, moonTimer;
    moon.addEventListener('click', () => {
        moonClicks++;
        clearTimeout(moonTimer);
        moonTimer = setTimeout(() => moonClicks = 0, 1500);
        if(moonClicks >= 7) { moonClicks = 0; openSecret(); }
    });

    function openSecret() {
        canvas.classList.add('blurred');
        document.getElementById('secret-overlay').classList.remove('hidden');
        interactable = false;
    }
    
    document.getElementById('btn-secret-close').addEventListener('click', () => {
        document.getElementById('secret-overlay').classList.add('hidden');
        canvas.classList.remove('blurred');
        setTimeout(() => { interactable = true; }, 500);
    });

    init();
});
