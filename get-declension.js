// TODO this doesn't work without /node_modules/ possible microbundle or rollup bug
import mergeOptions from '/node_modules/@dubaua/merge-options';

const OPTION_CONFIG = {
  count: {
    required: true,
    validator: (x) => typeof x === 'number' && isFinite(x),
    description: 'a finite number',
  },
  one: {
    required: true,
    validator: (x) => typeof x === 'string',
    description: 'a string',
  },
  few: {
    required: true,
    validator: (x) => typeof x === 'string',
    description: 'a string',
  },
  many: {
    required: true,
    validator: (x) => typeof x === 'string',
    description: 'a string',
  },
};

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

function getDeclension(config) {
  const validConfig = mergeOptions({
    optionConfig: OPTION_CONFIG,
    userOptions: config,
    preffix: '[getDeclension]:',
    suffix: '\nCheck out documentation https://github.com/dubaua/get-declension',
  });
  const { count, one, few, many } = validConfig;

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

export default getDeclension;
