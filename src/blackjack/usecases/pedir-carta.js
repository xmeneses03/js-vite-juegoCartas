
/**
 * Esta funcion toma una carta de la baraja
 * @param {Array<String>} deck es un arreglo de string con las cartas
 * @returns {String} retorna una nueva carta de la baraja
 */

export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw new Error('No hay cartas en la baraja');
    }
    return deck.pop();
}