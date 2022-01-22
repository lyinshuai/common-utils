import * as Utils from '../src/index';

describe('范围内随机数', () => {
  it('returning randomNum', () => {
    expect(Utils.randomNum(1, 4)).toBeGreaterThanOrEqual(1); //大于等于1
    expect(Utils.randomNum(1, 4)).toBeLessThanOrEqual(4); //小于等于4
    expect(Utils.randomNum(4, 1)).toBeGreaterThanOrEqual(1); //大于等于1
    expect(Utils.randomNum(4, 1)).toBeLessThanOrEqual(4); //小于等于4
  });
});
