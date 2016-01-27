import b from '../src/boolean'

describe("Boolean", () => {

  it("true", () => {
    expect(b.if(b.t)(4)(2)).toBe(4);
  });

  it("false", () => {
    expect(b.if(b.f)(4)(2)).toBe(2);
  });

  it("and 5 7", () => {
    expect(b.and(5)(7)).toBe(7);
  });

  it("or 3 1", () => {
    expect(b.or(3)(1)).toBe(3);
  });

  it("not t 4 2", () => {
    expect(b.not(b.t)(4)(2)).toBe(2);
  });

  it("not f 4 2", () => {
    expect(b.not(b.f)(4)(2)).toBe(4);
  });

});
