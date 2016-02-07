import { T, F } from './boolean'

const PAIR = x => y => f => f(x)(y)
const NIL = x => T
const FST = p => p(T)
const SND = p => p(F)
const ISNULL = p => p( x => y => F )

exports.PAIR = PAIR
exports.NIL = NIL
exports.FST = FST
exports.SND = SND
exports.ISNULL = ISNULL
