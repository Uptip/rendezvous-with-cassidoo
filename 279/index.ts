const capitalAfterVowel = (words: string) =>
  words
    .split('')
    .reduce(
      (acc, curr, index, arr) => [
        ...acc,
        !'aeiouy'.includes(curr) && 'aeiouy'.includes(arr[index - 1])
          ? curr.toUpperCase()
          : curr,
      ],
      [] as string[],
    )
    .join('');
