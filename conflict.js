// @ts-check

/**
 * 입력된 모든 숫자의 합
 * @param { number[] } args
 * @returns number
 */
const sum = (...args) => args.reduce((acc, curr) => acc + curr);

sum(1, 2, 3, 4, 5, 6, 7); // work2

sum(1, 2, 3, 4, 5, 6); // work2
