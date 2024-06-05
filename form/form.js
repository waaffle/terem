const form = document.querySelector(".myForm");

function handleSubmit(e){
    e.preventDefault();
    const form = document.querySelector('.myForm');
    const formData = new FormData(form);

    const formObject = Object.fromEntries(formData.entries());
    const jsonString = JSON.stringify(formObject);

    document.querySelector(".result").innerText  = jsonString;
    const url = './handler.js?' + new URLSearchParams(formData);

    fetch(url, {
        method: 'GET'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        else return response.text();
    })
    .then(data => {
        alert (data);
    });

    form.reset();
}

form.addEventListener("submit", handleSubmit);


