import assert from 'assert';
import getDeclension from './get-declension.js';

describe('getDeclension', () => {
  describe('testing edge cases', () => {
    it('0 returns many', () => {
      const result = getDeclension({ count: 0, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '0 яблок');
    });

    it('0.5 returns few', () => {
      const result = getDeclension({ count: 0.5, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '0.5 яблока');
    });

    it('1 returns one', () => {
      const result = getDeclension({ count: 1, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '1 яблоко');
    });

    it('1.5 returns few', () => {
      const result = getDeclension({ count: 1.5, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '1.5 яблока');
    });

    it('2 returns few', () => {
      const result = getDeclension({ count: 2, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '2 яблока');
    });

    it('3 returns few', () => {
      const result = getDeclension({ count: 3, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '3 яблока');
    });

    it('4 returns few', () => {
      const result = getDeclension({ count: 4, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '4 яблока');
    });

    it('5 returns many', () => {
      const result = getDeclension({ count: 5, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '5 яблок');
    });

    it('6 returns many', () => {
      const result = getDeclension({ count: 6, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '6 яблок');
    });

    it('7 returns many', () => {
      const result = getDeclension({ count: 7, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '7 яблок');
    });

    it('8 returns many', () => {
      const result = getDeclension({ count: 8, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '8 яблок');
    });

    it('9 returns many', () => {
      const result = getDeclension({ count: 9, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '9 яблок');
    });

    it('10 returns many', () => {
      const result = getDeclension({ count: 10, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '10 яблок');
    });

    it('11 returns many', () => {
      const result = getDeclension({ count: 11, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '11 яблок');
    });

    it('12 returns many', () => {
      const result = getDeclension({ count: 12, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '12 яблок');
    });

    it('13 returns many', () => {
      const result = getDeclension({ count: 13, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '13 яблок');
    });

    it('14 returns many', () => {
      const result = getDeclension({ count: 14, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '14 яблок');
    });

    it('15 returns many', () => {
      const result = getDeclension({ count: 15, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '15 яблок');
    });

    it('16 returns many', () => {
      const result = getDeclension({ count: 16, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '16 яблок');
    });

    it('17 returns many', () => {
      const result = getDeclension({ count: 17, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '17 яблок');
    });

    it('18 returns many', () => {
      const result = getDeclension({ count: 18, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '18 яблок');
    });

    it('19 returns many', () => {
      const result = getDeclension({ count: 19, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '19 яблок');
    });

    it('20 returns many', () => {
      const result = getDeclension({ count: 20, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '20 яблок');
    });

    it('21 returns one', () => {
      const result = getDeclension({ count: 21, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '21 яблоко');
    });

    it('22 returns few', () => {
      const result = getDeclension({ count: 22, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '22 яблока');
    });

    it('23 returns few', () => {
      const result = getDeclension({ count: 23, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '23 яблока');
    });

    it('24 returns few', () => {
      const result = getDeclension({ count: 24, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '24 яблока');
    });

    it('25 returns many', () => {
      const result = getDeclension({ count: 25, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '25 яблок');
    });

    it('100 returns many', () => {
      const result = getDeclension({ count: 100, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '100 яблок');
    });

    it('101 returns one', () => {
      const result = getDeclension({ count: 101, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '101 яблоко');
    });

    it('102 returns few', () => {
      const result = getDeclension({ count: 102, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '102 яблока');
    });

    it('103 returns few', () => {
      const result = getDeclension({ count: 103, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '103 яблока');
    });

    it('104 returns few', () => {
      const result = getDeclension({ count: 104, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '104 яблока');
    });

    it('105 returns many', () => {
      const result = getDeclension({ count: 105, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '105 яблок');
    });

    it('1000000 returns many', () => {
      const result = getDeclension({ count: 1000000, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '1000000 яблок');
    });

    it('1000001 returns one', () => {
      const result = getDeclension({ count: 1000001, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '1000001 яблоко');
    });

    it('1000002 returns few', () => {
      const result = getDeclension({ count: 1000002, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '1000002 яблока');
    });

    it('1000003 returns few', () => {
      const result = getDeclension({ count: 1000003, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '1000003 яблока');
    });

    it('1000004 returns few', () => {
      const result = getDeclension({ count: 1000004, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '1000004 яблока');
    });

    it('1000005 returns many', () => {
      const result = getDeclension({ count: 1000005, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '1000005 яблок');
    });

    it('-0.5 returns few', () => {
      const result = getDeclension({ count: -0.5, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-0.5 яблока');
    });

    it('-1 returns one', () => {
      const result = getDeclension({ count: -1, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-1 яблоко');
    });

    it('-1.5 returns few', () => {
      const result = getDeclension({ count: -1.5, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-1.5 яблока');
    });

    it('-2 returns few', () => {
      const result = getDeclension({ count: -2, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-2 яблока');
    });

    it('-3 returns few', () => {
      const result = getDeclension({ count: -3, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-3 яблока');
    });

    it('-4 returns few', () => {
      const result = getDeclension({ count: -4, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-4 яблока');
    });

    it('-5 returns many', () => {
      const result = getDeclension({ count: -5, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-5 яблок');
    });

    it('-6 returns many', () => {
      const result = getDeclension({ count: -6, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-6 яблок');
    });

    it('-7 returns many', () => {
      const result = getDeclension({ count: -7, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-7 яблок');
    });

    it('-8 returns many', () => {
      const result = getDeclension({ count: -8, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-8 яблок');
    });

    it('-9 returns many', () => {
      const result = getDeclension({ count: -9, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-9 яблок');
    });

    it('-10 returns many', () => {
      const result = getDeclension({ count: -10, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-10 яблок');
    });

    it('-11 returns many', () => {
      const result = getDeclension({ count: -11, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-11 яблок');
    });

    it('-12 returns many', () => {
      const result = getDeclension({ count: -12, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-12 яблок');
    });

    it('-13 returns many', () => {
      const result = getDeclension({ count: -13, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-13 яблок');
    });

    it('-14 returns many', () => {
      const result = getDeclension({ count: -14, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-14 яблок');
    });

    it('-15 returns many', () => {
      const result = getDeclension({ count: -15, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-15 яблок');
    });

    it('-16 returns many', () => {
      const result = getDeclension({ count: -16, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-16 яблок');
    });

    it('-17 returns many', () => {
      const result = getDeclension({ count: -17, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-17 яблок');
    });

    it('-18 returns many', () => {
      const result = getDeclension({ count: -18, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-18 яблок');
    });

    it('-19 returns many', () => {
      const result = getDeclension({ count: -19, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-19 яблок');
    });

    it('-20 returns many', () => {
      const result = getDeclension({ count: -20, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-20 яблок');
    });

    it('-21 returns one', () => {
      const result = getDeclension({ count: -21, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-21 яблоко');
    });

    it('-22 returns few', () => {
      const result = getDeclension({ count: -22, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-22 яблока');
    });

    it('-23 returns few', () => {
      const result = getDeclension({ count: -23, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-23 яблока');
    });

    it('-24 returns few', () => {
      const result = getDeclension({ count: -24, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-24 яблока');
    });

    it('-25 returns many', () => {
      const result = getDeclension({ count: -25, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-25 яблок');
    });

    it('-100 returns many', () => {
      const result = getDeclension({ count: -100, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-100 яблок');
    });

    it('-101 returns one', () => {
      const result = getDeclension({ count: -101, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-101 яблоко');
    });

    it('-102 returns few', () => {
      const result = getDeclension({ count: -102, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-102 яблока');
    });

    it('-103 returns few', () => {
      const result = getDeclension({ count: -103, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-103 яблока');
    });

    it('-104 returns few', () => {
      const result = getDeclension({ count: -104, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-104 яблока');
    });

    it('-105 returns many', () => {
      const result = getDeclension({ count: -105, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-105 яблок');
    });

    it('-1000000 returns many', () => {
      const result = getDeclension({ count: -1000000, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-1000000 яблок');
    });

    it('-1000001 returns one', () => {
      const result = getDeclension({ count: -1000001, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-1000001 яблоко');
    });

    it('-1000002 returns few', () => {
      const result = getDeclension({ count: -1000002, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-1000002 яблока');
    });

    it('-1000003 returns few', () => {
      const result = getDeclension({ count: -1000003, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-1000003 яблока');
    });

    it('-1000004 returns few', () => {
      const result = getDeclension({ count: -1000004, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-1000004 яблока');
    });

    it('-1000005 returns many', () => {
      const result = getDeclension({ count: -1000005, one: 'яблоко', few: 'яблока', many: 'яблок' });
      assert.strictEqual(result, '-1000005 яблок');
    });
  });

  describe('testing error cases', () => {
    it(`throws an error if count isn't a number`, () => {
      function errorCase() {
        getDeclension({ count: false, one: 'яблоко', few: 'яблока', many: 'яблок' });
      }
      assert.throws(errorCase, /Expected count to be a finite number, got/);
    });

    it(`throws an error if count is infinity`, () => {
      function errorCase() {
        getDeclension({ count: -Infinity, one: 'яблоко', few: 'яблока', many: 'яблок' });
      }
      assert.throws(errorCase, /Expected count to be a finite number, got/);
    });

    it(`throws an error if count is NaN`, () => {
      function errorCase() {
        getDeclension({ count: NaN, one: 'яблоко', few: 'яблока', many: 'яблок' });
      }
      assert.throws(errorCase, /Expected count to be a finite number, got/);
    });

    it(`throws an error if one isn't a string`, () => {
      function errorCase() {
        getDeclension({ count: 5, one: (s) => s, few: 'яблока', many: 'яблок' });
      }
      assert.throws(errorCase, /Expected one to be a string, got/);
    });

    it(`throws an error if few isn't a string`, () => {
      function errorCase() {
        getDeclension({ count: 5, one: 'яблоко', few: Math.PI, many: 'яблок' });
      }
      assert.throws(errorCase, /Expected few to be a string, got/);
    });

    it(`throws an error if many isn't a string`, () => {
      function errorCase() {
        getDeclension({ count: 5, one: 'яблоко', few: 'яблока', many: { string: 'червяк' } });
      }
      assert.throws(errorCase, /Expected many to be a string, got/);
    });
  });
});
