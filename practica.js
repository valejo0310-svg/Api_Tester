const url = "https://rickandmortyapi.com/api/character";


async function requestData (url){
    const response = await fetch (url);
    let data = await response.json();
    let info = data.info;
    const button = document.getElementById("show_more");
    button.getAttribute("data-next", (info-next == null)?'':info.next);
    button.getAttribute("data-prev", (info.prev == null)? '':info.prev);
    console.log(name);
    let getResponse = data.results.length;
    let list = document.getElementById("caracteres");

    for (let index= 0; index < getResponse; index++){
        let character = data.results[index];
        let name = character.name;
        let gender= character.gender;
        let image = character.image;
    }
}

const response = requestData (url);