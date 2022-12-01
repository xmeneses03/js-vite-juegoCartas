
/**
 * Esta funcion le da valor a la carta
 * @param {String} carta ejemplo: ['7S', '2D', '10H', 'KC', 'JH']
 * @returns {Number} retorna el valor de la carta
 */


export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor) ? (valor === 'A') ? 11 : 10 : valor * 1);
}