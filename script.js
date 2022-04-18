
function AddUser (usuario) {
    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants",{
        name: `${usuario}`
    })
    .then(response=>{
        console.log(response)
        alert("sucesso")
        setInterval(function ManterConexao(usuario){
    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/status",{
        name: `${usuario}`
    })
    .then(response=>{
        console.log(response.data)
        alert('Está mantendo a conexão')
    } )
    promise.catch(error => console.log(error)
)},4000)

    })
    promise.catch(error => console.log(error))
}



function processarReposta(){
    const promise = axios.get("https://mock-api.driven.com.br/api/v6/uol/participants")

    .then(response=>{
        console.log(response.data)
    } )
    promise.catch(error => console.log(error))
	
}

processarReposta()

function PegarUsuario (){
    let usuario = prompt("Qual o seu lindo nome?")
    AddUser (usuario)
    ManterConexao(usuario)
}

PegarUsuario ()


 function envioMensagem(){
    const envio =document.querySelector("input").value;
   const mensagem =document.querySelector(".mensagem");
    mensagem.innerHTML += `<div class="hora">(09:21:45)</div> <div class="remetente"><strong>${usuario}</strong>para<strong>Todos:</strong></div> 
    <div class="checkin"> entra na sala...</div>

 }

 