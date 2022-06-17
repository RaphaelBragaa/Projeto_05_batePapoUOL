let mensagens=[]

let nome = prompt("Diga seu nome")


function AddUser () {
    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants",{
        name:`${nome}`
    })
    .then(response=>{
        console.log(response)
        alert("sucesso")
        setInterval(ManterConexao, 4000)
    })
    promise.catch(error => console.log(error))
}
AddUser()

 
function ManterConexao(){
    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/status",{
        name: `${nome}`
    })
    .then(response=>{
        console.log(response.data)
        console.log('Está mantendo a conexão')
    } )
    promise.catch(error => console.log(error)
)
}



function processarReposta(){
    const promise = axios.get("https://mock-api.driven.com.br/api/v6/uol/participants")

    .then(response=>{
        console.log(response.data)
    } )
    promise.catch(error => console.log(error))
	
}

processarReposta()

function BuscarMensagens(){
    const promise = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages")

    .then(response =>{
        console.log(response.data)
        mensagens = response.data
        alert("mensagens resgatadas")
        envioMensagem()
    })
    promise.catch(error => console.log(error))
}

BuscarMensagens()

let envios=[]


 function envioMensagem(){
    const envio =document.querySelector(".input").value;
   const mensagem =document.querySelector(".tela2");
    for(i=0;i<mensagens.length;i++){
        if(mensagens[i].type === "status"){
       mensagem.innerHTML += `
    <div class="mensagem status">
         <div class="hora">(${mensagens[i].time})</div> <div class="remetente"><strong>${mensagens[i].from}</strong>para<strong>${mensagens[i].to}</strong></div> 
    <div class="checkin">${mensagens[i].text} </div>
    </div>
    ` } }
        if(mensagens[i].type === "message"){
            mensagem.innerHTML += `
            <div class="mensagem normal">
                 <div class="hora">(${mensagens[i].time})</div> <div class="remetente"><strong>${mensagens[i].from}</strong>para<strong>${mensagens[i].to}</strong></div> 
            <div class="checkin">${mensagens[i].text} </div>
            </div>
            ` } 
        if(mensagens[i].type === "private_message"){
            mensagem.innerHTML += `
            <div class="mensagem reservada">
                 <div class="hora">(${mensagens[i].time})</div> <div class="remetente"><strong>${mensagens[i].from}</strong>para<strong>${mensagens[i].to}</strong></div> 
            <div class="checkin">${mensagens[i].text} </div>
            </div>
            ` 
        }
    }
    
 
    