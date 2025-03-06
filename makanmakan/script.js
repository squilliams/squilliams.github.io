const foods = [
    // Rice
    { name: 'Nasi Goreng', emoji: '🍚', category: 'Nasi' },
    { name: 'Nasi Uduk', emoji: '🍚', category: 'Nasi' },
    { name: 'Nasi Campur', emoji: '🍱', category: 'Nasi' },
    { name: 'Nasi Kuning', emoji: '🍚', category: 'Nasi' },
    { name: 'Nasi Liwet', emoji: '🍚', category: 'Nasi' },
    { name: 'Nasi Bakar', emoji: '🍚', category: 'Nasi' },
    { name: 'Nasi Kebuli', emoji: '🍚', category: 'Nasi' },
    { name: 'Nasi Pecel', emoji: '🍚', category: 'Nasi' },
    { name: 'Nasi Tumpeng', emoji: '🍚', category: 'Nasi' },
    { name: 'Nasi Ulam', emoji: '🍚', category: 'Nasi' },
    { name: 'Nasi Langgi', emoji: '🍚', category: 'Nasi' },
    { name: 'Nasi Gandul', emoji: '🍚', category: 'Nasi' },
    { name: 'Nasi Bogana', emoji: '🍚', category: 'Nasi' },
    { name: 'Nasi Jamblang', emoji: '🍚', category: 'Nasi' },
    { name: 'Nasi Lengko', emoji: '🍚', category: 'Nasi' },

    // Meat
    { name: 'Rendang', emoji: '🥘', category: 'Daging' },
    { name: 'Sate Ayam', emoji: '🍖', category: 'Daging' },
    { name: 'Bebek Goreng', emoji: '🍗', category: 'Daging' },
    { name: 'Sate Padang', emoji: '🍖', category: 'Daging' },
    { name: 'Ayam Goreng', emoji: '🍗', category: 'Daging' },
    { name: 'Opor Ayam', emoji: '🍗', category: 'Daging' },
    { name: 'Ayam Bakar', emoji: '🍗', category: 'Daging' },
    { name: 'Kambing Guling', emoji: '🍖', category: 'Daging' },
    { name: 'Sate Kambing', emoji: '🍖', category: 'Daging' },
    { name: 'Sate Maranggi', emoji: '🍖', category: 'Daging' },
    { name: 'Ayam Betutu', emoji: '🍗', category: 'Daging' },
    { name: 'Ayam Taliwang', emoji: '🍗', category: 'Daging' },
    { name: 'Ayam Pop', emoji: '🍗', category: 'Daging' },
    { name: 'Bebek Betutu', emoji: '🍗', category: 'Meat' },
    { name: 'Sate Lilit Ayam', emoji: '🍖', category: 'Meat' },
    { name: 'Dendeng Balado', emoji: '🥩', category: 'Meat' },

    // Vegetable
    { name: 'Gado-gado', emoji: '🥗', category: 'Sayur' },
    { name: 'Gudeg', emoji: '🍲', category: 'Sayur' },
    { name: 'Rujak Cingur', emoji: '🥗', category: 'Sayur' },
    { name: 'Ketoprak', emoji: '🥜', category: 'Sayur' },
    { name: 'Bayam', emoji: '🥜', category: 'Sayur' },
    { name: 'Urap', emoji: '🥗', category: 'Sayur' },
    { name: 'Pecel', emoji: '🥗', category: 'Sayur' },
    { name: 'Karedok', emoji: '🥗', category: 'Sayur' },
    { name: 'Sayur Asem', emoji: '🥬', category: 'Sayur' },
    { name: 'Sayur Lodeh', emoji: '🥬', category: 'Sayur' },
    { name: 'Plecing Kangkung', emoji: '🥬', category: 'Sayur' },
    { name: 'Terong Balado', emoji: '🍆', category: 'Sayur' },
    { name: 'Sayur Bening', emoji: '🥬', category: 'Sayur' },
    { name: 'Lalapan', emoji: '🥬', category: 'Sayur' },
    { name: 'Tumis Kangkung', emoji: '🥬', category: 'Sayur' },

    // Soup
    { name: 'Soto Ayam', emoji: '🍜', category: 'Kuah-Kuah' },
    { name: 'Bakso', emoji: '🍲', category: 'Kuah-Kuah' },
    { name: 'Sop Buntut', emoji: '🍖', category: 'Kuah-Kuah' },
    { name: 'Soto Betawi', emoji: '🥘', category: 'Kuah-Kuah' },
    { name: 'Rawon', emoji: '🥘', category: 'Kuah-Kuah' },
    { name: 'Soto Banjar', emoji: '🍜', category: 'Kuah-Kuah' },
    { name: 'Sop Konro', emoji: '🍲', category: 'Kuah-Kuah' },
    { name: 'Sop Kaki Kambing', emoji: '🍲', category: 'Kuah-Kuah' },
    { name: 'Tongseng', emoji: '🥘', category: 'Kuah-Kuah' },
    { name: 'Sup Iga', emoji: '🍖', category: 'Kuah-Kuah' },
    { name: 'Coto Makassar', emoji: '🥘', category: 'Kuah-Kuah' },
    { name: 'Soto Kudus', emoji: '🍜', category: 'Kuah-Kuah' },
    { name: 'Soto Lamongan', emoji: '🍜', category: 'Kuah-Kuah' },
    { name: 'Sop Saudara', emoji: '🥘', category: 'Kuah-Kuah' },
    { name: 'Tongseng', emoji: '🐐', category: 'Kuah-Kuah' },
    { name: 'Sop Kambing', emoji: '🍲', category: 'Kuah-Kuah' },
    { name: 'Sop Ayam', emoji: '🍲', category: 'Kuah-Kuah' },

    // Noodle
    { name: 'Mie Goreng', emoji: '🍝', category: 'Mie' },
    { name: 'Mie Aceh', emoji: '🍜', category: 'Mie' },
    { name: 'Mie Jawa', emoji: '🍜', category: 'Mie' },
    { name: 'Mie Kocok', emoji: '🍜', category: 'Mie' },
    { name: 'Mie Celor', emoji: '🍜', category: 'Mie' },
    { name: 'Mie Rebus', emoji: '🍜', category: 'Mie' },
    { name: 'Mie Ayam', emoji: '🍜', category: 'Mie' },
    { name: 'Mie Bangka', emoji: '🍜', category: 'Mie' },
    { name: 'Mie Kopyok', emoji: '🍜', category: 'Mie' },
    { name: 'Mie Cakalang', emoji: '🍜', category: 'Mie' },
    { name: 'Mie Gomak', emoji: '🍜', category: 'Mie' },
    { name: 'Mie Tek-Tek', emoji: '🍜', category: 'Mie' },

    // Snack
    { name: 'Martabak', emoji: '🥞', category: 'Snack' },
    { name: 'Pisang Goreng', emoji: '🍌', category: 'Snack' },
    { name: 'Kue Putu', emoji: '🍡', category: 'Snack' },
    { name: 'Lemper', emoji: '🍙', category: 'Snack' },
    { name: 'Risoles', emoji: '🥟', category: 'Snack' },
    { name: 'Bakwan', emoji: '🥮', category: 'Snack' },
    { name: 'Klepon', emoji: '🍡', category: 'Snack' },
    { name: 'Onde-Onde', emoji: '🍡', category: 'Snack' },
    { name: 'Serabi', emoji: '🥞', category: 'Snack' },
    { name: 'Dadar Gulung', emoji: '🥞', category: 'Snack' },
    { name: 'Roti Srikaya', emoji: '🥞', category: 'Snack' },
    { name: 'Kue Lumpur', emoji: '🥮', category: 'Snack' },

    // Fish
    { name: 'Pecel Lele', emoji: '🐟', category: 'Ikan' },
    { name: 'Pempek', emoji: '🍥', category: 'Ikan' },
    { name: 'Sate Lilit', emoji: '🍖', category: 'Ikan' },
    { name: 'Ikan Bakar', emoji: '🐟', category: 'Ikan' },
    { name: 'Ikan Goreng', emoji: '🐟', category: 'Ikan' },
    { name: 'Bandeng Presto', emoji: '🐟', category: 'Ikan' },
    { name: 'Ikan Asam Pedas', emoji: '🐟', category: 'Ikan' },
    { name: 'Ikan Asin', emoji: '🐟', category: 'Ikan' },
    { name: 'Ikan Cakalang', emoji: '🐟', category: 'Ikan' },
    { name: 'Ikan Kuah Kuning', emoji: '🐟', category: 'Ikan' },
    { name: 'Ikan Bawal Bakar', emoji: '🐟', category: 'Ikan' }
];

// Add sound effects
const spinSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3');
const winSound = new Audio('https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3');

// Create category filter with multi-select support
let selectedCategories = new Set(['All']);
const categories = ['All', ...new Set(foods.map(food => food.category))];
const filterContainer = document.createElement('div');
filterContainer.className = 'flex flex-wrap gap-2 justify-center mb-4';
categories.forEach(category => {
    const button = document.createElement('button');
    button.className = `px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${category === 'All' ? 'bg-red-500 text-white' : 'bg-white text-red-500 border-2 border-red-500'}`;
    button.textContent = category;
    button.onclick = () => {
        if (category === 'All') {
            selectedCategories.clear();
            selectedCategories.add('All');
            categories.forEach(cat => {
                const btn = filterContainer.querySelector(`button[data-category="${cat}"]`);
                if (btn) {
                    btn.className = `px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${cat === 'All' ? 'bg-red-500 text-white' : 'bg-white text-red-500 border-2 border-red-500'}`;
                }
            });
        } else {
            selectedCategories.delete('All');
            // Update All button appearance
            const allButton = filterContainer.querySelector('button[data-category="All"]');
            if (allButton) {
                allButton.className = 'px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 bg-white text-red-500 border-2 border-red-500';
            }
            if (selectedCategories.has(category)) {
                selectedCategories.delete(category);
                if (selectedCategories.size === 0) {
                    selectedCategories.add('All');
                    categories.forEach(cat => {
                        const btn = filterContainer.querySelector(`button[data-category="${cat}"]`);
                        if (btn) {
                            btn.className = `px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${cat === 'All' ? 'bg-red-500 text-white' : 'bg-white text-red-500 border-2 border-red-500'}`;
                        }
                    });
                }
            } else {
                selectedCategories.add(category);
            }
        }
        button.className = `px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${selectedCategories.has(category) ? 'bg-red-500 text-white' : 'bg-white text-red-500 border-2 border-red-500'}`;
        filterFoods();
    };
    button.setAttribute('data-category', category);
    filterContainer.appendChild(button);
});
document.querySelector('.slot-container').parentElement.insertBefore(filterContainer, document.querySelector('.slot-container'));

// Filter foods function
let filteredFoods = [...foods];
function filterFoods() {
    if (selectedCategories.has('All')) {
        filteredFoods = [...foods];
    } else {
        filteredFoods = foods.filter(food => selectedCategories.has(food.category));
    }
    createSlotItems();
}



const resultModal = document.getElementById('resultModal');
const modalResult = document.getElementById('modalResult');
const modalClose = document.getElementById('modalClose');
const shareButton = document.getElementById('shareButton');

const slot = document.getElementById('slot');
const spinButton = document.getElementById('spinButton');
const retryButton = document.getElementById('retryButton');
const resultDiv = document.getElementById('result');

// Create slot items
const createSlotItems = () => {
    slot.innerHTML = '';
    // Create 3 sets of items for continuous scrolling
    for (let i = 0; i < 3; i++) {
        filteredFoods.forEach((food) => {
            const item = document.createElement('div');
            item.className = 'slot-item';
            item.innerHTML = `${food.emoji} ${food.name}`;
            slot.appendChild(item);
        });
    }
    // Reset position immediately
    slot.style.transition = 'none';
    slot.style.transform = 'translateY(0)';
    // Force reflow
    slot.offsetHeight;
    // Enable smooth transitions
    slot.style.transition = 'transform 5s cubic-bezier(0.21, 0.53, 0.29, 0.99)';
};

createSlotItems();

let isSpinning = false;

spinButton.addEventListener('click', () => {
    if (isSpinning) return;
    
    spinSound.currentTime = 0;
    spinSound.play();
    
    isSpinning = true;
    spinButton.disabled = true;
    resultDiv.classList.add('hidden');
    
    const itemHeight = 60; // Height of each slot item
    const totalItems = filteredFoods.length;
    const randomIndex = Math.floor(Math.random() * totalItems);
    const baseScroll = totalItems * itemHeight * 2; // Two full sets for more spinning
    const randomOffset = randomIndex * itemHeight;
    const totalScroll = baseScroll + randomOffset;
    
    // Reset position first
    slot.style.transition = 'none';
    slot.style.transform = 'translateY(0)';
    
    // Force reflow
    slot.offsetHeight;
    
    // Start spinning with easing and ensure perfect centering
    slot.style.transition = 'transform 5s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
    slot.style.transform = `translateY(-${totalScroll + (itemHeight/2)}px)`;

// Add bounce and glow effects
setTimeout(() => {
    slot.style.transition = 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
    slot.style.transform = `translateY(-${totalScroll + (itemHeight/2) - 5}px)`;
    slot.style.filter = 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.8))';
    setTimeout(() => {
        slot.style.transform = `translateY(-${totalScroll + (itemHeight/2)}px)`;
        slot.style.filter = 'none';
    }, 500);
}, 5000);
    
    setTimeout(() => {
        isSpinning = false;
        const selectedFood = filteredFoods[randomIndex];
        modalResult.textContent = `Kamu sebaiknya makan ${selectedFood.name}!`;
        
        // Set the emoji in the modal
        document.getElementById('resultEmoji').textContent = selectedFood.emoji;
        
        // Show modal
        resultModal.classList.remove('hidden');
        
        resultDiv.classList.remove('hidden');
        
        // Setup share button functionality
        const shareData = {
            title: 'Roda Makanan Indonesia',
            text: `Hari ini aku dapat rekomendasi makan ${selectedFood.name}! 🍽️`,
            url: window.location.href
        };
        
        // Create a temporary container for the image
        const imageContainer = document.createElement('div');
        imageContainer.style.width = '540px';
        imageContainer.style.height = '960px';
        imageContainer.style.position = 'fixed';
        imageContainer.style.left = '-9999px';
        imageContainer.style.background = '#fff';
        imageContainer.style.display = 'flex';
        imageContainer.style.flexDirection = 'column';
        imageContainer.style.alignItems = 'center';
        imageContainer.style.justifyContent = 'space-between';
        imageContainer.style.padding = '40px';

        // Clone the slot machine interface
        const slotClone = document.querySelector('.slot-container').cloneNode(true);
        slotClone.style.marginBottom = '30px';
        
        // Set the slot content to show only the selected food
        const slotContent = slotClone.querySelector('.slot-items');
        slotContent.style.position = 'relative';
        slotContent.style.top = '0';
        slotContent.style.transform = 'none';
        slotContent.innerHTML = `
            <div class="slot-item" style="height: 60px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; color: #333;">
                ${selectedFood.emoji} ${selectedFood.name}
            </div>
        `;
        slotContent.style.transform = 'translateY(0)';
        slotContent.style.transition = 'none';
        
        // Clone the result content
        const resultContent = document.createElement('div');
        resultContent.style.textAlign = 'center';
        resultContent.style.marginTop = '40px';
        resultContent.innerHTML = `
            <h2 style="font-size: 36px; color: #1f2937; font-family: 'Playfair Display', serif; margin-bottom: 20px">Roda Makanan Indonesia</h2>
            <div style="font-size: 48px; margin-bottom: 20px">${selectedFood.emoji}</div>
            <p style="font-size: 24px; color: #4b5563; margin-bottom: 40px">${modalResult.textContent}</p>
        `;

        // Add website link
        const websiteLink = document.createElement('div');
        websiteLink.style.marginBottom = '40px';
        websiteLink.style.color = '#DE3163';
        websiteLink.style.fontSize = '24px';
        websiteLink.style.fontWeight = 'bold';
        websiteLink.textContent = '🔗 tyasono.xyz/makanmakan';

        // Assemble the container
        imageContainer.appendChild(resultContent);
        imageContainer.appendChild(slotClone);
        imageContainer.appendChild(websiteLink);
        document.body.appendChild(imageContainer);

        // Generate and download the image
        html2canvas(imageContainer).then(canvas => {
            // Update share data to include the image
            shareData.files = [new File([dataURItoBlob(canvas.toDataURL())], 'makanan-rekomendasi.png', { type: 'image/png' })];
            
            // Add share button functionality
            shareButton.onclick = async () => {
                try {
                    if (navigator.canShare && navigator.canShare(shareData)) {
                        await navigator.share(shareData);
                    } else {
                        const link = document.createElement('a');
                        link.download = 'makanan-rekomendasi.png';
                        link.href = canvas.toDataURL();
                        link.click();
                    }
                } catch (error) {
                    console.log('Error sharing:', error);
                    // Fallback to download if sharing fails
                    const link = document.createElement('a');
                    link.download = 'makanan-rekomendasi.png';
                    link.href = canvas.toDataURL();
                    link.click();
                }
            };
            document.body.removeChild(imageContainer);
        });

        // Helper function to convert Data URI to Blob
        function dataURItoBlob(dataURI) {
            const byteString = atob(dataURI.split(',')[1]);
            const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            return new Blob([ab], { type: mimeString });
        }
        
        // Create share buttons container
        const shareContainer = document.createElement('div');
        shareContainer.className = 'flex space-x-2 mt-4';
        
        // Add share button if Web Share API is available
        if (navigator.share) {
            const shareButton = document.createElement('button');
            shareButton.className = 'flex-1 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl border-b-4 border-blue-700 active:translate-y-1 active:shadow-md active:border-b-0';
            shareButton.innerHTML = `<span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" /></svg>Bagikan</span>`;
            shareButton.onclick = () => navigator.share(shareData);
            shareContainer.appendChild(shareButton);
        }

        // Add download image button
        const downloadButton = document.createElement('button');
        downloadButton.className = 'flex-1 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl border-b-4 border-green-700 active:translate-y-1 active:shadow-md active:border-b-0';
        downloadButton.innerHTML = `<span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>Simpan Gambar</span>`;
        downloadButton.onclick = () => {
            // Create a temporary container for the image
            const imageContainer = document.createElement('div');
            imageContainer.style.width = '540px';
            imageContainer.style.height = '960px';
            imageContainer.style.position = 'fixed';
            imageContainer.style.left = '-9999px';
            imageContainer.style.background = '#fff';
            imageContainer.style.display = 'flex';
            imageContainer.style.flexDirection = 'column';
            imageContainer.style.alignItems = 'center';
            imageContainer.style.justifyContent = 'space-between';
            imageContainer.style.padding = '40px';
        
            // Clone the slot machine interface
            const slotClone = document.querySelector('.slot-container').cloneNode(true);
            slotClone.style.marginBottom = '30px';
            
            // Set the slot content to show only the selected food
            const slotContent = slotClone.querySelector('.slot-items');
            slotContent.innerHTML = `<div class="slot-item" style="transform: translateY(0)">${selectedFood.emoji} ${selectedFood.name}</div>`;
            slotContent.style.transform = 'translateY(0)';
            slotContent.style.transition = 'none';
        
            // Clone the result content
            const resultContent = document.createElement('div');
            resultContent.style.textAlign = 'center';
            resultContent.style.marginTop = '40px';
            resultContent.innerHTML = `
                <h2 style="font-size: 36px; color: #1f2937; font-family: 'Playfair Display', serif; margin-bottom: 20px">Roda Makanan Indonesia</h2>
                <div style="font-size: 48px; margin-bottom: 20px">${selectedFood.emoji}</div>
                <p style="font-size: 24px; color: #4b5563; margin-bottom: 40px">${modalResult.textContent}</p>
            `;
        
            // Add website link
            const websiteLink = document.createElement('div');
            websiteLink.style.backgroundImage = "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ef4444\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"; // Add background pattern
            imageContainer.style.backgroundAttachment = 'fixed';

            // Add decorative food illustrations
            const illustrations = document.createElement('div');
            illustrations.style.position = 'absolute';
            illustrations.style.inset = '0';
            illustrations.style.pointerEvents = 'none';
            illustrations.style.zIndex = '0';
            illustrations.innerHTML = `
                <div style="position: absolute; top: -24px; left: -24px; font-size: 64px; transform: rotate(-15deg); opacity: 0.2">🍜</div>
                <div style="position: absolute; bottom: -24px; right: -24px; font-size: 64px; transform: rotate(15deg); opacity: 0.2">🍚</div>
                <div style="position: absolute; top: 50%; left: -16px; font-size: 48px; opacity: 0.2">🍖</div>
                <div style="position: absolute; top: 50%; right: -16px; font-size: 48px; opacity: 0.2">🥘</div>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100px; height: 100px; opacity: 0.8"><path d="M71,56Q66,62,62,68Q58,74,50.5,72.5Q43,71,30,72.5Q17,74,18,62Q19,50,20,39.5Q21,29,31.5,26.5Q42,24,53.5,13.5Q65,3,69,18.5Q73,34,74.5,42Q76,50,71,56Z" stroke="none" fill="#DE3163"></path><path d="M71,56Q66,62,62,68Q58,74,50.5,72.5Q43,71,30,72.5Q17,74,18,62Q19,50,20,39.5Q21,29,31.5,26.5Q42,24,53.5,13.5Q65,3,69,18.5Q73,34,74.5,42Q76,50,71,56Z" transform="translate(-3.06 -7.86)" stroke="#941f41" stroke-width="1" fill="none"></path></svg>
            `;
            imageContainer.appendChild(illustrations);

            // Style the website link with glassmorphism effect
            websiteLink.style.background = 'rgba(255, 255, 255, 0.1)';
            websiteLink.style.backdropFilter = 'blur(10px)';
            websiteLink.style.WebkitBackdropFilter = 'blur(10px)';
            websiteLink.style.padding = '12px 24px';
            websiteLink.style.borderRadius = '12px';
            websiteLink.style.border = '1px solid rgba(255, 255, 255, 0.2)';
            websiteLink.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
            websiteLink.style.transition = 'all 0.3s ease';
            websiteLink.style.marginBottom = '40px';
            websiteLink.style.color = '#ef4444';
            websiteLink.style.fontSize = '24px';
            websiteLink.style.fontWeight = 'bold';
            websiteLink.textContent = 'tyasono.xyz/makanapa';
        
            // Assemble the container
            imageContainer.appendChild(resultContent);
            imageContainer.appendChild(slotClone);
            imageContainer.appendChild(websiteLink);
            document.body.appendChild(imageContainer);
        
            // Generate and download the image
            html2canvas(imageContainer).then(canvas => {
                const link = document.createElement('a');
                link.download = 'makanan-rekomendasi.png';
                link.href = canvas.toDataURL();
                link.click();
                document.body.removeChild(imageContainer);
            });
        };
        shareContainer.appendChild(downloadButton);
        
        modalResult.parentElement.insertBefore(shareContainer, modalClose);
    }, 5000);
});

modalClose.addEventListener('click', () => {
    // Hide modal
    resultModal.classList.add('hidden');

    spinButton.disabled = false;
    spinButton.classList.remove('hidden');
    resultDiv.classList.add('hidden');
    
    // Remove share buttons if they exist
    const shareContainer = modalResult.parentElement.querySelector('.flex.space-x-2');
    if (shareContainer) {
        shareContainer.remove();
    }

    // Reset slot position
    slot.style.transition = 'none';
    slot.style.transform = 'translateY(0)';
    setTimeout(() => {
        slot.style.transition = 'transform 5s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
    }, 0);
});