const magicButton = document.getElementById('magicButton');
const buttonText = magicButton.querySelector('.btn-text');
const popupWrapper = document.getElementById('popupWrapper'); // Memastikan ID cocok dengan HTML

magicButton.addEventListener('click', () => {
    magicButton.classList.add('clicked');
    magicButton.style.pointerEvents = 'none'; 
    
    buttonText.innerText = "Good, then"; 

    let secondsPassed = 0;

    const textTimer = setInterval(() => {
        secondsPassed++;

        if (secondsPassed === 2) {
            buttonText.innerText = "congrats!";
        } 
        else if (secondsPassed === 5) {
            clearInterval(textTimer);
            
            buttonText.innerText = "you're happy";
            
            magicButton.classList.remove('clicked'); 
            magicButton.classList.add('vanish');    
            
            setTimeout(() => {
                magicButton.style.display = 'none'; 
                
                // Memastikan popupWrapper ada sebelum menambahkan class agar tidak eror
                if (popupWrapper) {
                    popupWrapper.classList.add('show');
                } else {
                    console.error("Eror: Elemen dengan ID 'popupWrapper' tidak ditemukan di HTML!");
                }
            }, 500); 
        }
    }, 1000);
});
