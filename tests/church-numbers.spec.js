import n from '../src/church-numbers'
import { inc } from '../src/tools'

describe("church numbers", () => {

  describe('numbers', () => {

    it("should apply f 5 times", () => {
      expect(n._5(inc)(0)).toBe(5);
    });

    it("should apply f 0 times", () => {
      expect(n._0(inc)(0)).toBe(0);
    });

  });

  describe('generating numbers', () => {

    it("should return function that will execute f 4+1 times", () => {
      expect((n.succ(n._4))(inc)(0)).toBe(5);
    });

    it("should return function that will execute f 4-1 times", () => {
      expect((n.pred(n._4))(inc)(0)).toBe(3);
    });

    it("pred 0 === 0", () => {
      expect((n.pred(n._0))(inc)(0)).toBe(0);
    });

  });

  describe('sum', () => {

    it("should 4 + 2 = 6", () => {
      let _6 = n.plus(n._4)(n._2);
      expect(_6(inc)(0)).toBe(6);
    });

    it("should 4 * 2 = 8", () => {
      let nn = n.mult(n._4)(n._2);
      expect(nn(inc)(0)).toBe(8);
    });

  });

  describe('multiplication', () => {

    it("should 4 * 0 = 0", () => {
      let nn = n.mult(n._4)(n._0);
      expect(nn(inc)(0)).toBe(0);
    });

    it("should 0 * 4 = 0", () => {
      let nn = n.mult(n._0)(n._4);
      expect(nn(inc)(0)).toBe(0);
    });

    it("should 0 * 0 = 0", () => {
      let nn = n.mult(n._0)(n._0);
      expect(nn(inc)(0)).toBe(0);
    });

  });

  describe('subtraction', () => {

    it("should 4 - 1 = 3", () => {
      let nn = n.sub(n._4)(n._1);
      expect(nn(inc)(0)).toBe(3);
    });

    it("should 4 - 4 = 0", () => {
      let nn = n.sub(n._4)(n._4);
      expect(nn(inc)(0)).toBe(0);
    });

    it("should 2 - 4 = 0", () => {
      let nn = n.sub(n._2)(n._4);
      expect(nn(inc)(0)).toBe(0);
    });

  });

  describe('isZero', () => {

    it("should give TRUE for 0", () => {
      expect(n.IsZero(n._0)('Y')('N')).toBe('Y');
    });

    it("should give FALSE for 2", () => {
      expect(n.IsZero(n._2)('Y')('N')).toBe('N');
    });

  });

  describe('A <= B', () => {

    it("should give TRUE for 2 <= 4", () => {
      expect(n.leq(n._2)(n._4)('Y')('N')).toBe('Y');
    });

    it("should give FALSE for 4 <= 2", () => {
      expect(n.leq(n._4)(n._2)('Y')('N')).toBe('N');
    });

  });

});
