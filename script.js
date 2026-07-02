// YUNGAS MTB SALTA 2 - Main JavaScript

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initCursorFollower();
    initParticleSystem();
    initScrollAnimations();
    initTestimonialSlider();
    initNewsletterForm();
    initContactForm();
    initMobileNav();
    initMap();
});

// Cursor Follower Effect
function initCursorFollower() {
    const follower = document.querySelector('.cursor-follower');
    const followerBlur = document.querySelector('.cursor-follower-blur');
    
    if (!follower || !followerBlur) return;
    
    document.addEventListener('mousemove', (e) => {
        follower.style.left = e.pageX + 'px';
        follower.style.top = e.pageY + 'px';
        followerBlur.style.left = e.pageX + 'px';
        followerBlur.style.top = e.pageY + 'px';
    });
    
    // Hide followers when leaving window
    document.addEventListener('mouseleave', () => {
        follower.style.opacity = '0';
        followerBlur.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        follower.style.opacity = '1';
        followerBlur.style.opacity = '1';
    });
}

// Particle System for Hero Section
function initParticleSystem() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Particle class
    class Particle {
        constructor(x, y, radius, color, velocity) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.velocity = velocity;
            this.alpha = 1; // Changed from 0 to 1 for visibility
            this.originalRadius = radius;
            this.trail = [];
            this.maxTrailLength = 3; // Reduced for performance
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            
            // Draw trail
            for (let i = 0; i < this.trail.length; i++) {
                const trailPoint = this.trail[i];
                ctx.beginPath();
                ctx.arc(trailPoint.x, trailPoint.y, this.radius * ((i + 1) / this.trail.length), 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            
            // Draw main particle
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            ctx.restore();
        }
        
        update() {
            // Add current position to trail
            this.trail.push({ x: this.x, y: this.y });
            if (this.trail.length > this.maxTrailLength) {
                this.trail.shift();
            }
            
            // Move particle
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            
            // Bounce off edges
            if (this.x + this.radius > canvas.width) {
                this.x = canvas.width - this.radius;
                this.velocity.x = -this.velocity.x;
            } else if (this.x - this.radius < 0) {
                this.x = this.radius;
                this.velocity.x = -this.velocity.x;
            }
            
            if (this.y + this.radius > canvas.height) {
                this.y = canvas.height - this.radius;
                this.velocity.y = -this.velocity.y;
            } else if (this.y - this.radius < 0) {
                this.y = this.radius;
                this.velocity.y = -this.velocity.y;
            }
            
            // Fade out if particle gets too small (optional)
            if (this.radius < 0.5) {
                this.alpha -= 0.01;
                if (this.alpha <= 0) {
                    this.reset();
                }
            }
            
            this.draw();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 3 + 1;
            this.color = CONFIG.colors.accent.replace('0.3', '0.7'); // Make more visible
            this.velocity = {
                x: (Math.random() - 0.5) * 1.5, // Increased speed
                y: (Math.random() - 0.5) * 1.5
            };
            this.alpha = 1;
            this.trail = [];
        }
    }
    
    // Create particles
    let particles = [];
    const particleCount = 50; // Increased for better effect
    
    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            const radius = Math.random() * 4 + 2; // Slightly larger
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const color = CONFIG.colors.accent.replace('0.3', '0.6'); // More visible
            const velocity = {
                x: (Math.random() - 0.5) * 1,
                y: (Math.random() - 0.5) * 1
            };
            particles.push(new Particle(x, y, radius, color, velocity));
        }
    }
    
    initParticles();
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
        }
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });
}

// Scroll Animations
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => {
        observer.observe(el);
    });
}

// Testimonial Slider
function initTestimonialSlider() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slider = document.querySelector('.testimonials-slider');
    const dots = document.querySelectorAll('.dot');
    
    if (!prevBtn || !nextBtn || !slider || !dots.length) return;
    
    let currentIndex = 0;
    const cards = document.querySelectorAll('.testimonial-card');
    const totalCards = cards.length;
    
    function updateSlider() {
        // Update active card
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentIndex) {
                card.classList.add('active');
            }
        });
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentIndex) {
                dot.classList.add('active');
            }
        });
        
        // Scroll to active card
        if (slider) {
            slider.scrollTo({
                left: cards[currentIndex].offsetLeft,
                behavior: 'smooth'
            });
        }
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateSlider();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalCards;
        updateSlider();
    });
    
    // Auto advance every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalCards;
        updateSlider();
    }, 5000);
    
    // Initialize
    updateSlider();
}

// Newsletter Form
function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = document.getElementById('emailInput');
        const email = emailInput.value.trim();
        
        if (email) {
            // Here you would typically send the email to your backend
            // For now, we'll just show a success message
            alert('¡Gracias por suscribirte! Pronto recibirás noticias de YUNGAS MTB SALTA.');
            emailInput.value = '';
            emailInput.focus();
        }
    });
}

// Contact Form with WhatsApp Integration
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const sendero = document.getElementById('sendero').value;
        const mensaje = document.getElementById('mensaje').value.trim();
        
        if (!nombre || !email) {
            alert('Por favor, completa los campos obligatorios (nombre y email).');
            return;
        }
        
        // Build WhatsApp message
        const texto = `🚵‍♂️ *Nuevo mensaje desde YUNGAS MTB SALTA*\n\n` +
            `*Nombre:* ${nombre}\n` +
            `*Email:* ${email}\n` +
            `*Teléfono:* ${telefono || 'No especificado'}\n` +
            `*Sendero de interés:* ${sendero || 'No especificado'}\n\n` +
            `*Mensaje:*\n${mensaje}`;
        
        // Encode for URL
        const mensajeEncoded = encodeURIComponent(texto);
        
        // Get WhatsApp number from config
        const whatsappNumber = CONFIG.whatsappNumber || '5493871234567';
        
        // Build WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${mensajeEncoded}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
        
        // Optional: Reset form
        form.reset();
    });
}

// Mobile Navigation
function initMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Initialize Map with Leaflet
function initMap() {
    // Check if Leaflet is loaded
    if (typeof L === 'undefined') {
        console.error('Leaflet library not loaded!');
        return;
    }
    
    // Check if map container exists
    const mapContainer = document.getElementById('trailsMap');
    if (!mapContainer) return;
    
    // Salta coordinates
    const saltaCoords = [-24.7859, -65.4038];
    
    // Create map centered on Salta
    const map = L.map('trailsMap').setView(saltaCoords, 12);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Trail data with coordinates
    const trails = [
        {
            name: 'Cerro San Bernardo',
            coords: [-24.7689, -65.3928],
            distance: 12,
            elevation: 450,
            duration: '2-3 hs',
            difficulty: 'intermediate',
            description: 'El clásico de Salta. Subida desafiante con vistas panorámicas increíbles.',
            color: '#6B8E23' // Olive Drab
        },
        {
            name: 'Valle de Lerma',
            coords: [-24.8333, -65.5000],
            distance: 25,
            elevation: 600,
            duration: '4-5 hs',
            difficulty: 'advanced',
            description: 'Recorrido extenso por el valle con cambios de ritmo constantes.',
            color: '#DAA520' // Goldenrod
        },
        {
            name: 'Quebrada de San Lorenzo',
            coords: [-24.7167, -65.4500],
            distance: 18,
            elevation: 800,
            duration: '3-4 hs',
            difficulty: 'advanced',
            description: 'Sendero en la selva de yunga con vegetación densa y humedad.',
            color: '#DAA520' // Goldenrod
        },
        {
            name: 'Campo de Marte',
            coords: [-24.7900, -65.4100],
            distance: 8,
            elevation: 200,
            duration: '1-2 hs',
            difficulty: 'beginner',
            description: 'Perfecto para comenzar. Sendero suave ideal para familias.',
            color: '#32CD32' // Lime Green
        },
        {
            name: 'Cerro Castañal',
            coords: [-24.7700, -65.4200],
            distance: 15,
            elevation: 550,
            duration: '2-3 hs',
            difficulty: 'intermediate',
            description: 'Sendero con mix de subida constante y secciones planas.',
            color: '#6B8E23' // Olive Drab
        },
        {
            name: 'Quebrada del Chachapoyas',
            coords: [-24.6500, -65.3800],
            distance: 30,
            elevation: 900,
            duration: '5-6 hs',
            difficulty: 'expert',
            description: 'La ruta más exigente. Territorio remoto con navegación compleja.',
            color: '#FF4500' // Orange Red
        }
    ];
    
    // Custom icon based on difficulty
    function createIcon(difficulty) {
        const colors = {
            beginner: '#32CD32',   // Lime Green
            intermediate: '#6B8E23', // Olive Drab
            advanced: '#DAA520',   // Goldenrod
            expert: '#FF4500'      // Orange Red
        };
        
        return L.divIcon({
            className: 'custom-marker',
            html: `<div style="
                background-color: ${colors[difficulty]};
                width: 28px;
                height: 28px;
                border-radius: 50%;
                border: 3px solid white;
                box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
            "><i class="fas fa-bicycle" style="color: white; font-size: 12px;"></i></div>`,
            iconSize: [28, 28],
            iconAnchor: [14, 28]
        });
    }
    
    // Add markers for each trail
    trails.forEach(trail => {
        const marker = L.marker(trail.coords, { icon: createIcon(trail.difficulty) }).addTo(map);
        
        // Create popup content
        
        // Create popup content
        const popupContent = `
            <div style="min-width: 280px; font-family: 'Open Sans', sans-serif;">
                <h3 style="margin: 0 0 10px 0; color: #1a202c; font-family: 'Bebas Neue', sans-serif; text-transform: uppercase; letter-spacing: 1px;">${trail.name}</h3>
                <div style="display: flex; gap: 10px; margin-bottom: 10px; flex-wrap: wrap;">
                    <span style="background: #f7fafc; padding: 3px 8px; border-radius: 4px; font-size: 12px;">
                        <i class="fas fa-bicycle" style="color: #6B8E23;"></i> ${trail.distance} km
                    </span>
                    <span style="background: #f7fafc; padding: 3px 8px; border-radius: 4px; font-size: 12px;">
                        <i class="fas fa-mountain" style="color: #8B4513;"></i> ${trail.elevation}m
                    </span>
                    <span style="background: #f7fafc; padding: 3px 8px; border-radius: 4px; font-size: 12px;">
                        <i class="fas fa-stopwatch" style="color: #DAA520;"></i> ${trail.duration}
                    </span>
                </div>
                <p style="margin: 0 0 10px 0; color: #5D4037; font-size: 13px; line-height: 1.5;">${trail.description}</p>
                <div style="margin-top: 10px;">
                    <span style="
                        display: inline-block;
                        padding: 4px 12px;
                        border-radius: 20px;
                        font-size: 11px;
                        font-weight: 600;
                        color: white;
                        background: ${trail.color === '#32CD32' ? '#32CD32' : trail.color === '#6B8E23' ? '#6B8E23' : trail.color === '#DAA520' ? '#DAA520' : '#FF4500'};
                        text-transform: uppercase;
                    ">${trail.difficulty === 'beginner' ? 'Principiante' : trail.difficulty === 'intermediate' ? 'Intermedio' : trail.difficulty === 'advanced' ? 'Avanzado' : 'Experto'}</span>
                </div>
            </div>
        `;
        
        marker.bindPopup(popupContent, {
            maxWidth: 300,
            className: 'trail-popup'
        });
    });
    
    // Add legend
    const legend = L.control({ position: 'bottomright' });
    
    legend.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'map-legend');
        div.innerHTML = `
            <div style="
                background: white;
                padding: 15px;
                border-radius: 10px;
                box-shadow: 0 2px 15px rgba(0,0,0,0.2);
                font-family: 'Open Sans', sans-serif;
            ">
                <h4 style="margin: 0 0 10px 0; font-family: 'Bebas Neue', sans-serif; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #2C1810;">Dificultad</h4>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div style="width: 16px; height: 16px; background: #32CD32; border-radius: 50%;"></div>
                        <span style="font-size: 12px; font-family: 'Oswald', sans-serif; font-weight: 600; text-transform: uppercase;">Principiante</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div style="width: 16px; height: 16px; background: #6B8E23; border-radius: 50%;"></div>
                        <span style="font-size: 12px; font-family: 'Oswald', sans-serif; font-weight: 600; text-transform: uppercase;">Intermedio</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div style="width: 16px; height: 16px; background: #DAA520; border-radius: 50%;"></div>
                        <span style="font-size: 12px; font-family: 'Oswald', sans-serif; font-weight: 600; text-transform: uppercase;">Avanzado</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div style="width: 16px; height: 16px; background: #FF4500; border-radius: 50%;"></div>
                        <span style="font-size: 12px; font-family: 'Oswald', sans-serif; font-weight: 600; text-transform: uppercase;">Experto</span>
                    </div>
                </div>
            </div>
        `;
        return div;
    };
    
    legend.addTo(map);
    
    console.log('Map initialized successfully! 🗺️');
}

console.log('YUNGAS MTB SALTA 2 website loaded successfully! 🚵‍♂️');