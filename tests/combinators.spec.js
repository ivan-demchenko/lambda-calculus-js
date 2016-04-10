import { ISZERO, _1, _5, _2, MULT, PRED } from '../src/church-numbers'
import { Y } from '../src/combinators'
import { inc } from '../src/tools'

const _fact = nextStep => n => n === 0 ? 1 : n * nextStep(n - 1);
const _factorial = Y(_fact);

const fact = ns => n => ISZERO (n) (_1) ( MULT (n) ( ns(PRED(n)) ) );
const factorial = Y(fact);

describe("Combinators", () => {

  it("Y", () => {
    let res = _factorial(5);
    expect(res).toBe(120);
  });

  it("Y", () => {
    let res = factorial(_2);
    expect(res(inc)(0)).toBe(120);
  });

})
