//------------turno de la computadora-----------
import { pedirCarta, valorCarta } from "./index";
import { determinarGanador } from "./determinar-ganador";
import { crearCartaHTML } from "./crear-carta";
/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLDivElement} divCartasJugadores
 * @param {Array<String>} deck 
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasJugadores, deck) => {

    if(!puntosMinimos) throw new Error('puntos minimos son necesarios');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora += valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta, 1)
        divCartasJugadores[1].append(imgCarta);    
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosMinimos, puntosComputadora);
}

