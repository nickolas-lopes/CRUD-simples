function local(){
    let dados = [ { "id":1,"nome":"will","senha":123 }, 
                  { "id":2,"nome":"bob","senha":2222 }, 
                  { "id":3,"nome":"ringo","senha":3333 } 
                ]       
    let n = JSON.stringify(dados);
    localStorage.setItem("tds", n);     
}
function buscar(){
  let dados = JSON.parse(localStorage.getItem('tds'))
  let pesquisar = document.querySelector('#pesquisar').value
  let id = document.querySelector('#id')
  let login = document.querySelector('#login')
  let senha = document.querySelector('#senha')
  for(let i = 0; i < dados.length; i++){
    if(pesquisar == dados[i].nome){
      id.value = dados[i].id
      login.value = dados[i].nome
      senha.value= dados[i].senha
    }
  }
}
function adicionar(){
  let dados = JSON.parse(localStorage.getItem('tds'))
  let login = document.querySelector('#login').value
  let senha = document.querySelector('#senha').value
  let user = { id: Date.now(), nome: login, senha: senha }
  dados.push(user)
  localStorage.setItem('tds', JSON.stringify(dados))
  tabela()
}
function tabela(){
  let dados = JSON.parse(localStorage.getItem('tds'))
  let tabela = document.querySelector(".table tbody")
  tabela.innerHTML = ''
  for (let i = 0; i < dados.length; i++){
    let linha = document.createElement('tr')
    linha.classList.add('dados')
    linha.innerHTML = `
        <td>${dados[i].id}</td>
        <td>${dados[i].nome}</td>
        <td>${dados[i].senha}</td> 
    `
    tabela.appendChild(linha)
  }
}
tabela()
