const replaceZeros = (str: string) =>
  str.replace(/0+/g, match => `${match.length}`);
