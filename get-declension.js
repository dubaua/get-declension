function getDeclension({ count, single, few, many }) {
  if (typeof count !== 'number' || !isFinite(count)) {
    throw new TypeError(`Expected count is a finite number, got ${typeof count} ${count}`);
  }
  if (typeof single !== 'string') {
    throw new TypeError(`Expected single is a string, got ${typeof single} ${single}`);
  }
  if (typeof few !== 'string') {
    throw new TypeError(`Expected few is a string, got ${typeof few} ${few}`);
  }
  if (typeof many !== 'string') {
    throw new TypeError(`Expected many is a string, got ${typeof many} ${many}`);
  }

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
