//http://localhost:5173/
import _ from 'underscore';
import { crearDeck, pedirCarta, valorCarta } from './usecases';
import { turnoComputadora } from './usecases/turno-computadora';
import { crearCartaHTML } from './usecases/crear-carta';

const miModulo = (() => {         //funcion anonima autoinvocada
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');
  
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck(tipos, especiales);
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnDetener.disabled = false;
        btnPedir.disabled = false;
        console.log(deck)
    };

    //turno: 0 = jugador 1 y el ultimo es la computadora
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] += valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno) => {
        const imgCarta = crearCartaHTML(carta, turno);
        divCartasJugadores[turno].append(imgCarta);
    }

    //------------Eventos--------------

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta(deck);
        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0);

        if (puntosJugador > 21) {
            console.warn('Ya perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador, puntosHTML, divCartasJugadores, deck);

        } else if (puntosJugador === 21) {
            console.warn('Ya ganaste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador, puntosHTML, divCartasJugadores, deck);
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0], puntosHTML, divCartasJugadores, deck);
    })

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego
    };

})();

//al final ejeccuto npm run build para compactar todo el codigo

