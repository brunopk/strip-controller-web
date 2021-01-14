/**
 * Replace an entry of the array with another
 * @param {Array} array source array
 * @param {*} value value of the item to replace
 * @param {*} newValue new value
 * @returns Returns a new copy of the array with the replacement
 */
function replace(array, value, newValue) {
  const arrayAux = array.slice();
  const index = arrayAux.indexOf(value);
  if (index !== -1) {
    arrayAux[index] = newValue;
  }
  return arrayAux;
}

/**
 * Replace an entry of the array at specific position
 * @param {Array} array source array
 * @param {Number} index position to replace
 * @param {*} newValue new value
 * @returns Returns a new copy of the array with the replacement
 */
function replaceAt(array, index, newValue) {
  const arrayAux = array.slice();
  if (index !== -1) {
    arrayAux[index] = newValue;
  }
  return arrayAux;
}

export { replace, replaceAt };
