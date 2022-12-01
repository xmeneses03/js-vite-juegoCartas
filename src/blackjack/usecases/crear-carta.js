
/**
 * 
 * @param {String} carta 
 * @param {Number} turno 
 * @returns {HTMLImageElement}
 */


export const crearCartaHTML = (carta, turno) => {
    if (!carta){throw new Error('la carta es un argumento obligatorio')};
    //if (turno){throw new Error('el turno es un argumento obligatorio')};

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    return imgCarta;
}

