import b from './boolean'
import d from './data-structures'

const sum = a => b => a + b;
const inc = a => a + 1;
const logt = (m) => console.log('--- ' + m.toUpperCase() + ' ' + '-')
const logf = function(m, v) {
  console.log(m + ': ' + v);
};
const churchNumToNum = n => n(inc)(0)

const ID = x => x

// ---------------------------
// Data structures

logt( 'Data structures tests' );
logf( 'FST (1,2)', d.fst(d.pair(1)(2)) );
logf( 'SND (1,2)', d.snd(d.pair(1)(2)) );
logf( 'NULL NIL', d.null(d.nil)('Y')('N') );

let list = d.cons(3)(d.cons(1)(d.cons(4)(d.cons(7)(d.nil))))

logf( 'NULL list', d.null(list)('Y')('N') )


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
