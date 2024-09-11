function showPopup() {
    popup.style.display = 'flex';
}

function closePopup() {
    popup.style.display = 'none';
}

const popup = document.getElementById('popup');
document.getElementById("openPopup").addEventListener('click', showPopup);
document.getElementById("closePopup").addEventListener('click', closePopup);

document.addEventListener('click', function (event) {
    
    if (event.target === popup) {
        closePopup();
    }
});
