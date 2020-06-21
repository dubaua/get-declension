/**
 * Merges given count and on of declensions: one, few or many into a string
 * Соединяет переданное число и одно из трех склонений числительных в строку
 * @param {Object} config - необходимая конфигурация из числа, и склонений для количеств один, несколько и много
 * @param {number} config.count - количество чего-нибудь
 * @param {string} config.one - слово, описывающее один
 * @param {string} config.few - слово, описывающее несколько
 * @param {string} config.many - слово, описывающее много
 * @example
 * getDeclension({ count: 5, one: 'ребёнок', few: 'ребёнка', many: 'детей' });
 * // 5 детей
 * @return {string} строка из числа и нужного склонения
 */

function getDeclension({ count, one, few, many }) {
  if (typeof count !== 'number' || !isFinite(count)) {
    throw new TypeError(`Expected count is a finite number, got ${typeof count} ${count}`);
  }
  if (typeof one !== 'string') {
    throw new TypeError(`Expected one is a string, got ${typeof one} ${one}`);
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
      declension = one;
    } else if (2 <= units && units <= 4 && (tens < 10 || 20 <= tens)) {
      declension = few;
    }
  }
  return `${count} ${declension}`;
}

module.exports = getDeclension;
