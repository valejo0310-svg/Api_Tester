const url_api = "https://rickandmortyapi.com/api/character"

/**
 * requestData
 * 
 * send request to endPoint
 * @param {string} url_api 
 */

 async function requestData (url_api){
    const response = await fetch(url_api);
    let data = await response.json();
    getElementButton(document, 'set', data.info)
    renderHTML (data);
}
/**
 * 
 * loadMore
 * 
 * Call @function getElementButton
 */

function loadMore(){
    getElementButton(document, 'get')
};

/**
 * GetElementButton
 * 
 * @param {object} elementButton
 * @param {object} button 
 * @param {string} operation
 */
function getElementButton(elementButton, operation = 'get', info = null){
    const button= elementButton.getElementById("loadMore");
    if (operation == 'get'){
        const next = button.getAttribute ("data-next");
        if (next == ""||next == null){
        console.log("no hay URL")
    }else{
        requestData(next)
    }
    }else{
        button.setAttribute("data-next",(info.next== null)?'':info.next)
        button.setAttribute("data-prev",(info.prev == null)?'':info.prev)
    }
    
}

/**
 * 
 * @param {Object} element
 * @param {object}data
 */

function renderHTML (data){
    let lista = document.getElementById("caracter");
    let getResponse = data.results.length;
    for (let index = 0; index < getResponse ; index++ ) {
        let caracter = data.results[index];
        lista.innerHTML += `<li>
        <h2>${caracter.name}</h2>
        <p>${caracter.gender}<p>
        <img src="${caracter.image}" alt="${caracter.name}"><img>
        </li>`;
        
    }
}
const response = requestData(url_api);