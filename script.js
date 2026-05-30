document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Progress Indicator
    window.onscroll = function() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("scroll-progress").style.width = scrolled + "%";
    };

    // 2. Cinematic Hero Loop
    const hero = document.getElementById('hero');
    let step = 0;
    
    function updateHeroGlow() {
        hero.classList.remove('glow-a', 'glow-kt', 'glow-if');
        
        if (step === 0) hero.classList.add('glow-a');
        else if (step === 1) hero.classList.add('glow-kt');
        else if (step === 2) hero.classList.add('glow-if');
        
        step = (step + 1) % 3;
    }

    setInterval(updateHeroGlow, 3000);
    updateHeroGlow(); // Initial call

    // 3. Scroll Reveal Logic (Intersection Observer)
    const observerOptions = {
        threshold: 0.2
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 4. Parallax Background Movement
    window.addEventListener('mousemove', (e) => {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        
        const layer1 = document.querySelector('.layer-1');
        const layer2 = document.querySelector('.layer-2');
        
        if(layer1) layer1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
        if(layer2) layer2.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
    });
});