function local(){
    let dados = [ { "id":1,"nome":"will","senha":123 }, 
                  { "id":2,"nome":"bob","senha":2222 }, 
                  { "id":3,"nome":"ringo","senha":3333 } 
                ]       
    let n = JSON.stringify(dados);
    localStorage.setItem("tds", n);   
    return dados    
}


function adicionar() {
  var ClienteArray = JSON.parse(localStorage.getItem("tds"))
  let login = document.querySelector("#login").value
  let senha = document.querySelector("#senha").value
  let msg = document.querySelector('.msg')
  if (login == '' && senha == ''){
   msg.textContent = 'Digite login e senha'
  }
  else{
    let user = { id: Date.now(), nome: login, senha: senha }
    ClienteArray.push(user)
    localStorage.setItem("tds", JSON.stringify(ClienteArray))
    msg.textContent = ''
    alert("Registro adicionado.")
  }
  tabela()
}


 function buscar() {
   var dados = JSON.parse(localStorage.getItem("tds"))
   let login = document.querySelector("#pesquisar").value

   for (let i = 0; dados.length > i; i++) {
     if (dados[i] == null && dados[i] != login) {
       alert("Verificando")
     } else { 
       if (login == dados[i].nome) {
       document.querySelector("#id").value = dados[i].id
       document.querySelector("#login").value = dados[i].nome
       document.querySelector("#senha").value = dados[i].senha    
       break
     } 
   }
 }
}

function tabela() {
  let dados = JSON.parse(localStorage.getItem("tds"));
  let tabela = document.querySelector(".table tbody");

  tabela.innerHTML = "";

  dados.forEach((item) => {
    if (item) {
      let linha = document.createElement("tr");
      linha.classList.add('dados')
      linha.innerHTML = `
        <td>${item.id}</td>
        <td>${item.nome}</td>
        <td>${item.senha}</td>
      `;
      tabela.appendChild(linha);
    }
  });
}
tabela()
function atualizar() {
  var dados = JSON.parse(localStorage.getItem("tds"));
  let id = document.querySelector("#id").value;
  let login = document.querySelector("#login").value;
  let senha = document.querySelector("#senha").value;
  for (let i = 0; i < dados.length; i++) {
    if (id == dados[i].id) {
      dados[i] = { id: id, nome: login, senha: senha };
      localStorage.setItem("tds", JSON.stringify(dados));
      alert("Atualizado!");
      break;
    }
  }
  tabela()
}

 function apagarItemVetor() {
   let id = parseInt(document.querySelector("#id").value)
   let login = document.querySelector("#login").value
   var dados = JSON.parse(localStorage.getItem("tds"))
   localStorage.removeItem("tds")
   
  for (let i = 0; dados.length > i; i++) {
     if (dados[i] == null) {
        alert("Verificando")       
     } else { 
       if (id == dados[i].id && login == dados[i].nome) {
       delete dados[i]
       break;
     } 
    }
   }   
   localStorage.setItem("tds", JSON.stringify(dados))
 }

function apagaTudo(){
  localStorage.removeItem("tds")
}

function limpar(){
  document.querySelector("#id").value = ""
  document.querySelector("#login").value = ""
  document.querySelector("#senha").value = "" 
}
