// YUNGAS MTB SALTA 2 - Configuration File
// This file contains all configurable values for the website

const CONFIG = {
    // Contact Information
    whatsappNumber: '5493871234567', // WhatsApp number for contact form
    email: 'info@yungasmtb.com.ar',
    phone: '+54 387 123-4567',
    
    // Social Media Links (replace # with actual URLs)
    socialMedia: {
        instagram: '#',
        facebook: '#',
        youtube: '#',
        strava: '#'
    },
    
    // Website Information
    siteName: 'YUNGAS MTB SALTA',
    siteDescription: 'Descubre los mejores senderos de mountain bike en Salta, Argentina',
    siteKeywords: 'mountain bike, MTB, senderos, Salta, Argentina, ciclismo, aventura, deporte',
    siteAuthor: 'YUNGAS MTB SALTA Team',
    
    // Color Scheme (used throughout the site)
    colors: {
        primaryDark: '#2C1810',   // Dark earth
        primary: '#8B4513',       // Saddle Brown
        primaryLight: '#A0522D',  // Sienna
        secondary: '#6B8E23',     // Olive Drab
        accent: '#DAA520',        // Goldenrod
        accentDark: '#B8860B',    // Dark Goldenrod
        success: '#32CD32',       // Lime Green
        warning: '#FF8C00',       // Dark Orange
        danger: '#FF4500',        // Orange Red
        light: '#F5DEB3',         // Wheat
        lighter: '#FFF8DC',       // Cornsilk
        textDark: '#1A1A1A',
        textLight: '#FFFFFF'
    },
    
    // Trail Information (used for map and trail cards)
    trails: [
        {
            id: 1,
            name: 'Cerro San Bernardo',
            distance: 12, // km
            elevation: 450, // m
            duration: '2-3 hs',
            difficulty: 'intermediate',
            description: 'El clásico de Salta. Subida desafiante con vistas panorámicas increíbles de la ciudad y los valles.',
            features: ['Vistas 360°', 'Técnico', 'Accesible desde ciudad'],
            image: 'assets/cerro-san-bernardo.jpg', // Placeholder - would need actual images
            coordinates: [-24.7689, -65.3928]
        },
        {
            id: 2,
            name: 'Valle de Lerma',
            distance: 25,
            elevation: 600,
            duration: '4-5 hs',
            difficulty: 'advanced',
            description: 'Recorrido extenso por el valle con cambios de ritmo constantes. Terreno variado con sectores de arena, piedras y tierra compacta.',
            features: ['Larga distancia', 'Terreno variado', 'Paisajes abiertos'],
            image: 'assets/valle-de-lerma.jpg',
            coordinates: [-24.8333, -65.5000]
        },
        {
            id: 3,
            name: 'Quebrada de San Lorenzo',
            distance: 18,
            elevation: 800,
            duration: '3-4 hs',
            difficulty: 'advanced',
            description: 'Sendero en la selva de yunga con vegetación densa y humedad. Descenso técnico con raíces, piedras y sectores estrechos.',
            features: ['Selva de yunga', 'Muy técnico', 'Biodiversidad'],
            image: 'assets/quebrada-de-san-lorenzo.jpg',
            coordinates: [-24.7167, -65.4500]
        },
        {
            id: 4,
            name: 'Campo de Marte',
            distance: 8,
            elevation: 200,
            duration: '1-2 hs',
            difficulty: 'beginner',
            description: 'Perfecto para comenzar. Sendero suave con subidas graduales y descensos controlados. Ideal para familias y riders que se inician en MTB.',
            features: ['Fácil acceso', 'Familiar', 'Poco técnico'],
            image: 'assets/campo-de-marte.jpg',
            coordinates: [-24.7900, -65.4100]
        },
        {
            id: 5,
            name: 'Cerro Castañal',
            distance: 15,
            elevation: 550,
            duration: '2-3 hs',
            difficulty: 'intermediate',
            description: 'Sendero con mix de subida constante y secciones planas para recuperar. Vistas espectaculares del valle y la ciudad desde la cima.',
            features: ['Vistas panorámicas', 'Subida constante', 'Punto foto'],
            image: 'assets/cerro-castanal.jpg',
            coordinates: [-24.7700, -65.4200]
        },
        {
            id: 6,
            name: 'Quebrada del Chachapoyas',
            distance: 30,
            elevation: 900,
            duration: '5-6 hs',
            difficulty: 'expert',
            description: 'La ruta más exigente. Territorio remoto con navegación compleja, escaladas pronunciadas y descenso extremo. Solo para experimentados.',
            features: ['Extremo', 'Remoto', 'Multi-horas'],
            image: 'assets/quebrada-del-chachapoyas.jpg',
            coordinates: [-24.6500, -65.3800]
        }
    ],
    
    // Animation Settings
    animation: {
        delayShort: 0.1,
        delayMedium: 0.2,
        delayLong: 0.3,
        durationFast: 0.4,
        durationMedium: 0.6,
        durationSlow: 0.8
    },
    
    // API Endpoints (if you add backend functionality later)
    api: {
        baseUrl: '/api',
        newsletter: '/newsletter/subscribe',
        contact: '/contact/submit'
    }
};

// Make CONFIG available globally
window.CONFIG = CONFIG;

console.log('Configuration loaded successfully! ⚙️');