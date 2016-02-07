import { T, F, IF, AND, OR, NOT } from '../src/boolean'

describe("Boolean", () => {

  it("true", () => {
    expect(IF(T)(4)(2)).toBe(4);
  });

  it("false", () => {
    expect(IF(F)(4)(2)).toBe(2);
  });

  it("and 5 7", () => {
    expect(AND(5)(7)).toBe(7);
  });

  it("or 3 1", () => {
    expect(OR(3)(1)).toBe(3);
  });

  it("not t 4 2", () => {
    expect(NOT(T)(4)(2)).toBe(2);
  });

  it("not f 4 2", () => {
    expect(NOT(F)(4)(2)).toBe(4);
  });

});
