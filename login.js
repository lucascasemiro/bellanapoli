function submit() {
  const email = document.getElementById('emailLogin').value.trim();
  const password = document.getElementById('passwordLogin').value;

  if (email === "admin" && password === "admin123") {
    window.location.href = "admin.html";   
    return;  
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    // Aqui você armazena o usuário logado no localStorage
    localStorage.setItem('usuarioLogado', JSON.stringify(user));
    
    window.location.href = "index.html"; 
  } else {
    openModalError(); 
    return;
  }

  closeModalError();
}

function openModalError() {
  let modaler = document.getElementById("modaler");
  modaler.style.display = "flex";
}


function closeModalError() {
  let modaler = document.getElementById("modaler");
  modaler.style.display = "none";
}


function retorne() {
  window.history.back();
}

function register(){
  window.location.href = "cadastro.html"; 
}
