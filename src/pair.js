import b from './boolean'

const PAIR = x => y => f => f(x)(y)
const NIL = x => b.t
const FST = p => p(b.t)
const SND = p => p(b.f)
const ISNULL = p => p( x => y => b.f )

exports.pair = PAIR
exports.nil = NIL
exports.fst = FST
exports.snd = SND
exports.IsNull = ISNULL
