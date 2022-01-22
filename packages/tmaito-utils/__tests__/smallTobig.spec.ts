import { smalltoBig } from '../src/index';


describe('小写金额转换为大写金额', () => {
  it('returning smalltoBig', () => {
    const res = smalltoBig(1234);
    expect(res).toEqual('壹仟贰佰叁拾肆元整');
  });

  it('returning smalltoBig', () => {
    const res = smalltoBig("一");
    expect(res).toEqual('一');
  });

  it('returning smalltoBig', () => {
    const res = smalltoBig(-1234);
    expect(res).toEqual('(负数)壹仟贰佰叁拾肆元整');
  });
});
