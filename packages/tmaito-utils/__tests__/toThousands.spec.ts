import * as Utils from '../src';

describe('价格转千分位', () => {
  it('returning toThousands', () => {
    expect(Utils.toThousands('')).toEqual('');
    expect(Utils.toThousands(null)).toEqual(null);
    expect(Utils.toThousands(1234, 0)).toEqual('1,234');
    expect(Utils.toThousands(1.105, 2)).toEqual('1.11');
  });

  it('returning toThousands', () => {
    const res = Utils.toThousands(-1234, 0);
    expect(res).toEqual('-1,234');
  });

  it('returning toThousands', () => {
    const res = Utils.toThousands('1234.126', 0);
    expect(res).toEqual('1,234');
  });

  it('returning toThousands', () => {
    const res = Utils.toThousands('1', 0);
    expect(res).toEqual('1');
  });

  it('returning toThousands', () => {
    const res = Utils.toThousands('1.01', 0);
    expect(res).toEqual('1');
  });

  it('returning toThousands', () => {
    const res = Utils.toThousands(1234.123);
    expect(res).toEqual('1,234.12');
  });

  it('returning toThousands', () => {
    const res = Utils.toThousands(1234.126);
    expect(res).toEqual('1,234.13');
  });

  it('returning toThousands', () => {
    const res = Utils.toThousands('1');
    expect(res).toEqual('1.00');
  });

  it('returning toThousands', () => {
    const res = Utils.toThousands('0.1');
    expect(res).toEqual('0.10');
  });

  it('returning toThousands', () => {
    const res = Utils.toThousands('0');
    expect(res).toEqual('0.00');
  });

  it('returning toThousands', () => {
    const res = Utils.toThousands('0', 2, false);
    expect(res).toEqual('0');
  });

  it('returning toThousands', () => {
    const res = Utils.toThousands('1234.1268733', 3);
    expect(res).toEqual('1,234.127');
  });

  it('returning toThousands', () => {
    const res = Utils.toThousands('-1234.1268733', 3);
    expect(res).toEqual('-1,234.127');
  });

  it('returning toThousands', () => {
    const res = Utils.toThousands(123.6, 6);
    expect(res).toEqual('123.600000');
  });

  it('returning toThousands', () => {
    const res = Utils.toThousands(123.6, 6, false);
    expect(res).toEqual('123.6');
  });

  it('returning toThousands', () => {
    const res = Utils.toThousands('&22', 3);
    expect(res).toEqual('&22');
  });
});
