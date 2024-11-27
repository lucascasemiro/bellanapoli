window.onload = function() {

   let users = JSON.parse(localStorage.getItem("users"));

   if (users && users.length > 0) { 
      let reg = document.getElementById("reg");
      let log = document.getElementById("log");
      let usertag = document.getElementById("usertag");
      let quit = document.getElementById("quit");
      log.style.display = "none";
      reg.style.display = "none";
      usertag.style.display = "flex";
      quit.style.display = "flex";
      let user = users[0];
      usertag.innerHTML = `${user.nome}  ${user.sobrenome}`;
   }
}

function quit(){
   let reg = document.getElementById("reg");
   let log = document.getElementById("log");
   let usertag = document.getElementById("usertag");
   let quit = document.getElementById("quit");
   log.style.display = "flex";
   reg.style.display = "flex";
   usertag.style.display = "none";
   quit.style.display = "none";
   localStorage.removeItem('users');
}

function rediricionar(){
    window.location.href = '../reserva_dia/reserva_dia.html'

}

 function cadastro(){
    window.location.href = '../cadastro/cadastro.html'
 }

 function reserva(){
   window.location.href = '../reserva_dia/reserva_dia.html'
}

 function login(){
    window.location.href = '../login/login.html'
 }
 function contato(){
   window.location.href = '../contato/contato.html'
}
function inicio(){
   window.location.href = '../inicio/index.html'
}

