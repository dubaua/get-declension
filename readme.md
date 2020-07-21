# Supposed to using with russian language

This helper designed to be used on russian projects so documentation below is on russian.

# Функция для получения корректного склонения числительных

Эта функция принимает конфигурационный объект с четырмя обязательными параметрами. count указывает количество чего-либо. one определяет слово для количества один. few определяет слово для количества несколько. many определяет слово для количества много. Функция возвращает строку содержащую количество и нужное склонение.

# Установка

Используя npm

```
npm install @dubaua/get-declension
```

или yarn

```
yarn add @dubaua/get-declension
```

или если вы хотите использовать как глобальную функцию

```html
<script src="https://unpkg.com/@dubaua/get-declension@1.0.2/dist/get-declension.min.umd.js"></script>
```

# Использование

Все поля конфигурации функции обязательные. Функция работает с целыми, отрицательными и дробными числами.

```js
const children = getDeclension({ count: 5, one: 'ребёнок', few: 'ребёнка', many: 'детей' });
// 5 детей
const apples = getDeclension({ count: 1.5, one: 'яблоко', few: 'яблока', many: 'яблок' });
// 1.5 яблока
const degrees = getDeclension({ count: -30, one: 'градус', few: 'градуса', many: 'градусов' });
// -30 градусов
```

Функция не работает с бесконечностями, NaN, и нечисловыми значениями. Также функция не работает с нестроковыми склонениями или при недостаточном количестве данных. При вводе невалидных данных будет выброшена ошибка типа с описанием проблемы.

```js
const particles = getDeclension({ count: Infinity, one: 'частица', few: 'частицы', many: 'частиц' });
// Uncaught TypeError: Expected count is a finite number, got number Infinity
const water = getDeclension({ one: 'вода', few: 'воды', many: 'вод' });
// Uncaught TypeError: Expected count is a finite number, got undefined undefined
const chili = getDeclension({ count: 1, many: 'чили' });
// Uncaught TypeError: Expected one is a string, got undefined undefined
```

# Лицензия

Нет её. Берите и используйте без ограничений.
