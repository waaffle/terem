"use strict"

const button1 = document.querySelector('.btn-warning'),
    button2 = document.querySelector('.btn-success'),
    closeButton = document.querySelector('.close--button'),
    group1 = document.querySelector('.group1'),
    container = document.querySelector('.my--container'),
    block1 = document.querySelector('.group2--block1'),
    block2 = document.querySelector('.group2--block2'),
    modal = document.querySelector('.my--modal'),
    modalInner = document.querySelector('.modal--inner');

setTimeout(showModal, 400);


button1.addEventListener("click", () =>
{
    group1.classList.toggle("group1--open")
})


button2.addEventListener('click', () => {
    if(block1.nextElementSibling === block2){
        container.insertBefore(block2, block1)
    }
    else{
        container.insertBefore(block1, block2)
    }
})
    

function showModal() {
    modal.classList.add("open");
}

closeButton.addEventListener('click', () => {
    modal.classList.toggle('open');
})


//для закрытия модального окна кликом по фону

modalInner.addEventListener('click', (event) => {
    event._isClick = true;
})

modal.addEventListener('click', (event) => {
    if (event._isClick) return;
    event.currentTarget.classList.remove('open');
})


