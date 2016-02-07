import { PAIR, FST, SND, ISNULL, NIL } from '../src/pair'

describe("PAIR", () => {

  describe('first and second', () => {

    it("should get the first element of a PAIR", () => {
      let p = PAIR(3)(5)
      expect(FST(p)).toEqual(3)
    });

    it("should get the second element of a PAIR", () => {
      let p = PAIR(3)(5)
      expect(SND(p)).toEqual(5)
    });

  });

  describe('ISNULL', () => {

    it('should return FALSE for non-empty PAIR', () => {
      let p = PAIR(2)(6)
      expect(ISNULL(p)('T')('F')).toEqual('F')
    });

    it('should detect NIL properly', () => {
      let p = PAIR(2)(NIL)
      expect(ISNULL(SND(p))('T')('F')).toEqual('T')
    });

    it('should return TRUE for non-empty PAIR', () => {
      expect(ISNULL(NIL)('T')('F')).toEqual('T')
    })

  })

});
