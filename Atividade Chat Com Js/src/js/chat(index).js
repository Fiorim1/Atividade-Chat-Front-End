// Criar função de enviar a mensagem
function sendMessage() {
    // document.querySelector("#user-input"): Seleciona o elemento HTML que possui o 
    // ID "user-input".
    let userInput = document.querySelector("#user-input").value; // .value: Acessa op valor 
                                                                 // desse elemento, que 
                                                                 // contém o valor inserido pelo 
                                                                 // usuário em um campo de 
                                                                 // entrada HTML.
    // document.querySelector("#chat-container"): Seleciona o elemento HTML que possui 
    // o ID "chat-container".
    let chatContainer = document.querySelector("#chat-container");
    // Essa linha cria um novo elemento HTML <div>
    let newMessage = document.createElement("div");
    // Vai adicionar a estilização da class (client-message) na div
    newMessage.classList.add("client-message");
    
    // Criando um elemento H4
    let messageHeader = document.createElement("h4");
    // Adicionando um valor ao elemento H4 criado a cima
    messageHeader.textContent = "Cliente";
    // Coloca o elemento H4 criado com filho na div criada na linha 14
    newMessage.appendChild(messageHeader);
    
    // Criando um elemento P (parágrafo)
    let messageContent = document.createElement("p");
    // Vai inseiri o valor dentro do elemento p, igual o valor da variável
    // userInput (linha 5), onde seria o que o usuário digitou
    messageContent.textContent = userInput;
    // Coloca o elemento p criado com filho na div criada na linha 14
    newMessage.appendChild(messageContent);
    
    // Aqui irá fazer que a nova mensagem, vire o filho da div pai (chatContainer)
    chatContainer.appendChild(newMessage);
  }
