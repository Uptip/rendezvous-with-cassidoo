export const sumEveryOther = (num: number): number =>
  `${num}`
    .replace(/\D/g, '')
    .split('')
    .reduce((acc, curr, i) => acc + (i % 2 == 1 ? Number(curr) : 0), 0);
