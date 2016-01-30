import d from '../src/data-structures'
import n from '../src/church-numbers'

describe("pair", () => {

  describe('first and second', () => {

    it("should get the first element of a pair", () => {
      let p = d.pair(3)(5)
      expect(d.fst(p)).toEqual(3)
    });

    it("should get the second element of a pair", () => {
      let p = d.pair(3)(5)
      expect(d.snd(p)).toEqual(5)
    });

  });

  describe('IsNull', () => {

    it('should return FALSE for non-empty pair', () => {
      let p = d.pair(2)(6)
      expect(d.IsNull(p)('T')('F')).toEqual('F')
    });

    it('should detect nil properly', () => {
      let p = d.pair(2)(d.nil)
      expect(d.IsNull(d.snd(p))('T')('F')).toEqual('T')
    });

    it('should return TRUE for non-empty pair', () => {
      expect(d.IsNull(d.nil)('T')('F')).toEqual('T')
    })

  })

});
