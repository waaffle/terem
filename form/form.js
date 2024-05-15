const form = document.querySelector(".myForm");

form.addEventListener("submit", handleSubmit)

async function handleSubmit(e){
    e.preventDefault();
    let jsonData = getFormData();
    document.querySelector(".result").innerText = jsonData;
    const data = await fetchData(jsonData);
    alert(`Данные получены: ${data}`);
}




function getFormData(){
    let formData = {
        select1: document.getElementById("select1").value,
        select2: document.getElementById("select2").value,
        select3: document.getElementById("select3").value,
        select4: document.getElementById("select4").value,
        select5: document.getElementById("select5").value,
        name: document.getElementById("input1").value,
        email: document.getElementById("input2").value
    };

    let jsonData = JSON.stringify(formData);
    return jsonData;
}

function fetchData(jsonData){
    return getData({
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: jsonData,
    })
}

function getData (request){
    return request.body;
}
