describe("Church numbders", function() {
  it("_1", function() {
    var inc = function(a) { return a + 1; }
    expect(_1(inc)(0)).toBe(1);
  });
});
