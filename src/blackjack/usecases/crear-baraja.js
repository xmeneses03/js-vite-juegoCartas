import _ from 'underscore';

/**
 * Esta funcion crea una nueva baraja de cartas
 * @param {Array<String>} tiposDeCarta ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna una nueva baraja de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error('tiposDeCarta es obligatorio como un arreglo de String');

    if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error('tiposEspeciales es obligatorio como un arreglo de String');

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let especial of tiposEspeciales) {
            deck.push(especial + tipo);
        }
    }
    return _.shuffle(deck);
}

//export default crearDeck;
