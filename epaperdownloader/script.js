const API_BASE_URL = 'https://yourusername.pythonanywhere.com';
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get form elements
    const magazineForm = document.getElementById('magazine-form');
    const newspaperForm = document.getElementById('newspaper-form');

    // Add event listeners for form submissions
    magazineForm.addEventListener('submit', handleSubmit);
    newspaperForm.addEventListener('submit', handleSubmit);

    // Add parallax effect
    window.addEventListener('scroll', createParallaxEffect);
    
    // Add 3D tilt effect to forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('mousemove', createTiltEffect);
        form.addEventListener('mouseleave', resetTilt);
    });
});

// Handle form submissions
async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
        
    try {
        showLoadingIndicator();
        const response = await fetch(`${API_BASE_URL}/api/download`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const blob = await response.blob();
        downloadFile(blob, `${data.publication || data.newspaper}_${data.date}.pdf`);
        showSuccessMessage('Download successful!');
    } catch (error) {
        showErrorMessage('An error occurred. Please try again.');
        console.error('Error:', error);
    } finally {
        hideLoadingIndicator();
    }
}

// Helper function to download the file
function downloadFile(blob, fileName) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}

// UI feedback functions
function showLoadingIndicator() {
    // Implement loading indicator (e.g., spinner)
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = 'Loading...';
    document.body.appendChild(loader);
}

function hideLoadingIndicator() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.remove();
    }
}

function showSuccessMessage(message) {
    showMessage(message, 'success');
}

function showErrorMessage(message) {
    showMessage(message, 'error');
}

function showMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.className = `message ${type}`;
    document.body.appendChild(messageElement);
    setTimeout(() => messageElement.remove(), 3000);
}

// Parallax effect
function createParallaxEffect() {
    const scrollPosition = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
}

// 3D tilt effect
function createTiltEffect(event) {
    const form = event.currentTarget;
    const formRect = form.getBoundingClientRect();
    const centerX = formRect.left + formRect.width / 2;
    const centerY = formRect.top + formRect.height / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const rotateX = (mouseY / (formRect.height / 2)) * 10;
    const rotateY = -(mouseX / (formRect.width / 2)) * 10;
    
    form.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function resetTilt(event) {
    const form = event.currentTarget;
    form.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
}