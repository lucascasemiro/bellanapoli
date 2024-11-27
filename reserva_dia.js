
window.onload = function () {
    localStorage.removeItem('reservas');

    reservas = {};
    diaReservado = null;
    celulaReservada = null;
};

const janeiro = document.getElementById("janeiro");
const fevereiro = document.getElementById("fevereiro");
const marco = document.getElementById("marco");
const abril = document.getElementById("abril");

const leftJan = document.getElementById("leftJan");
const rightJan = document.getElementById("rightJan");
const leftFeb = document.getElementById("leftFeb");
const rightFeb = document.getElementById("rightFeb");
const leftMar = document.getElementById("leftMar");
const rightMar = document.getElementById("rightMar");
const leftApr = document.getElementById("leftApr");
const rightApr = document.getElementById("rightApr");

fevereiro.style.display = "none"; 
marco.style.display = "none"; 
abril.style.display = "none"; 

rightJan.onclick = function () {
    janeiro.style.display = "none"; 
    fevereiro.style.display = "block"; 
};

leftFeb.onclick = function () {
    fevereiro.style.display = "none"; 
    janeiro.style.display = "block"; 
};

rightFeb.onclick = function () {
    fevereiro.style.display = "none"; 
    marco.style.display = "block"; 
};

leftMar.onclick = function () {
    marco.style.display = "none"; 
    fevereiro.style.display = "block"; 
};

rightMar.onclick = function () {
    marco.style.display = "none"; 
    abril.style.display = "block"; 
};

leftApr.onclick = function () {
    abril.style.display = "none"; 
    marco.style.display = "block"; 
};


let reservas = JSON.parse(localStorage.getItem('reservas')) || {};
let diaReservado = null; 
let celulaReservada = null; 

function reservar(dia, mes) {
    const dataReserva = `${dia}-${mes}`;
    console.log(`Tentando reservar: ${dataReserva}`);


    if (diaReservado) {
        if (diaReservado === dataReserva) {

            console.log(`Desmarcando a reserva de: ${dataReserva}`);
            delete reservas[dataReserva];
            localStorage.setItem('reservas', JSON.stringify(reservas));
            celulaReservada.style.backgroundColor = ''; 
            diaReservado = null;
            celulaReservada = null;
            return;
        } else {

            console.log(`Desmarcando a reserva anterior de: ${diaReservado}`);
            delete reservas[diaReservado];
            localStorage.setItem('reservas', JSON.stringify(reservas));
            celulaReservada.style.backgroundColor = ''; 
        }
    }


    console.log(`Reservando: ${dataReserva}`);
    reservas[dataReserva] = true;
    localStorage.setItem('reservas', JSON.stringify(reservas));
    this.style.backgroundColor = 'rgb(150 132 135 / 63%)';


    diaReservado = dataReserva;
    celulaReservada = this;
}


document.querySelectorAll('.cal td[data-dia]').forEach(function(cell) {
    cell.addEventListener('click', function() {
        const dia = this.getAttribute('data-dia');
        const mes = this.getAttribute('data-mes');
        console.log(`Célula clicada: Dia ${dia}, Mês ${mes}`);
        reservar.call(this, dia, mes); 
    });
});

function voltar(){
    window.location.href = "../inicio/index.html"; 
}

function mesa() {
    let reservas = JSON.parse(localStorage.getItem('reservas')) || {}; 
    if (Object.keys(reservas).length > 0) {
        window.location.href = "reserva_mesa.html"; 
    } else {
        window.location.href = "reserva_dia.html"; 
    }
}
