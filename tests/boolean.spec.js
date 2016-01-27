import b from '../src/boolean'

describe("Boolean", () => {
  it("true", () => {
    expect(b.if(b.t)(4)(2)).toBe(4);
  });
});
