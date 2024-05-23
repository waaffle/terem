const form = document.querySelector(".myForm");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    const form = document.querySelector('.myForm');
    const formData = new FormData(form);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    const jsonString = JSON.stringify(formObject);

    document.querySelector(".result").innerText  = jsonString;

    //const queryString = new URLSearchParams(formObject).toString();

    fetch("./handler.js", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
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
}


