import { ISZERO, _1, _5, _2, _3, MULT, PRED } from '../src/church-numbers'
import { Y } from '../src/combinators'
import { inc } from '../src/tools'

describe("Combinators", () => {

  describe("Compute factorial using JS numbers", () => {

    const fact = f => n => (n <= 1) ? 1 : n * f(n - 1);
    const factorial = Y(fact);

    it("should compute factorial using JS numbres", () => {
      let res = factorial(5);
      expect(res).toBe(120);
    });

  });

  describe("Compute factorial using Church numbers", () => {

    const ch_fact = f => n => ISZERO( n )
      ( _1 )
      ( MULT(n) (f(PRED(n))) );
    const ch_factorial = Y(ch_fact);

    it("should compute factorial using Church numbres", () => {
      let res = ch_factorial(_5);
      expect(res(inc)).toBe(120);
    });

  });

})
