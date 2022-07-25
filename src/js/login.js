const form = document.forms.registro;
const { usuario, senha } = form;

form.addEventListener('submit', (e) => {
  
  if (!usuario.value || !senha.value){
    e.preventDefault();
  }

  function logar(e){
    e.preventDefault();
    window.location.href = "/src/tarefa.html"
  }
  
  logar(e)

});



