window.onload = function () {
    localStorage.removeItem('mesasSelecionadas');
    const mesas = document.querySelectorAll('td');
    mesas.forEach((mesa) => {
        if (!isNaN(mesa.id)) {
            mesa.style.backgroundColor = '';
        }
    });
};

const mesas = document.querySelectorAll('td');
let mesasSelecionadas = [];


mesas.forEach((mesa) => {
    if (!isNaN(mesa.id)) {
        mesa.addEventListener('click', () => {
            const mesaId = mesa.id;

            if (mesa.style.backgroundColor === 'rgb(150 132 135 / 63%)') {

                mesa.style.backgroundColor = '';

                const index = mesasSelecionadas.indexOf(mesaId);
                if (index > -1) {
                    mesasSelecionadas.splice(index, 1);
                }
            } else {

                mesa.style.backgroundColor = 'rgb(150 132 135 / 63%)';

                mesasSelecionadas.push(mesaId);
            }


            salvarMesasSelecionadas();
        });
    }
});

function salvarMesasSelecionadas() {
    localStorage.setItem('mesasSelecionadas', JSON.stringify(mesasSelecionadas));
}

function voltar() {
    window.location.href = "reserva_dia.html";
}

function comida() {

    if (mesasSelecionadas.length > 0) {
        window.location.href = "reserva_comida.html";
    } else {
        window.location.href = "reserva_mesa.html";
    }
}
