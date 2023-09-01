window.addEventListener('DOMContentLoaded', ()=> {

    function interactive() {
        const closeBtn = document.querySelectorAll('.close-btn');
        const openBtn = document.querySelectorAll('.btn__contact');
        const overlay = document.querySelector('.overlay');
        const modal = document.querySelector('.modal');
        const cookie = document.querySelector('.cookie');
    
        function showCookie() {
            cookie.style.bottom = '-25px';
        }
    
        setTimeout(showCookie, 3000);
    
        function closeElem() {
            cookie.style.display = 'none';
        }
    
        closeBtn.forEach(btn => btn.addEventListener('click', closeElem));
    
        function showModal() {
            overlay.style.display = 'flex';
            modal.style.display = 'flex';
        }
    
        function hideModal() {
            overlay.style.display = 'none';
            modal.style.display = 'none';
        }

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                hideModal();
            }
        });
    
        openBtn.forEach(btn => btn.addEventListener('click', showModal));
        closeBtn.forEach(btn => btn.addEventListener('click', hideModal));        
    }    
    interactive();
    
    
    
})

    
        
    
