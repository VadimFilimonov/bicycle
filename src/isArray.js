// @ts-check

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * isArray([1, 2, 3]);
 * // => true
 *
 * isArray(document.body.children);
 * // => false
 *
 * isArray('abc');
 * // => false
 */
const isArray = (value) => {
  return Array.isArray(value);
};

export default isArray;
