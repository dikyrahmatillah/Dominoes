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

export const flip = (dominoes) => {
  return dominoes.map(([a, b]) => [b, a]);
};

export const removeDuplicateTotal = (dominoes) => {
  const counts = dominoes.reduce((acc, [a, b]) => {
    const key = a < b ? `${a},${b}` : `${b},${a}`;

    acc[key] = (acc[key] || 0) + 1;

    return acc;
  }, {});

  return dominoes.filter(([a, b]) => {
    const key = a < b ? `${a},${b}` : `${b},${a}`;
    return counts[key] === 1;
  });
};

export const remove = (dominoes, removeTotal) => {
  return dominoes.filter((item) => item[0] + item[1] !== removeTotal);
};

export const countDoubleNumber = (dominoes) => {
  return dominoes.filter((item) => item[0] === item[1]).length;
};
