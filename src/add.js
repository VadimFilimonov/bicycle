// @ts-check

const DEFAULT_VALUE = 0;

/**
 * Adds two numbers.
 *
 * @category Math
 * @param {number} augend The first number in an addition.
 * @param {number} addend The second number in an addition.
 * @returns {number} - Returns the total.
 * @example
 *
 * add(6, 4);
 * // => 10
 */
const add = (augend, addend) => {
  const normalizedAugend = augend || DEFAULT_VALUE;
  const normalizedAddend = addend || DEFAULT_VALUE;
  return normalizedAugend + normalizedAddend;
};

export default add;
