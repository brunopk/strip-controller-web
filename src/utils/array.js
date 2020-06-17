/**
 * Replace an entry of the array with another
 * @param {Array} array source array
 * @param {*} value value of the item to replace
 * @param {*} newValue new value
 * @returns Returns a new copy of the array with the replacement
 */
function replace(array, value, newValue){
  let _array = array.slice()
  let index = _array.indexOf(value)
  if(index !== -1)
    _array[index] = newValue
  return _array
}


export {replace}