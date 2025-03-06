const foods = [
    // Rice
    { name: 'Nasi Goreng', emoji: '🍚', category: 'Rice' },
    { name: 'Nasi Uduk', emoji: '🍚', category: 'Rice' },
    { name: 'Nasi Campur', emoji: '🍱', category: 'Rice' },
    { name: 'Nasi Kuning', emoji: '🍚', category: 'Rice' },
    { name: 'Nasi Liwet', emoji: '🍚', category: 'Rice' },
    { name: 'Nasi Bakar', emoji: '🍚', category: 'Rice' },
    { name: 'Nasi Kebuli', emoji: '🍚', category: 'Rice' },
    { name: 'Nasi Pecel', emoji: '🍚', category: 'Rice' },
    { name: 'Nasi Tumpeng', emoji: '🍚', category: 'Rice' },
    { name: 'Nasi Ulam', emoji: '🍚', category: 'Rice' },
    { name: 'Nasi Langgi', emoji: '🍚', category: 'Rice' },
    { name: 'Nasi Gandul', emoji: '🍚', category: 'Rice' },
    { name: 'Nasi Bogana', emoji: '🍚', category: 'Rice' },
    { name: 'Nasi Jamblang', emoji: '🍚', category: 'Rice' },
    { name: 'Nasi Lengko', emoji: '🍚', category: 'Rice' },

    // Meat
    { name: 'Rendang', emoji: '🥘', category: 'Meat' },
    { name: 'Sate Ayam', emoji: '🍖', category: 'Meat' },
    { name: 'Bebek Goreng', emoji: '🍗', category: 'Meat' },
    { name: 'Sate Padang', emoji: '🍖', category: 'Meat' },
    { name: 'Ayam Goreng', emoji: '🍗', category: 'Meat' },
    { name: 'Opor Ayam', emoji: '🍗', category: 'Meat' },
    { name: 'Ayam Bakar', emoji: '🍗', category: 'Meat' },
    { name: 'Kambing Guling', emoji: '🍖', category: 'Meat' },
    { name: 'Sate Kambing', emoji: '🍖', category: 'Meat' },
    { name: 'Sate Maranggi', emoji: '🍖', category: 'Meat' },
    { name: 'Ayam Betutu', emoji: '🍗', category: 'Meat' },
    { name: 'Ayam Taliwang', emoji: '🍗', category: 'Meat' },
    { name: 'Ayam Pop', emoji: '🍗', category: 'Meat' },
    { name: 'Bebek Betutu', emoji: '🍗', category: 'Meat' },
    { name: 'Sate Lilit Ayam', emoji: '🍖', category: 'Meat' },
    { name: 'Dendeng Balado', emoji: '🥩', category: 'Meat' },

    // Vegetable
    { name: 'Gado-gado', emoji: '🥗', category: 'Vegetable' },
    { name: 'Gudeg', emoji: '🍲', category: 'Vegetable' },
    { name: 'Rujak Cingur', emoji: '🥗', category: 'Vegetable' },
    { name: 'Ketoprak', emoji: '🥜', category: 'Vegetable' },
    { name: 'Urap', emoji: '🥗', category: 'Vegetable' },
    { name: 'Pecel', emoji: '🥗', category: 'Vegetable' },
    { name: 'Karedok', emoji: '🥗', category: 'Vegetable' },
    { name: 'Sayur Asem', emoji: '🥬', category: 'Vegetable' },
    { name: 'Sayur Lodeh', emoji: '🥬', category: 'Vegetable' },
    { name: 'Plecing Kangkung', emoji: '🥬', category: 'Vegetable' },
    { name: 'Terong Balado', emoji: '🍆', category: 'Vegetable' },
    { name: 'Sayur Bening', emoji: '🥬', category: 'Vegetable' },
    { name: 'Lalapan', emoji: '🥬', category: 'Vegetable' },
    { name: 'Tumis Kangkung', emoji: '🥬', category: 'Vegetable' },

    // Soup
    { name: 'Soto Ayam', emoji: '🍜', category: 'Soup' },
    { name: 'Bakso', emoji: '🍲', category: 'Soup' },
    { name: 'Sop Buntut', emoji: '🍖', category: 'Soup' },
    { name: 'Soto Betawi', emoji: '🥘', category: 'Soup' },
    { name: 'Rawon', emoji: '🥘', category: 'Soup' },
    { name: 'Soto Banjar', emoji: '🍜', category: 'Soup' },
    { name: 'Sop Konro', emoji: '🍲', category: 'Soup' },
    { name: 'Sop Kaki Kambing', emoji: '🍲', category: 'Soup' },
    { name: 'Tongseng', emoji: '🥘', category: 'Soup' },
    { name: 'Sup Iga', emoji: '🍖', category: 'Soup' },
    { name: 'Coto Makassar', emoji: '🥘', category: 'Soup' },
    { name: 'Soto Kudus', emoji: '🍜', category: 'Soup' },
    { name: 'Soto Lamongan', emoji: '🍜', category: 'Soup' },
    { name: 'Sop Saudara', emoji: '🥘', category: 'Soup' },
    { name: 'Sop Kambing', emoji: '🍲', category: 'Soup' },
    { name: 'Sop Ayam', emoji: '🍲', category: 'Soup' },

    // Noodle
    { name: 'Mie Goreng', emoji: '🍝', category: 'Noodle' },
    { name: 'Mie Aceh', emoji: '🍜', category: 'Noodle' },
    { name: 'Mie Kocok', emoji: '🍜', category: 'Noodle' },
    { name: 'Mie Celor', emoji: '🍜', category: 'Noodle' },
    { name: 'Mie Rebus', emoji: '🍜', category: 'Noodle' },
    { name: 'Mie Ayam', emoji: '🍜', category: 'Noodle' },
    { name: 'Mie Bangka', emoji: '🍜', category: 'Noodle' },
    { name: 'Mie Kopyok', emoji: '🍜', category: 'Noodle' },
    { name: 'Mie Cakalang', emoji: '🍜', category: 'Noodle' },
    { name: 'Mie Gomak', emoji: '🍜', category: 'Noodle' },
    { name: 'Mie Tek-Tek', emoji: '🍜', category: 'Noodle' },

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
    { name: 'Kue Lumpur', emoji: '🥮', category: 'Snack' },

    // Fish
    { name: 'Pecel Lele', emoji: '🐟', category: 'Fish' },
    { name: 'Pempek', emoji: '🍥', category: 'Fish' },
    { name: 'Sate Lilit', emoji: '🍖', category: 'Fish' },
    { name: 'Ikan Bakar', emoji: '🐟', category: 'Fish' },
    { name: 'Ikan Goreng', emoji: '🐟', category: 'Fish' },
    { name: 'Bandeng Presto', emoji: '🐟', category: 'Fish' },
    { name: 'Asam Pedas Ikan', emoji: '🐟', category: 'Fish' },
    { name: 'Ikan Asin', emoji: '🐟', category: 'Fish' },
    { name: 'Cakalang Fufu', emoji: '🐟', category: 'Fish' },
    { name: 'Ikan Kuah Kuning', emoji: '🐟', category: 'Fish' },
    { name: 'Ikan Bawal Bakar', emoji: '🐟', category: 'Fish' }
];

// Add sound effects
const spinSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3');
const winSound = new Audio('https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3');

// Store history in localStorage
let history = JSON.parse(localStorage.getItem('foodHistory') || '[]');

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

// Add history display
const historyContainer = document.createElement('div');
historyContainer.className = 'mt-8 p-4 bg-white/80 backdrop-blur rounded-xl shadow-lg';
historyContainer.innerHTML = `
    <h3 class="text-xl font-bold mb-4 text-gray-800">Riwayat Makanan</h3>
    <div id="historyList" class="space-y-2"></div>
`;
document.querySelector('.max-w-md').appendChild(historyContainer);

function updateHistory(food) {
    history.unshift({ food, timestamp: new Date().toLocaleString() });
    if (history.length > 5) history.pop();
    localStorage.setItem('foodHistory', JSON.stringify(history));
    
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = history.map(item => `
        <div class="flex items-center justify-between p-2 bg-white/60 rounded-lg">
            <span>${item.food.emoji} ${item.food.name}</span>
            <span class="text-sm text-gray-500">${item.timestamp}</span>
        </div>
    `).join('');
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