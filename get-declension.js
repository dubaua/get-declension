function getDeclension(count, [single, few, many]) {
  const units = Math.abs(count % 10);
  const tens = Math.abs(count % 100);
  // 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 .. 25 яблок
  let declension = many;
  if (units === 1 && tens !== 11) {
    // 1, 21 .. 91 яблоко
    declension = single;
  } else if (2 <= units && units <= 4 && (tens < 10 || 20 <= tens)) {
    // 2 3 4 22 23 24 .. 92 93 94 яблока
    declension = few;
  }
  return declension;
}

module.exports = getDeclension;
