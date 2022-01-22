import { sum } from '../src';

describe('计算一维数组内某个字段之和', () => {
  it('returning sum', () => {
    expect(sum([{ count: 1 }], 'count')).toEqual(1);
    expect(
      sum([{ count: 1 }, { count: 2 }, { count: 1 }, { count: 2 }, { count: 3 }], 'count')
    ).toEqual(9);
    expect(
      sum([{ count: '1' }, { count: '2' }, { count: '1' }, { count: '2' }, { count: '3' }], 'count')
    ).toEqual(9);
    expect(
      sum(
        [{ count: 1 }, { count: 2 }, { count: 1 }, { count: 2 }, { count: 3 }, { num: 1 }],
        'count',
        1
      )
    ).toEqual(10);
    expect(sum([1, 2, 3, 2, 1], '')).toEqual(9);
    expect(sum([{ count: '0.00' }], 'count')).toEqual(0);
    expect(sum([], '')).toEqual(0);
  });
});
