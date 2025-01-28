// Criando um array para armazenar os nomes dos amigos
let arrayFriends = [];

// Função para adicionar amigos
function addFriend() {
    let input = document.getElementById("friendInput"); // Pegue o campo de entrada
    let name = input.value.trim(); // Remova espaços extras

    if (name === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    arrayFriends.push(name); // Adicione o nome ao array
    displayArrayFriends(); // Atualize a lista exibida
    input.value = ""; // Limpe o campo de entrada
}

// Função para exibir os amigos adicionados
function displayArrayFriends() {
    let resultList = document.getElementById("arrayFriends");
    resultList.innerHTML = ""; // Limpar a lista antes de atualizar

    arrayFriends.forEach(function(name) {
        let li = document.createElement("li"); // Criar um item de lista
        li.innerHTML = name; // Atribuir o nome ao item
        resultList.appendChild(li); // Adicionar o item à lista
    });
}

// Função para escolher um amigo secreto aleatoriamente
function pickFriend() {
    if (arrayFriends.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    let randomIndex = Math.floor(Math.random() * arrayFriends.length); // Índice aleatório
    let secretFriend = arrayFriends[randomIndex]; // Nome escolhido

    let resultList = document.getElementById("resultList");
    resultList.innerHTML = `O amigo secreto é: <strong>${secretFriend}</strong>`; // Exibir o resultado
}