function getDeclension({ count, single, few, many }) {
  const isFactional = Math.round(count) !== count;
  let declension = many;
  if (isFactional) {
    declension = few;
  } else {
    const units = Math.abs(count % 10);
    const tens = Math.abs(count % 100);
    if (units === 1 && tens !== 11) {
      declension = single;
    } else if (2 <= units && units <= 4 && (tens < 10 || 20 <= tens)) {
      declension = few;
    }
  }
  return `${count} ${declension}`;
}

module.exports = getDeclension;
