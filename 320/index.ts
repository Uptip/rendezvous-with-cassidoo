const operands = [
  { symbol: '+', fn: (a: number, b: number) => a + b },
  { symbol: '-', fn: (a: number, b: number) => a - b },
  { symbol: '*', fn: (a: number, b: number) => a * b },
  { symbol: '/', fn: (a: number, b: number) => a / b },
];

const addOperators = (source: number, target: number) => {
  const digits = `${source}`.split('').map(Number);
  const results = [] as string[];

  const [first, ...rest] = digits;

  const recurse = (
    digits: number[],
    target: number,
    current: number,
    expression: string,
  ) => {
    if (digits.length === 0) {
      if (current === target) {
        results.push(expression);
      }
      return;
    }

    const [first, ...rest] = digits;

    operands.forEach(({ symbol, fn }) => {
      recurse(
        rest,
        target,
        fn(current, first),
        `${expression}${symbol}${first}`,
      );
    });
  };

  recurse(rest, target, first, `${first}`);

  return results;
};
