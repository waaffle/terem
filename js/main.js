const button1 = document.querySelector('.btn-warning'),
    button2 = document.querySelector('.btn-success'),
    closeButton = document.querySelector('.close--button'),
    group1 = document.querySelector('.group1'),
    block1 = document.querySelector('.group2--block1'),
    block2 = document.querySelector('.group2--block2'),
    modal = document.querySelector('.my--modal'),
    modalInner = document.querySelector('.modal--inner');

button1.addEventListener("click", () => {
    group1.classList.toggle("hide")
})

button2.addEventListener('click', () => {
    block2.classList.toggle("block2--reverse")
})  

closeButton.addEventListener('click', () => {
    modal.classList.toggle('hide');
})

//для закрытия модального окна кликом по фону

modalInner.addEventListener('click', (event) => {
    event._isClick = true;
})

modal.addEventListener('click', (event) => {
    if (event._isClick) return;
    event.currentTarget.classList.add('hide');
})


