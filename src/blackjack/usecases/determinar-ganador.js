/**
 * mensaje ganador
 * @param {Number} puntosMinimos 
 * @param {Number} puntosComputadora 
 */

export const determinarGanador = (puntosMinimos, puntosComputadora) => {
    //const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
        if (puntosComputadora > 21) {
            alert('Jugador gana');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana');
        } else if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana');
        } else {
            alert('Computadora gana');
        }
    }, 200);
}