import { F, T, NOT } from './boolean'
import { PAIR, SND, FST } from './pair'

const SUCC  = n => f => x => f(n(f)(x))
const np = p => PAIR(SUCC(FST(p)))(FST(p))
const PRED = n => SND(n(np)(PAIR(_0)(_0)))

const PLUS  = m => n => f => x => m(f)(n(f)(x))
const MULT  = m => n => f => m(n(f))
const SUB   = m => n => n(PRED)(m)

const ISZERO = n => n(F)(NOT)(F)
const LEQ = x => y => ISZERO(SUB(x)(y))

const _0 = f => x => x
const _1 = SUCC(_0)
const _2 = SUCC(_1)
const _3 = SUCC(_2)
const _4 = SUCC(_3)
const _5 = SUCC(_4)
const _6 = SUCC(_5)
const _7 = SUCC(_6)
const _8 = SUCC(_7)
const _9 = SUCC(_8)
const _10 = SUCC(_9)

exports.SUCC = SUCC
exports.PRED = PRED
exports.PLUS = PLUS
exports.MULT = MULT
exports.SUB = SUB
exports.ISZERO = ISZERO
exports.LEQ = LEQ
exports._0 = _0
exports._1 = _1
exports._2 = _2
exports._3 = _3
exports._4 = _4
exports._5 = _5
exports._6 = _6
exports._7 = _7
exports._8 = _8
exports._9 = _9
exports._10 = _10
