const T     = t => f => t
const F     = t => f => f

const IF    = P => x => y => P(x)(y)
const OR    = x => y => IF(T)(x)(y)
const AND   = x => y => IF(F)(x)(y)
const NOT   = x => x(F)(T)

exports.T = T;
exports.F = F;
exports.IF = IF;
exports.OR = OR;
exports.AND = AND;
exports.NOT = NOT;
