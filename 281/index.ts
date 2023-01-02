export const maxSubarray = (arr: number[], n: number) => {
  if (n > arr.length) {
    throw new Error('I choose you, Pikachu!');
  }

  return arr.slice(0, arr.length + 1 - n).reduce(
    (acc, _, index) => {
      const sample = arr.slice(index, index + n);
      const sum = sample.reduce((total, curr) => total + curr, 0);

      if (sum > acc.largest) {
        return { sample, largest: sum };
      }
      return acc;
    },
    { largest: -Infinity, sample: [] } as { largest: number; sample: number[] },
  ).sample;
};
