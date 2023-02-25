// @ts-check

/**
 * 입력된 모든 숫자의 합
 * @param { number[] } args
 * @returns number
 */
const sum = (...args) => args.reduce((acc, curr) => acc + curr);

sum(1, 2, 3, 4, 5);

sum("1", 2, 3, 4, 5);