import * as Utils from '../src/index';

describe('转百分比', () => {
  it('returning toPercent', () => {
    const res = Utils.toPercent('无');
    expect(res).toEqual('无');
  });

  it('returning toPercent', () => {
    const res = Utils.toPercent(0);
    expect(res).toEqual('0');
  });

  it('returning toPercent', () => {
    const res = Utils.toPercent(0.12);
    expect(res).toEqual('12%');
  });

  it('returning toPercent', () => {
    const res = Utils.toPercent(12, false);
    expect(res).toEqual('12%');
  });

  it('returning toPercent', () => {
    const res = Utils.toPercent('12', false);
    expect(res).toEqual('12%');
  });

  it('returning toPercent', () => {
    const res = Utils.toPercent(12.23, false, 2);
    expect(res).toEqual('12.23%');
  });

  it('returning toPercent', () => {
    const res = Utils.toPercent('12.23', false, 2);
    expect(res).toEqual('12.23%');
  });

  it('returning toPercent', () => {
    const res = Utils.toPercent('14.1268733', false, 3);
    expect(res).toEqual('14.127%');
  });

  it('returning toPercent', () => {
    const res = Utils.toPercent(14.1268733, false, 3);
    expect(res).toEqual('14.127%');
  });

  it('returning toPercent', () => {
    const res = Utils.toPercent(0.141268733, true, 3);
    expect(res).toEqual('14.127%');
  });
});
