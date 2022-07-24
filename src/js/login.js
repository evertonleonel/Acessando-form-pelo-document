const form = document.forms.registro;
const { usuario, senha } = form;

form.addEventListener('submit', (e) => {
  
  if (!usuario.value || !senha.value){
    e.preventDefault();
  }

  function logar(){
    window.location.href = "/src/main.html"
  }
  
  logar()

});



