/**
 * Creates an arbitrary number of objects from the passed arguments.
 *
 * @param {...*} args - A variable number of arguments of any type.
 * @returns {Object} - An object composed of the passed arguments as properties.
 */
export function createData(...args) {
  return {...args};
}
