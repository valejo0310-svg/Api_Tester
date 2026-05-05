const url_api = "https://rickandmortyapi.com/api/character"

const response = requestData(url_api);


 async function requestData (url_api){
    const response = await fetch(url_api);
    let data = await response.json();
    let info = data.info;
    const button = document.getElementById("loadMore")
    button.setAttribute("data-next",(info.next== null)?'':info.next)
    button.setAttribute("data-prev",(info.prev == null)?'':info.prev)
    console.log(data.results);
    let getResponse = data.results.length;
    let lista = document.getElementById("caracter");
    
    for (let index = 0; index < getResponse ; index++ ) {
        let caracter = data.results[index];
        let name = caracter.name;
        let gender = caracter.gender;
        let image = caracter.image;
        lista.innerHTML += `<li>
        <h2>${name}</h2>
        <p>${gender}<p>
        <img src="${image}" alt="${name}"><img>
        </li>`;
        console.log(name)

    };

}

function loadMore(){
    const button = document.getElementById("loadMore");
    const next = button.getAttribute ("data-next");
    if (next == ""||next == null){
        console.log("no hay URL")
    }else{
        requestData(next)
    }
};

