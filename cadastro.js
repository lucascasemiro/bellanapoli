// pega os bgl do html
const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordCInput = document.getElementById('passwordC');
const termsInput = document.getElementById('checkbox');
const modalpass = document.getElementById('modalpass');
const modalname = document.getElementById('modalname');
const modalcheck = document.getElementById('modalcheck');
const email = document.getElementById('modalEmail');




// Função principal 
function submit() {
  const nome = nomeInput.value.trim();
  const sobrenome = sobrenomeInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const password2 = passwordCInput.value;
  const terms = termsInput.checked;

  
  if (!nome || !sobrenome) {
    openModalname();
    return;
  }

  if(!email){
    openModalEmail();
    return;
  }
  
  // Ve se ta certin
  if (!password || !password2 || password !== password2) {
    openModalpass();
    return;
  }
  closeModalpass();

  if (!terms) {
    openModalcheck();
    return;
  }
  closeModalcheck();

  // Manda os bgl pro local storage
  const newUser = { nome, sobrenome, email, password };
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  // Limpa o formulário
  document.querySelectorAll('.inputs input').forEach(input => {
    if (input.type !== 'checkbox') {
      input.value = '';
    } else {
      input.checked = false;
    }
  });
  // Manda pro login
  window.location.href = 'login.html';
}

// abre e fecha de modal
function openModalpass() {
  modalpass.style.display = 'flex';
}

function closeModalpass() {
  modalpass.style.display = 'none';
}

function openModalname() {
  modalname.style.display = 'flex';
}

function closeModalname() {
  modalname.style.display = 'none';
}

function openModalcheck() {
  modalcheck.style.display = 'flex';
}

function closeModalcheck() {
  modalcheck.style.display = 'none';
}

function openModalEmail() {
  modalEmail.style.display = 'flex';
}

function closeModalEmail() {
  modalEmail.style.display = 'none';
}

function retorne() {
  window.location.href = '../inicio/index.html';
}
