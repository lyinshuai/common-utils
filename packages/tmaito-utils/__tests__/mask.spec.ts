import { mask } from '../src';

describe('根据位置，遮蔽字符串', () => {
  it('returning mask', () => {
    expect(mask('12345')).toEqual('12345');
    expect(mask('12345', 0, 0)).toEqual('12345');
    expect(mask('1', 0, 1)).toEqual('*');
    expect(mask('13573901316', 3, 4)).toEqual('135****1316');
    expect(mask('13573901316', 3, 4, '-')).toEqual('135----1316');
    expect(mask('13573901316', 3, 8)).toEqual('135********');
  });
});
