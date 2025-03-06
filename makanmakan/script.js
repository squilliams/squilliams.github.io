const foods = [
    { name: 'Nasi Goreng', emoji: '🍚' },
    { name: 'Rendang', emoji: '🥘' },
    { name: 'Sate Ayam', emoji: '🍖' },
    { name: 'Gado-gado', emoji: '🥗' },
    { name: 'Soto Ayam', emoji: '🍜' },
    { name: 'Bakso', emoji: '🍲' },
    { name: 'Mie Goreng', emoji: '🍝' },
    { name: 'Martabak', emoji: '🥞' },
    { name: 'Sop Buntut', emoji: '🍖' },
    { name: 'Bebek Goreng', emoji: '🍗' },
    { name: 'Nasi Uduk', emoji: '🍚' },
    { name: 'Sate Padang', emoji: '🍖' },
    { name: 'Soto Betawi', emoji: '🥘' },
    { name: 'Ayam Goreng', emoji: '🍗' },
    { name: 'Nasi Campur', emoji: '🍱' },
    { name: 'Pecel Lele', emoji: '🐟' }
];

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
        foods.forEach((food) => {
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
    
    isSpinning = true;
    spinButton.disabled = true;
    resultDiv.classList.add('hidden');
    
    const itemHeight = 60; // Height of each slot item
    const totalItems = foods.length;
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
        const selectedFood = foods[randomIndex];
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
        websiteLink.style.marginBottom = '40px';
        websiteLink.style.color = '#ef4444';
        websiteLink.style.fontSize = '24px';
        websiteLink.style.fontWeight = 'bold';
        websiteLink.textContent = 'tyasono.xyz/makanmakan';

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