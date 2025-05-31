// Sayfa yüklendiğinde tüm bölümleri kontrol et
document.addEventListener('DOMContentLoaded', function() {
    // İlk görünür bölümleri hemen göster
    checkSections();
    
    // Sayfa kaydırıldığında bölümleri kontrol et
    window.addEventListener('scroll', checkSections);
});

// Görünür bölümleri kontrol etme fonksiyonu
function checkSections() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Bölüm görünür olduğunda sınıf ekle
        if (sectionTop < windowHeight * 0.85) {
            section.classList.add('visible');
        }
    });
}

// Dil çevirileri
const translations = {
    tr: {
        features: "Özellikler",
        about: "Oyun Hakkında",
        reviews: "Yorumlar",
        requirements: "Sistem Gereksinimleri",
        buy: "Satın Al",
        contact: "İletişim",
        buyNow: "Şimdi Satın Al",
        freeShipping: "Ücretsiz Kargo"
    },
    en: {
        features: "Features",
        about: "About Game",
        reviews: "Reviews",
        requirements: "System Requirements",
        buy: "Buy Now",
        contact: "Contact",
        buyNow: "Buy Now",
        freeShipping: "Free Shipping"
    },
    de: {
        features: "Funktionen",
        about: "Über das Spiel",
        reviews: "Bewertungen",
        requirements: "Systemanforderungen",
        buy: "Jetzt Kaufen",
        contact: "Kontakt",
        buyNow: "Jetzt Kaufen",
        freeShipping: "Kostenloser Versand"
    },
    fr: {
        features: "Fonctionnalités",
        about: "À Propos",
        reviews: "Avis",
        requirements: "Configuration",
        buy: "Acheter",
        contact: "Contact",
        buyNow: "Acheter Maintenant",
        freeShipping: "Livraison Gratuite"
    }
};

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    // Navigasyon menüsü
    document.querySelector('.nav-links a[href="#features"]').textContent = translations[lang].features;
    document.querySelector('.nav-links a[href="#description"]').textContent = translations[lang].about;
    document.querySelector('.nav-links a[href="#reviews"]').textContent = translations[lang].reviews;
    document.querySelector('.nav-links a[href="#requirements"]').textContent = translations[lang].requirements;
    document.querySelector('.nav-links a[href="#pricing"]').textContent = translations[lang].buy;
    document.querySelector('.nav-links a[href="#contact"]').textContent = translations[lang].contact;
    
    // Satın Al butonları
    document.querySelector('header .buy-btn').textContent = translations[lang].buyNow;
    document.querySelector('.pricing .buy-btn').textContent = translations[lang].buyNow;
    
    // Ücretsiz Kargo
    document.querySelector('.shipping-text').textContent = translations[lang].freeShipping;
}

// Logoya tıklandığında sayfanın en üstüne gitme
document.getElementById('logoLink').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('navLogoLink').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dil seçimi yapıldığında
document.addEventListener('DOMContentLoaded', function() {
    const langLinks = document.querySelectorAll('.language-dropdown a');
    langLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Aktif dili güncelle
            langLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Seçilen dili buton üzerinde göster
            document.getElementById('currentLang').textContent = this.getAttribute('data-lang').toUpperCase();
            
            // Dropdown'ı kapat
            document.getElementById('langDropdown').classList.remove('active');
            
            // Dil değiştir
            changeLanguage(this.getAttribute('data-lang'));
        });
    });
});

// Mobil menü için JavaScript
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mobileMenuBtn').addEventListener('click', function() {
        document.getElementById('navLinks').classList.toggle('active');
    });
});

// Back to Top Button
window.onscroll = function() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
    
    // Ayrıca bölümleri kontrol et
    checkSections();
};

// Back to Top butonuna tıklandığında yumuşak kaydırma
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('backToTop').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Dil seçici için JavaScript
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentLang').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('langDropdown').classList.toggle('active');
    });
    
    // Dropdown dışına tıklandığında kapanması için
    document.addEventListener('click', function(e) {
        const langSelector = document.querySelector('.language-selector');
        if (langSelector && !langSelector.contains(e.target)) {
            document.getElementById('langDropdown').classList.remove('active');
        }
    });
}); 