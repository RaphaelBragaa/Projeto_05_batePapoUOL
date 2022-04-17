


let usuario = prompt("Qual o seu lindo nome?")


function AddUser (usuario) {
    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants",{
        name: `${usuario}`
    })

    .then(response=>{
        console.log(response)
        alert("sucesso")
    } )
    promise.catch(error => console.log(error))
	
}

AddUser ()

function processarReposta(){
    const promise = axios.get("https://mock-api.driven.com.br/api/v6/uol/participants")

    .then(response=>{
        console.log(response.data)
    } )
    promise.catch(error => console.log(error))
	
}

processarReposta()


