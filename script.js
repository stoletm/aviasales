const resultBtns = document.querySelectorAll('.results__buttons button');
resultBtns.forEach(btn => {
    btn.addEventListener('click', () => btn.classList.toggle('active-result-button'))
}); 
