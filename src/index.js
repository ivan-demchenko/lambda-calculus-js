import b from './boolean'
const sum = a => b => a + b;
const inc = a => a + 1;
const logt = (m) => console.log('--- ' + m.toUpperCase() + ' ' + '-')
const logf = function(m, v) {
  console.log(m + ': ' + v);
};
const churchNumToNum = n => n(inc)(0)

const ID = x => x

// Tests: Boolean

logt('Boolean tests');
logf('IF T 4 2', b.if(b.t)(4)(2))
logf('IF F 4 2', b.if(b.f)(4)(2))
logf('AND 4 2', b.and(4)(2))
logf('OR 4 2', b.or(4)(2))
logf('NOT F 4 2', b.not(b.f)(4)(2))
logf('NOT T 4 2', b.not(b.t)(4)(2))

// ---------------------------
// Data structures

const PAIR = x => y => f => f(x)(y)
const NIL = x => b.t
const FST = p => p(b.t)
const SND = p => p(b.f)
const NULL = p => p( x => y => b.f )
const CONS = h => t => f => PAIR(h)(t)(f)

// Tests: Data structures
logt( 'Data structures tests' );
logf( 'FST (1,2)', FST(PAIR(1)(2)) );
logf( 'SND (1,2)', SND(PAIR(1)(2)) );
logf( 'NULL NIL', NULL(NIL)('Y')('N') );

let list = CONS(3)(CONS(1)(CONS(4)(CONS(7)(NIL))))

logf( 'NULL list', NULL(list)('Y')('N') )

// ---------------------------
// Church numbers

const SUCC  = n => f => x => f(n(f)(x))
const np = p => PAIR(SUCC(FST(p)))(FST(p))
const PRED = n => SND(n(np)(PAIR(_0)(_0)))

const PLUS  = m => n => f => x => m(f)(n(f)(x))
const MULT  = m => n => f => m(n(f))
const SUB   = m => n => f => n(PRED)(m)

const IsZero = n => n(b.f)(b.not)(b.f)
const LEQ = x => y => IsZero(x(PRED)(y))

const _0    = f => x => x
const _1    = SUCC(_0) // f(x)        === f(_0)
const _2    = SUCC(_1) // f(f(x))     === f(_1)
const _3    = SUCC(_2) // f(f(f(x)))  === f(_2)
const _4    = SUCC(_3) // ...
const _5    = SUCC(_4)
const _6    = SUCC(_5)

// Tests: Church numbers
logt('Church numbers tests');
logf( '_5', churchNumToNum(_5) );

logf( 'PRED _6', churchNumToNum(PRED(_6)) );
logf( 'PRED _1', churchNumToNum(PRED(_1)) );
logf( 'PRED _0', churchNumToNum(PRED(_0)) );
logf( 'MULT _2 _3', churchNumToNum( MULT(_2)(_3) ) );
logf( 'MULT _2 _0', churchNumToNum( MULT(_2)(_0) ) );
logf( 'MULT _0 _2', churchNumToNum( MULT(_0)(_2) ) );
logf( 'MULT _6 _6', churchNumToNum( MULT(_6)(_6) ) );
logf( 'PLUS _1 _3', churchNumToNum( PLUS(_1)(_3) ) );
logf( 'PLUS _6 _2', churchNumToNum( PLUS(_6)(_2) ) );
logf( 'PLUS _0 _0', churchNumToNum( PLUS(_0)(_0) ) );
logf( 'IsZero _0', IsZero(_0)('yes')('no') );
logf( 'IsZero _2', IsZero(_2)('yes')('no') );
logf( 'IF.IsZero _0', b.if(IsZero(_0))('yes')('no') );
logf( 'LEQ 4 4', LEQ(_4)(_4)('Y')('N') );
logf( 'LEQ 3 5', LEQ(_3)(_5)('Y')('N') );
logf( 'LEQ 5 2', LEQ(_5)(_2)('Y')('N') );


// ---------------------------
// Combinators
// ---------------------------

//Y := λg.(λx.g (x x)) (λx.g (x x))
const Y = g => (x => g(x)(x))(x => g(x)(x))

const FACT = r => n => IsZero(n) (_1) (MULT(n)(r(PRED(n))))

console.log(  churchNumToNum( Y(FACT)(_5) )  )

// logf( 'x', churchNumToNum(  ) );
