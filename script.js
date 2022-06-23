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

    promise.then(GerarMensagens)
    promise.catch(error => console.log(error))
}

BuscarMensagens()

function envioMensagem(){
    const texto =document.querySelector(".input").value;
    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages",
    {
        from: `${nome}`,
        to: "Todos",
        text: `${texto}`,
        type: "message" // ou "private_message" para o bônus
    }
    )
    .then(response=>{
        console.log(response.data)
        console.log('Mensagem enviada')
    } )
    promise.catch(error => console.log(error)
)
}





 function GerarMensagens(resposta){
    console.log(resposta.data)
   const mensagem =document.querySelector(".tela2");
   mensagem.scrollIntoView()
    for(let i=0;i<resposta.data.length;i++){
        const message = resposta.data[i];
        if(message.type === "status"){
       mensagem.innerHTML += `
    <div class="mensagem status">
         <div class="hora">(${resposta.data[i].time})</div> <div class="remetente"><strong>${resposta.data[i].from}</strong>para<strong>${resposta.data[i].to}</strong></div> 
    <div class="checkin">${resposta.data[i].text} </div>
    </div>
    ` } 
         if(message.type === "message"){
            mensagem.innerHTML += `
         <div class="mensagem normal">
                 <div class="hora">(${resposta.data[i].time})</div> <div class="remetente"><strong>${resposta.data[i].from}</strong>para<strong>${resposta.data[i].to}</strong></div> 
            <div class="checkin">${resposta.data[i].text} </div>
             </div>
             ` } 
        if(message.type === "private_message"){
            mensagem.innerHTML += `
            <div class="mensagem reservada">
                 <div class="hora">(${resposta.data[i].time})</div> <div class="remetente"><strong>${resposta.data[i].from}</strong>para<strong>${resposta.data[i].to}</strong></div> 
            <div class="checkin">${resposta.data[i].text} </div>
            </div>
            ` 
        }
    }
}
 
    