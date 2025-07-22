/**
 * Eunho's First Birthday Invitation - Main JavaScript
 * Handles image loading, error handling, and interactive features
 */

// Event Information Data
const eventInfo = {
    childName: "고은호 (Eunho Ko)",
    eventType: "첫 돌",
    date: "2025년 8월 15일 (금요일)",
    time: "오후 2시 ~ 오후 5시",
    location: {
        name: "그랜드 볼룸 웨딩홀",
        address: "서울특별시 강남구 테헤란로 123, 3층"
    },
    message: "사랑하는 가족 여러분, 은호가 벌써 첫 돌을 맞이했습니다.",
    photos: {
        main: "./images/eunho-photo.jpg"
    }
};

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Remove preload class to enable transitions
    document.body.classList.remove('preload');
    
    initializeImageHandling();
    initializeEventInfo();
    initializePageAnimations();
});

// Add preload class to prevent animation flash
document.body.classList.add('preload');

/**
 * Initialize image loading and error handling
 */
function initializeImageHandling() {
    const mainPhoto = document.querySelector('.main-photo');
    
    if (mainPhoto) {
        // Create loading placeholder
        createLoadingPlaceholder(mainPhoto);
        
        // Handle image loading
        handleImageLoading(mainPhoto);
        
        // Handle image error
        handleImageError(mainPhoto);
    }
}

/**
 * Create loading placeholder for the main photo
 * @param {HTMLImageElement} imageElement - The main photo element
 */
function createLoadingPlaceholder(imageElement) {
    const photoContainer = imageElement.parentElement;
    
    // Create loading spinner
    const loadingSpinner = document.createElement('div');
    loadingSpinner.className = 'photo-loading-spinner';
    loadingSpinner.innerHTML = `
        <div class="spinner"></div>
        <p class="loading-text">사진을 불러오는 중...</p>
    `;
    
    // Insert loading spinner before the image
    photoContainer.insertBefore(loadingSpinner, imageElement);
    
    // Hide image initially
    imageElement.style.opacity = '0';
    imageElement.style.transition = 'opacity 0.5s ease-in-out';
}

/**
 * Handle successful image loading
 * @param {HTMLImageElement} imageElement - The main photo element
 */
function handleImageLoading(imageElement) {
    imageElement.addEventListener('load', function() {
        const loadingSpinner = document.querySelector('.photo-loading-spinner');
        
        // Remove loading spinner
        if (loadingSpinner) {
            loadingSpinner.style.opacity = '0';
            setTimeout(() => {
                loadingSpinner.remove();
            }, 300);
        }
        
        // Show image with fade-in effect
        setTimeout(() => {
            imageElement.style.opacity = '1';
        }, 100);
        
        console.log('Main photo loaded successfully');
    });
}

/**
 * Handle image loading error
 * @param {HTMLImageElement} imageElement - The main photo element
 */
function handleImageError(imageElement) {
    imageElement.addEventListener('error', function() {
        const loadingSpinner = document.querySelector('.photo-loading-spinner');
        const photoContainer = imageElement.parentElement;
        
        // Remove loading spinner
        if (loadingSpinner) {
            loadingSpinner.remove();
        }
        
        // Create error placeholder
        const errorPlaceholder = document.createElement('div');
        errorPlaceholder.className = 'photo-error-placeholder';
        errorPlaceholder.innerHTML = `
            <div class="error-icon">📷</div>
            <p class="error-message">사진을 불러올 수 없습니다</p>
            <button class="retry-button" onclick="retryImageLoad('${imageElement.src}')">
                다시 시도
            </button>
        `;
        
        // Replace image with error placeholder
        photoContainer.replaceChild(errorPlaceholder, imageElement);
        
        console.error('Failed to load main photo:', imageElement.src);
    });
}

/**
 * Retry loading the image
 * @param {string} originalSrc - Original image source URL
 */
function retryImageLoad(originalSrc) {
    const errorPlaceholder = document.querySelector('.photo-error-placeholder');
    const photoContainer = errorPlaceholder.parentElement;
    
    // Create new image element
    const newImage = document.createElement('img');
    newImage.src = originalSrc;
    newImage.alt = '고은호의 사진';
    newImage.className = 'main-photo';
    newImage.loading = 'lazy';
    
    // Replace error placeholder with new image
    photoContainer.replaceChild(newImage, errorPlaceholder);
    
    // Reinitialize image handling for the new element
    createLoadingPlaceholder(newImage);
    handleImageLoading(newImage);
    handleImageError(newImage);
}

/**
 * Initialize event information display
 */
function initializeEventInfo() {
    updateEventInfo();
}

/**
 * Update event information in the HTML
 */
function updateEventInfo() {
    // Update event date
    const eventDateElement = document.getElementById('event-date');
    if (eventDateElement) {
        eventDateElement.textContent = eventInfo.date;
    }
    
    // Update event time
    const eventTimeElement = document.getElementById('event-time');
    if (eventTimeElement) {
        eventTimeElement.textContent = eventInfo.time;
    }
    
    // Update event location
    const eventLocationElement = document.getElementById('event-location');
    if (eventLocationElement) {
        eventLocationElement.textContent = eventInfo.location.name;
    }
    
    // Update event address
    const eventAddressElement = document.getElementById('event-address');
    if (eventAddressElement) {
        eventAddressElement.textContent = eventInfo.location.address;
    }
    
    console.log('Event information updated successfully');
}

/**
 * Get formatted event information
 * @returns {Object} Formatted event information
 */
function getFormattedEventInfo() {
    return {
        ...eventInfo,
        formattedDate: formatEventDate(eventInfo.date),
        formattedTime: formatEventTime(eventInfo.time),
        fullAddress: `${eventInfo.location.name}\n${eventInfo.location.address}`
    };
}

/**
 * Format event date for display
 * @param {string} dateString - Original date string
 * @returns {string} Formatted date string
 */
function formatEventDate(dateString) {
    // Add any specific date formatting logic here
    return dateString;
}

/**
 * Format event time for display
 * @param {string} timeString - Original time string
 * @returns {string} Formatted time string
 */
function formatEventTime(timeString) {
    // Add any specific time formatting logic here
    return timeString;
}

/**
 * Update event information with new data
 * @param {Object} newEventInfo - New event information object
 */
function updateEventData(newEventInfo) {
    // Merge new data with existing data
    Object.assign(eventInfo, newEventInfo);
    
    // Update the display
    updateEventInfo();
    
    console.log('Event data updated:', eventInfo);
}

/**
 * Initialize page animations and smooth loading effects
 */
function initializePageAnimations() {
    // Initialize page loading animation
    initializePageLoadAnimation();
    
    // Initialize scroll-triggered animations
    initializeScrollAnimations();
    
    // Initialize enhanced hover effects
    initializeEnhancedHoverEffects();
    
    // Initialize interactive decorations
    initializeInteractiveDecorations();
}

/**
 * Initialize smooth page loading animation
 */
function initializePageLoadAnimation() {
    const invitationContainer = document.querySelector('.invitation-container');
    const sections = document.querySelectorAll('section');
    
    // Set initial state for main container
    if (invitationContainer) {
        invitationContainer.classList.add('fade-in');
        
        // Trigger animation after a short delay
        setTimeout(() => {
            invitationContainer.classList.add('animate');
        }, 100);
    }
    
    // Add staggered animations to sections
    sections.forEach((section, index) => {
        // Determine animation type based on section
        const animationType = getAnimationTypeForSection(section, index);
        section.classList.add(animationType);
        
        // Trigger animation with staggered delay
        setTimeout(() => {
            section.classList.add('animate');
        }, 300 + (index * 200));
    });
}

/**
 * Get appropriate animation type for each section
 * @param {HTMLElement} section - The section element
 * @param {number} index - Section index
 * @returns {string} Animation class name
 */
function getAnimationTypeForSection(section, index) {
    if (section.classList.contains('header-section')) {
        return 'scale-in';
    } else if (section.classList.contains('photo-section')) {
        return 'scale-in';
    } else if (section.classList.contains('event-info-section')) {
        return 'fade-in';
    } else if (section.classList.contains('message-section')) {
        return 'slide-in-left';
    } else if (section.classList.contains('footer-section')) {
        return 'slide-in-right';
    }
    return 'fade-in';
}

/**
 * Initialize scroll-triggered animations for elements that come into view
 */
function initializeScrollAnimations() {
    // Create intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe info cards for individual animations
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach((card, index) => {
        card.classList.add('slide-in-left');
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
}

/**
 * Initialize enhanced hover effects and interactions
 */
function initializeEnhancedHoverEffects() {
    // Enhanced photo hover effect with parallax
    const photoContainer = document.querySelector('.photo-container');
    if (photoContainer) {
        photoContainer.addEventListener('mousemove', handlePhotoParallax);
        photoContainer.addEventListener('mouseleave', resetPhotoParallax);
    }
    
    // Enhanced info card interactions
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', handleInfoCardHover);
        card.addEventListener('mouseleave', resetInfoCardHover);
        card.addEventListener('click', handleInfoCardClick);
    });
    
    // Enhanced section title interactions
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('mouseenter', handleSectionTitleHover);
        title.addEventListener('mouseleave', resetSectionTitleHover);
    });
}

/**
 * Handle photo parallax effect on mouse move
 * @param {MouseEvent} event - Mouse move event
 */
function handlePhotoParallax(event) {
    const container = event.currentTarget;
    const photo = container.querySelector('.main-photo');
    const frame = container.querySelector('.photo-frame');
    
    if (!photo || !frame) return;
    
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (event.clientX - centerX) / rect.width;
    const deltaY = (event.clientY - centerY) / rect.height;
    
    const rotateX = deltaY * 10;
    const rotateY = deltaX * -10;
    const translateX = deltaX * 5;
    const translateY = deltaY * 5;
    
    photo.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        translateX(${translateX}px) 
        translateY(${translateY}px)
        scale(1.05)
    `;
    
    frame.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX * 0.5}deg) 
        rotateY(${rotateY * 0.5}deg) 
        scale(1.02)
    `;
}

/**
 * Reset photo parallax effect
 * @param {MouseEvent} event - Mouse leave event
 */
function resetPhotoParallax(event) {
    const container = event.currentTarget;
    const photo = container.querySelector('.main-photo');
    const frame = container.querySelector('.photo-frame');
    
    if (photo) {
        photo.style.transform = '';
    }
    if (frame) {
        frame.style.transform = '';
    }
}

/**
 * Handle info card hover effect
 * @param {MouseEvent} event - Mouse enter event
 */
function handleInfoCardHover(event) {
    const card = event.currentTarget;
    const icon = card.querySelector('.info-icon');
    
    // Add subtle bounce animation to icon
    if (icon) {
        icon.style.animation = 'gentle-bounce 0.6s ease-in-out';
    }
    
    // Add ripple effect
    createRippleEffect(card, event);
}

/**
 * Reset info card hover effect
 * @param {MouseEvent} event - Mouse leave event
 */
function resetInfoCardHover(event) {
    const card = event.currentTarget;
    const icon = card.querySelector('.info-icon');
    
    if (icon) {
        icon.style.animation = '';
    }
}

/**
 * Handle info card click effect
 * @param {MouseEvent} event - Click event
 */
function handleInfoCardClick(event) {
    const card = event.currentTarget;
    
    // Add click animation
    card.style.transform = 'scale(0.98)';
    setTimeout(() => {
        card.style.transform = '';
    }, 150);
    
    // Create expanding circle effect
    createExpandingCircle(card, event);
}

/**
 * Handle section title hover effect
 * @param {MouseEvent} event - Mouse enter event
 */
function handleSectionTitleHover(event) {
    const title = event.currentTarget;
    
    // Add text shadow animation
    title.style.textShadow = '0 4px 8px rgba(255, 182, 193, 0.4)';
    title.style.transition = 'all 0.3s ease-out';
}

/**
 * Reset section title hover effect
 * @param {MouseEvent} event - Mouse leave event
 */
function resetSectionTitleHover(event) {
    const title = event.currentTarget;
    title.style.textShadow = '';
}

/**
 * Create ripple effect on element
 * @param {HTMLElement} element - Target element
 * @param {MouseEvent} event - Mouse event
 */
function createRippleEffect(element, event) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(255, 182, 193, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
        z-index: 1;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

/**
 * Create expanding circle effect
 * @param {HTMLElement} element - Target element
 * @param {MouseEvent} event - Click event
 */
function createExpandingCircle(element, event) {
    const circle = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    circle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: expand-circle 0.8s ease-out;
        pointer-events: none;
        z-index: 1;
    `;
    
    element.appendChild(circle);
    
    setTimeout(() => {
        circle.remove();
    }, 800);
}

/**
 * Initialize interactive decorations with enhanced effects
 */
function initializeInteractiveDecorations() {
    const decorations = document.querySelectorAll('.decoration');
    
    decorations.forEach((decoration, index) => {
        // Add click interaction
        decoration.addEventListener('click', () => {
            handleDecorationClick(decoration);
        });
        
        // Add random gentle movement
        setInterval(() => {
            if (!decoration.matches(':hover')) {
                addRandomMovement(decoration);
            }
        }, 3000 + (index * 500));
    });
}

/**
 * Handle decoration click effect
 * @param {HTMLElement} decoration - Decoration element
 */
function handleDecorationClick(decoration) {
    const originalTransform = decoration.style.transform;
    
    // Create burst effect
    decoration.style.transform = 'scale(1.5) rotate(360deg)';
    decoration.style.transition = 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    
    // Create sparkle effect
    createSparkleEffect(decoration);
    
    setTimeout(() => {
        decoration.style.transform = originalTransform;
        decoration.style.transition = '';
    }, 500);
}

/**
 * Add random gentle movement to decoration
 * @param {HTMLElement} decoration - Decoration element
 */
function addRandomMovement(decoration) {
    const randomX = (Math.random() - 0.5) * 10;
    const randomY = (Math.random() - 0.5) * 10;
    const randomRotate = (Math.random() - 0.5) * 20;
    
    decoration.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
    decoration.style.transition = 'transform 2s ease-in-out';
    
    setTimeout(() => {
        decoration.style.transform = '';
    }, 2000);
}

/**
 * Create sparkle effect around element
 * @param {HTMLElement} element - Target element
 */
function createSparkleEffect(element) {
    const sparkleCount = 6;
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        const angle = (360 / sparkleCount) * i;
        const distance = 30;
        const x = Math.cos(angle * Math.PI / 180) * distance;
        const y = Math.sin(angle * Math.PI / 180) * distance;
        
        sparkle.style.cssText = `
            position: fixed;
            left: ${rect.left + rect.width / 2 + x}px;
            top: ${rect.top + rect.height / 2 + y}px;
            width: 4px;
            height: 4px;
            background: linear-gradient(45deg, #FFD700, #FF69B4);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: sparkle-fade 1s ease-out forwards;
        `;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}

/**
 * Utility function to check if image exists
 * @param {string} url - Image URL to check
 * @returns {Promise<boolean>} - Promise that resolves to true if image exists
 */
function checkImageExists(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
}

/**
 * Preload critical images for better performance
 */
function preloadImages() {
    const imagesToPreload = [
        './images/eunho-photo.jpg'
    ];
    
    imagesToPreload.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize image preloading
preloadImages();