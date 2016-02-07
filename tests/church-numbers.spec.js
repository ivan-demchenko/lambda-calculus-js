import { SUCC, PRED, MULT, PLUS, SUB, LEQ, ISZERO, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10 } from '../src/church-numbers'
import { inc } from '../src/tools'

describe("church numbers", () => {

  describe('numbers', () => {

    it("should apply f 5 times", () => {
      expect(_5(inc)(0)).toBe(5);
    });

    it("should apply f 0 times", () => {
      expect(_0(inc)(0)).toBe(0);
    });

  });

  describe('generating numbers', () => {

    it("should return function that will execute f 4+1 times", () => {
      let nn = SUCC(_4);
      expect(nn(inc)(0)).toBe(5);
    });

    it("should return function that will execute f 4-1 times", () => {
      let nn = PRED(_4);
      expect(nn(inc)(0)).toBe(3);
    });

    it("PRED 0 === 0", () => {
      let nn = PRED(_0);
      expect(nn(inc)(0)).toBe(0);
    });

  });

  describe('sum', () => {

    it("should 4 + 2 = 6", () => {
      let nn = PLUS(_4)(_2);
      expect(nn(inc)(0)).toBe(6);
    });

    it("should 4 * 2 = 8", () => {
      let nn = MULT(_4)(_2);
      expect(nn(inc)(0)).toBe(8);
    });

  });

  describe('multiplication', () => {

    it("should 4 * 0 = 0", () => {
      let nn = MULT(_4)(_0);
      expect(nn(inc)(0)).toBe(0);
    });

    it("should 0 * 4 = 0", () => {
      let nn = MULT(_0)(_4);
      expect(nn(inc)(0)).toBe(0);
    });

    it("should 0 * 0 = 0", () => {
      let nn = MULT(_0)(_0);
      expect(nn(inc)(0)).toBe(0);
    });

  });

  describe('subtraction', () => {

    it("should 4 - 1 = 3", () => {
      let nn = SUB(_4)(_1);
      expect(nn(inc)(0)).toBe(3);
    });

    it("should 4 - 4 = 0", () => {
      let nn = SUB(_4)(_4);
      expect(nn(inc)(0)).toBe(0);
    });

    it("should 2 - 4 = 0", () => {
      let nn = SUB(_2)(_4);
      expect(nn(inc)(0)).toBe(0);
    });

  });

  describe('isZero', () => {

    it("should give TRUE for 0", () => {
      expect(ISZERO(_0)('Y')('N')).toBe('Y');
    });

    it("should give FALSE for 2", () => {
      expect(ISZERO(_2)('Y')('N')).toBe('N');
    });

  });

  describe('A <= B', () => {

    it("should give TRUE for 2 <= 4", () => {
      expect(LEQ(_2)(_4)('Y')('N')).toBe('Y');
    });

    it("should give FALSE for 4 <= 2", () => {
      expect(LEQ(_4)(_2)('Y')('N')).toBe('N');
    });

    it("should give TRUE for 4 <= 4", () => {
      expect(LEQ(_4)(_4)('Y')('N')).toBe('Y');
    });

  });

});
