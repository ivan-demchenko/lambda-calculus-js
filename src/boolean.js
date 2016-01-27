const T     = t => f => t
const F     = t => f => f

const IF    = P => x => y => P(x)(y)
const OR    = x => y => IF(T)(x)(y)
const AND   = x => y => IF(F)(x)(y)
const NOT   = x => x(F)(T)

exports.t = T;
exports.f = F;
exports.if = IF;
exports.or = OR;
exports.and = AND;
exports.not = NOT;
