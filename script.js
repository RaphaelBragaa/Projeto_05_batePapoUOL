
function AddUser (usuario) {
    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants",{
        name: `${usuario}`
    })
    .then(response=>{
        console.log(response)
        alert("sucesso")
        sucessoAoCadastrar()

    })
    promise.catch(error => console.log(error))
}

function sucessoAoCadastrar() {

    alert('cadastrouu')
    setInterval(ManterConexao, 4000)
}

 
function ManterConexao(usuario){
    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/status",{
        name: `${usuario}`
    })
    .then(response=>{
        console.log(response.data)
        alert('Está mantendo a conexão')
    } )
    promise.catch(error => console.log(error)
)



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


let envios=[]


 function envioMensagem(){
    const envio =document.querySelector("input").value;
   const mensagem =document.querySelector(".mensagem");
    while(mensagem > envios.length){
    mensagem.innerHTML += `<div class="hora">(09:21:45)</div> <div class="remetente"><strong>${usuario}</strong>para<strong>Todos:</strong></div> 
    <div class="checkin"> entra na sala...</div>` }}

    envioMensagem()

