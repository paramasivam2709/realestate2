// ========================================
// Stackly - Real Estate Landing Page
// Pure JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // Loading Screen
    // ========================================
    const loadingScreen = document.getElementById('loading-screen');
    
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 800);

    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ========================================
    // Mobile Menu
    // ========================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ========================================
    // Active Navigation Link
    // ========================================
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    function setActiveLink() {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink, { passive: true });

    // ========================================
    // Hero Parallax Effect
    // ========================================
    const heroBg = document.getElementById('heroBg');
    
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 1024) {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            
            heroBg.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px) scale(1.1)`;
        }
    });

    // ========================================
    // Particle Background
    // ========================================
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = (2 + Math.random() * 4) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (3 + Math.random() * 4) + 's';
        particlesContainer.appendChild(particle);
    }

    // ========================================
    // Scroll Reveal Animation
    // ========================================
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));

    // ========================================
    // Feature Cards Animation
    // ========================================
    const featureCards = document.querySelectorAll('.feature-card');
    
    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                featureObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        featureObserver.observe(card);
    });

    // ========================================
    // Property Cards Animation
    // ========================================
    const propertyCards = document.querySelectorAll('.property-card');
    
    const propertyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                propertyObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    propertyCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        propertyObserver.observe(card);
    });

    // ========================================
    // Favorite Button Toggle
    // ========================================
    const favoriteBtns = document.querySelectorAll('.favorite-btn');
    
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.classList.toggle('active');
            const svg = btn.querySelector('svg');
            
            if (btn.classList.contains('active')) {
                svg.style.fill = '#ef4444';
                svg.style.color = '#ef4444';
            } else {
                svg.style.fill = 'none';
                svg.style.color = 'white';
            }
        });
    });

    // ========================================
    // Value Cards Animation
    // ========================================
    const valueCards = document.querySelectorAll('.value-card');
    
    const valueObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                valueObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    valueCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        valueObserver.observe(card);
    });

    // ========================================
    // Testimonials Carousel
    // ========================================
    const testimonials = [
        {
            name: 'Sarah Mitchell',
            role: 'Home Buyer',
            image: 'https://i.pravatar.cc/150?img=5',
            text: 'Stackly made our dream of owning a home a reality. Their team was incredibly supportive throughout the entire process, from finding the perfect property to closing the deal. I cannot recommend them enough!',
            property: 'Modern Villa in Beverly Hills'
        },
        {
            name: 'Michael Chen',
            role: 'Property Investor',
            image: 'https://i.pravatar.cc/150?img=11',
            text: 'As an investor, I need a team that understands the market inside and out. Stackly delivered exceptional results, helping me build a portfolio that exceeds my expectations. Their market insights are invaluable.',
            property: 'Luxury Penthouse in Manhattan'
        },
        {
            name: 'Emily Rodriguez',
            role: 'First-time Buyer',
            image: 'https://i.pravatar.cc/150?img=9',
            text: 'Being a first-time buyer was intimidating, but Stackly guided me every step of the way. They explained everything clearly and found me a beautiful home within my budget. Truly exceptional service!',
            property: 'Cozy Apartment in Miami'
        },
        {
            name: 'David Thompson',
            role: 'Property Seller',
            image: 'https://i.pravatar.cc/150?img=3',
            text: 'Selling our family home was emotional, but Stackly handled everything with professionalism and care. They got us a price above our expectations and made the process seamless.',
            property: 'Family Estate in Aspen'
        }
    ];
    
    let currentTestimonial = 0;
    const testimonialText = document.querySelector('.testimonial-text');
    const authorAvatar = document.querySelector('.author-avatar');
    const authorName = document.querySelector('.author-info h4');
    const authorRole = document.querySelector('.author-info p');
    const propertyBadge = document.querySelector('.property-badge');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    function updateTestimonial(index) {
        const testimonial = testimonials[index];
        
        // Fade out
        testimonialText.style.opacity = '0';
        authorAvatar.style.opacity = '0';
        authorName.style.opacity = '0';
        authorRole.style.opacity = '0';
        propertyBadge.style.opacity = '0';
        
        setTimeout(() => {
            testimonialText.textContent = `"${testimonial.text}"`;
            authorAvatar.src = testimonial.image;
            authorName.textContent = testimonial.name;
            authorRole.textContent = testimonial.role;
            propertyBadge.textContent = testimonial.property;
            
            // Fade in
            testimonialText.style.opacity = '1';
            authorAvatar.style.opacity = '1';
            authorName.style.opacity = '1';
            authorRole.style.opacity = '1';
            propertyBadge.style.opacity = '1';
        }, 300);
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentTestimonial = index;
    }
    
    prevBtn.addEventListener('click', () => {
        const newIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(newIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        const newIndex = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial(newIndex);
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateTestimonial(index);
        });
    });
    
    // Auto-rotate testimonials
    setInterval(() => {
        const newIndex = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial(newIndex);
    }, 6000);

    

    // ========================================
    // Scroll to Top Button
    // ========================================
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    function toggleScrollToTop() {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', toggleScrollToTop, { passive: true });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ========================================
    // Stats Counter Animation
    // ========================================
    const statValues = document.querySelectorAll('.stat-value');
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const num = parseInt(text.replace(/\D/g, ''));
                const suffix = text.replace(/[0-9]/g, '');
                
                let current = 0;
                const increment = num / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= num) {
                        target.textContent = num + suffix;
                        clearInterval(timer);
                    } else {
                        target.textContent = Math.floor(current) + suffix;
                    }
                }, 30);
                
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statValues.forEach(stat => statsObserver.observe(stat));

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // About Section Animation
    // ========================================
    const aboutImages = document.querySelector('.about-images');
    const aboutContent = document.querySelector('.about-content');
    
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('about-images')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                } else {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    if (aboutImages) {
        aboutImages.style.opacity = '0';
        aboutImages.style.transform = 'translateX(-50px)';
        aboutImages.style.transition = 'all 0.8s ease';
        aboutObserver.observe(aboutImages);
    }
    
    if (aboutContent) {
        aboutContent.style.opacity = '0';
        aboutContent.style.transform = 'translateY(30px)';
        aboutContent.style.transition = 'all 0.8s ease 0.2s';
        aboutObserver.observe(aboutContent);
    }

    // ========================================
    // CTA Section Animation
    // ========================================
    const ctaContent = document.querySelector('.cta-content');
    const contactFormWrapper = document.querySelector('.contact-form-wrapper');
    
    const ctaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('cta-content')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                } else {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
                ctaObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    if (ctaContent) {
        ctaContent.style.opacity = '0';
        ctaContent.style.transform = 'translateY(30px)';
        ctaContent.style.transition = 'all 0.8s ease';
        ctaObserver.observe(ctaContent);
    }
    
    if (contactFormWrapper) {
        contactFormWrapper.style.opacity = '0';
        contactFormWrapper.style.transform = 'translateX(50px)';
        contactFormWrapper.style.transition = 'all 0.8s ease 0.2s';
        ctaObserver.observe(contactFormWrapper);
    }

    // ========================================
    // Section Headers Animation
    // ========================================
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const children = entry.target.children;
                Array.from(children).forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
                headerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    sectionHeaders.forEach(header => {
        Array.from(header.children).forEach(child => {
            child.style.opacity = '0';
            child.style.transform = 'translateY(20px)';
            child.style.transition = 'all 0.6s ease';
        });
        headerObserver.observe(header);
    });

    // ========================================
    // Achievement Items Animation
    // ========================================
    const achievementItems = document.querySelectorAll('.achievement-item');
    
    const achievementObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
                achievementObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    achievementItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease';
        achievementObserver.observe(item);
    });

    // ========================================
    // Stat Items Animation
    // ========================================
    const statItems = document.querySelectorAll('.stat-item');
    
    const statItemObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                statItemObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    statItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
        statItemObserver.observe(item);
    });

    console.log('Stackly initialized successfully!');
});
