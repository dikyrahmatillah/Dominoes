// export const sortAsc = (dominoes) => {
//   const length = dominoes.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length - i - 1; j++) {
//       const sumDominoesFirst = dominoes[j][0] + dominoes[j][1];
//       const sumDominoesSecond = dominoes[j + 1][0] + dominoes[j + 1][1];
//       if (
//         (sumDominoesFirst === sumDominoesSecond &&
//           dominoes[j][0] > dominoes[j + 1][0]) ||
//         sumDominoesFirst > sumDominoesSecond
//       ) {
//         [dominoes[j], dominoes[j + 1]] = [dominoes[j + 1], dominoes[j]];
//       }
//     }
//   }

//   return dominoes;
// };
export const sortAsc = (dominoes) => {
  dominoes.sort((a, b) => {
    const sumA = a[0] + a[1];
    const sumB = b[0] + b[1];

    if (sumA !== sumB) {
      return sumA - sumB;
    }

    return a[0] - b[0];
  });
  return dominoes;
};

export const sortDesc = (dominoes) => {
  return dominoes.sort((a, b) => {
    const sumA = a[0] + a[1];
    const sumB = b[0] + b[1];

    if (sumA !== sumB) {
      return sumB - sumA;
    }

    return b[0] - a[0];
  });
};

// export const sortDesc = (dominoes) => {
//   const length = dominoes.length;
//   let max;
//   for (let i = 0; i < length; i++) {
//     max = i;
//     for (let j = i + 1; j < length; j++) {
//       const sumDominoesMax = dominoes[max][0] + dominoes[max][1];
//       const sumDominoesJ = dominoes[j][0] + dominoes[j][1];
//       if (
//         sumDominoesMax < sumDominoesJ ||
//         (sumDominoesMax === sumDominoesJ && dominoes[max][0] < dominoes[j][0])
//       ) {
//         max = j;
//       }
//     }
//     if (max !== i) [dominoes[max], dominoes[i]] = [dominoes[i], dominoes[max]];
//   }

//   return dominoes;
// };

export const flip = (dominoes) => {
  return dominoes.map(([a, b]) => [b, a]);
};

export const removeDuplicate = (dominoes) => {
  return dominoes.filter((item, index, arr) => {
    return (
      index ===
      arr.findIndex((domino) => domino[0] + domino[1] === item[0] + item[1])
    );
  });
};

export const remove = (dominoes, numRemove) => {
  return dominoes.filter((item) => item[0] + item[1] !== numRemove);
};

export const countDoubleNumber = (dominoes) => {
  const duplicate = dominoes.filter((item) => item[0] === item[1]);
  return duplicate.length;
};
