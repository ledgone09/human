// Clean JavaScript for professional storytelling experience
document.addEventListener('DOMContentLoaded', function() {
    // Simple initialization - no background effects
    console.log('Human Coin - Professional Experience Loaded');
});

// Show manifesto (for page 3)
function showManifesto() {
    const manifesto = document.getElementById('manifesto');
    if (manifesto) {
        manifesto.classList.remove('hidden');
        
        // Auto-close after 10 seconds
        setTimeout(() => {
            manifesto.classList.add('hidden');
        }, 10000);
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const manifesto = document.getElementById('manifesto');
        if (manifesto) {
            manifesto.classList.add('hidden');
        }
    }
});