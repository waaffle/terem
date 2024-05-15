"use strict"

document.addEventListener("DOMContentLoaded", () => {

    setTimeout(showModal, 400);
    hide('.btn-warning', '.group1');
    replace('.btn-success', '.group2--block1', '.group2--block2');
    closeModal('.close--button','.my--modal', '.modal--inner' )
 })


const hide = (buttonSelector, blockSelector) => {
    document.querySelector(buttonSelector).addEventListener("click",
    function()
    {
     document.querySelector(blockSelector).classList.toggle("group1--open")
    })
}

const replace = (buttonSelector, firstBlockSelector, secondBlockSelector) => {
    const button = document.querySelector(buttonSelector),
    block1 = document.querySelector(firstBlockSelector),
    block2 = document.querySelector(secondBlockSelector);
    button.addEventListener('click', () => {
        if(block1.nextElementSibling === block2){
            block1.parentNode.insertBefore(block2, block1)
        }
        else{
            block1.parentNode.insertBefore(block1, block2)
        }
    })
    
}

const showModal = () => {
    var modal = document.querySelector('.my--modal');
    modal.classList.add("open");
}

const closeModal = (buttonSelector, modalSelector, modalInnerSelector) => {
    const button = document.querySelector(buttonSelector),
    modal = document.querySelector(modalSelector),
    modalInner = document.querySelector(modalInnerSelector);

    button.addEventListener('click', () => {
        modal.classList.remove('open');
    })

    modalInner.addEventListener('click', (event) => {
        event._isClick = true;
    })

    modal.addEventListener('click', (event) => {
        if (event._isClick) return;
        event.currentTarget.classList.remove('open');
    })
}

