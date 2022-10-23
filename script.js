const resultBtns = document.querySelectorAll('.results__buttons button');
resultBtns.forEach(btn => {
    // btn.addEventListener('click', () => btn.classList.toggle('active-result-button'));
    btn.addEventListener('click', () => {
        resultBtns.forEach(element => {
            element.classList.remove('active-result-button');
            btn.classList.add('active-result-button')
        })
    })
}); 

