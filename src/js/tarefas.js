const inputNovaTarefa = document.getElementById('inputNovaTarefa');
const btnAddTarefa = document.getElementById('btnAddTarefa');
const listaTarefas = document.getElementById('listaTarefas');
const janelaEdicao = document.getElementById('janelaEdicao');
const janelaEdicaoFundo = document.getElementById('janelaEdicaoFundo');
const janelaEdicaoBtnFechar = document.getElementById('janelaEdicaoBtnFechar');
const btnAtualizarTarefa = document.getElementById('btnAtualizarTarefa');
const idTarefaEdicao = document.getElementById('idTarefaEdicao');
const inputTarefaNomeEdicao = document.getElementById('inputTarefaNomeEdicao');

inputNovaTarefa.addEventListener('keypress', (e) => {
  if(e.keyCode === 13){
    const tarefa = {
      nome: inputNovaTarefa.value,
      id: gerarId()
    }
    adicionarTarefa(tarefa);
  }
});

btnAddTarefa.addEventListener('click', (e) => {
  
    const tarefa = {
      nome: inputNovaTarefa.value,
      id: gerarId()
    }
    adicionarTarefa(tarefa);
  
});

btnAtualizarTarefa.addEventListener('click', (e) => {
  e.preventDefault
  //Não queremos o #
  let idTarefa = idTarefaEdicao.innerHTML.replace('#', '') = '#' + idTarefa;

  let tarefa = {
    nome: inputTarefaNomeEdicao.value,
    id: idTarefa
  }

  // Atualizando tarefa atual pela nova tarefa

  let tarefaAtual = document.getElementById(''+idTarefa+'');

  if(tarefaAtual){
    let li = criarTagLi(tarefa);
    // Trocamos a tarefa atual pela nova Tarefa
    listaTarefas.replaceChild(li, tarefaAtual);
  
    alternarJanelaEdicao();
  }else {
    alert('Elemento não encontrado')
  }
})

janelaEdicaoBtnFechar.addEventListener('click', (e) => {
  alternarJanelaEdicao();
})

function gerarId(){
  return Math.floor(Math.random() * 100);
};

function adicionarTarefa(tarefa){
  let li = criarLi(tarefa);
  listaTarefas.appendChild(li);
  inputNovaTarefa.value = '';
}

function criarLi(tarefa){
  let li = document.createElement('li');
  li.id = tarefa.id

  let span = document .createElement('span');
  span.classList.add('textoTarefa')
  span.innerHTML = tarefa.nome;

  let div = document.createElement('div');

  let btnEditar = document.createElement('button');
  btnEditar.classList.add('btnAcao');
  btnEditar.innerHTML = 'Editar'
  btnEditar.setAttribute('onclick', 'editar('+tarefa.id+')');

  let btnExcluir = document.createElement('button');
  btnExcluir.classList.add('btnAcao');
  btnExcluir.innerHTML = 'Excluir';
  btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')');

  div.appendChild(btnEditar);
  div.appendChild(btnExcluir);

  li.appendChild(span);
  li.appendChild(div);
  return li
}

function editar (idTarefa){

    let li = document.getElementById(''+idTarefa+'');
    if(li){
      idTarefaEdicao.innerHTML = '#' + idTarefa;
      inputTarefaNomeEdicao.value = li.textContent;
      alternarJanelaEdicao();
    }else {
      alert('Elemento não encontrado')
    }
  
}


function excluir (idTarefa){
  let confirmacao = window.confirm('Deseja mesmo excluir?');
  if(confirmacao){
    let li = document.getElementById(''+idTarefa+'');
    if(li){
      listaTarefas.removeChild(li);
    }else {
      alert('Elemento não encontrado')
    }
  }
}

function alternarJanelaEdicao(){
  janelaEdicao.classList.toggle('abrir');
  janelaEdicaoFundo.classList.toggle('abrir');
}
