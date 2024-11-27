window.onload = function() {

   let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));


   if (usuarioLogado){

       let reg = document.getElementById("reg");
       let log = document.getElementById("log");
       let usertag = document.getElementById("usertag");
       let quit = document.getElementById("quit");


       log.style.display = "none";
       reg.style.display = "none";
       usertag.style.display = "flex";
       quit.style.display = "flex";

       usertag.innerHTML = `${usuarioLogado.nome} ${usuarioLogado.sobrenome}`;
   }
}


function quit() {

   localStorage.removeItem('usuarioLogado');
   

   let reg = document.getElementById("reg");
   let log = document.getElementById("log");
   let usertag = document.getElementById("usertag");
   let quit = document.getElementById("quit");

   log.style.display = "flex";
   reg.style.display = "flex";
   usertag.style.display = "none";
   quit.style.display = "none";

}


function reserva() {

   let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));


   if (!usuarioLogado) {

      window.location.href = 'login.html';
   } else {
      window.location.href = 'reserva_dia.html';
   }
}


function cadastro() {
   window.location.href = 'cadastro.html';
}


function login() {
   window.location.href = 'login.html';
}


function contato() {
   window.location.href = 'contato.html';
}




function inicio() {
   window.location.href = 'index.html';  
}
function redirecionar() {
   window.location.href = 'reserva_dia.html';  
}
