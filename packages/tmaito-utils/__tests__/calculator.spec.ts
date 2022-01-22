import { calculator } from '../src/';

describe('精度计算', () => {
  it('calculator.strip 把错误的数据转正', () => {
    expect(calculator.strip(0.0999999999999999998)).toEqual(0.1);
    expect(calculator.strip('0.0999999999999999998')).toEqual(0.1);
    expect(calculator.strip(1.0000000000000001)).toEqual(1);
    expect(calculator.strip('1.0000000000000001')).toEqual(1);
    expect(calculator.strip('1.123', 2)).toEqual(1.1);
  });

  it('calculator.digitLength 返回小数点长度', () => {
    expect(calculator.digitLength(123.4567890123)).toEqual(10);
    expect(calculator.digitLength(1.23e-5)).toEqual(7);
    expect(calculator.digitLength(1.23e-5)).toEqual(7);
    expect(calculator.digitLength(1.233467e-5)).toEqual(11);
    expect(calculator.digitLength(123.45e-5)).toEqual(7);
    expect(calculator.digitLength(1.23e1)).toEqual(1);
    expect(calculator.digitLength(1e20)).toEqual(0);
    expect(calculator.digitLength(123.12345e20)).toEqual(0);
    expect(calculator.digitLength(1.123e-100)).toEqual(103);
    expect(calculator.digitLength('123.4567890123')).toEqual(10);
    expect(calculator.digitLength('1.23e-5')).toEqual(7);
    expect(calculator.digitLength('1.23E-5')).toEqual(7);
    expect(calculator.digitLength('1.233467e-5')).toEqual(11);
    expect(calculator.digitLength('123.45e-5')).toEqual(7);
    expect(calculator.digitLength('1.23e1')).toEqual(1);
    expect(calculator.digitLength('1e20')).toEqual(0);
    expect(calculator.digitLength('123.12345e20')).toEqual(0);
    expect(calculator.digitLength('1.123e-100')).toEqual(103);
  });
  it('calculator.float2Fixed 把小数转成整数，支持科学计数法。如果是小数则放大成整数', () => {
    expect(calculator.float2Fixed(1e-1)).toEqual(1);
    expect(calculator.float2Fixed(1e-13)).toEqual(1);
    expect(calculator.float2Fixed(1.123e30)).toEqual(1.123e30);
    expect(calculator.float2Fixed(1.234567e-13)).toEqual(1234567);
    expect(calculator.float2Fixed(0.000000123456)).toEqual(123456);
    expect(calculator.float2Fixed(1.2345678912345e10)).toEqual(12345678912345);
    expect(calculator.float2Fixed('1e-1')).toEqual(1);
    expect(calculator.float2Fixed('1e-13')).toEqual(1);
    expect(calculator.float2Fixed('1.123e30')).toEqual(1.123e30);
    expect(calculator.float2Fixed('1.234567e-13')).toEqual(1234567);
    expect(calculator.float2Fixed('0.000000123456')).toEqual(123456);
    expect(calculator.float2Fixed('1.2345678912345e10')).toEqual(12345678912345);
  });
  it('calculator.plus 精确加法', () => {
    expect(calculator.plus(0.1, 0.2)).toEqual(0.3);
    expect(calculator.plus(1.1, 1.2)).toEqual(2.3);
    expect(calculator.plus(1.1, -2)).toEqual(-0.9);
    expect(calculator.plus(-1.1, -2)).toEqual(-3.1);
    expect(calculator.plus(-1, 0)).toEqual(-1);
    expect(calculator.plus(1.018, 0.001)).toEqual(1.019);
    expect(calculator.plus(1.3224e10, 1.3224e3)).toEqual(13224001322.4);
    expect(calculator.plus('0.1', '0.2')).toEqual(0.3);
    expect(calculator.plus('1.1', '1.2')).toEqual(2.3);
    expect(calculator.plus('1.1', '-2')).toEqual(-0.9);
    expect(calculator.plus('-1.1', ' -2')).toEqual(-3.1);
    expect(calculator.plus('-1', '0')).toEqual(-1);
    expect(calculator.plus('1.018', '0.001')).toEqual(1.019);
    expect(calculator.plus('1.3224e10', '1.3224e3')).toEqual(13224001322.4);
    expect(calculator.plus(0.1, 0.2, 0.3)).toEqual(0.6);
    expect(calculator.plus(0.1, '0.2', '0.3')).toEqual(0.6);
  });
  it('calculator.minus 精确减法', () => {
    expect(calculator.minus(0.3, 0.2)).toEqual(0.1);
    expect(calculator.minus(0.07, 0.01)).toEqual(0.06);
    expect(calculator.minus(1, -0.2)).toEqual(1.2);
    expect(calculator.minus(-1, 0.2)).toEqual(-1.2);
    expect(calculator.minus('0.3', '0.2')).toEqual(0.1);
    expect(calculator.minus('0.07', '0.01')).toEqual(0.06);
    expect(calculator.minus('1', '-0.2')).toEqual(1.2);
    expect(calculator.minus('-1', '0.2')).toEqual(-1.2);
    expect(calculator.minus(1, 0.3, 0.2)).toEqual(0.5);
    expect(calculator.minus('1', '0.3', '0.2')).toEqual(0.5);
  });
  it('calculator.times 精确乘法', () => {
    expect(calculator.times(1.1, 1.1)).toEqual(1.21);
    expect(calculator.times(0.3, 10)).toEqual(3);
    expect(calculator.times(0.3, 0.2)).toEqual(0.06);
    expect(calculator.times(1.1, 1.1)).toEqual(1.21);
    expect(calculator.times(2.5, -0.92)).toEqual(-2.3);
    expect(calculator.times(1.22, -1.639344262295082)).toEqual(-2);
    expect(calculator.times(118762317358.75, 1e-8)).toEqual(1187.6231735875);
    expect(calculator.times('0.3', '10')).toEqual(3);
    expect(calculator.times('0.3', '0.2')).toEqual(0.06);
    expect(calculator.times('1.1', '1.1')).toEqual(1.21);
    expect(calculator.times('2.5', '-0.92')).toEqual(-2.3);
    expect(calculator.times('1.22', -1.639344262295082)).toEqual(-2);
    expect(calculator.times('118762317358.75', '1e-8')).toEqual(1187.6231735875);
    expect(calculator.times(1, 2, 3)).toEqual(6);
    expect(calculator.times('1', '2', '3')).toEqual(6);
    expect(calculator.times('1', 2, '3')).toEqual(6);
  });
  it('calculator.divide 精确除法', () => {
    expect(calculator.divide(0.09, 3)).toEqual(0.03);
    expect(calculator.divide(1.21, 1.1)).toEqual(1.1);
    expect(calculator.divide(-2, 1.22)).toEqual(-1.639344262295082);
    expect(calculator.divide(14750.49269435, 4)).toEqual(3687.6231735875);
    expect(calculator.divide(-1.23e4, 20)).toEqual(-615);
    expect(calculator.divide(2.55e-10, 1.7e-30)).toEqual(1.5e20);
    expect(calculator.divide('0.09', '3')).toEqual(0.03);
    expect(calculator.divide('1.21', '1.1')).toEqual(1.1);
    expect(calculator.divide('-2', '1.22')).toEqual(-1.639344262295082);
    expect(calculator.divide('14750.49269435', '4')).toEqual(3687.6231735875);
    expect(calculator.divide('-1.23e4', '20')).toEqual(-615);
    expect(calculator.divide('2.55e-10', '1.7e-30')).toEqual(1.5e20);
    expect(calculator.divide(12, 3, 2)).toEqual(2);
    expect(calculator.divide('12', 3, '2')).toEqual(2);
  });
  it('calculator.round 四舍五入', () => {
    expect(calculator.round(0, 1)).toEqual(0);
    expect(calculator.round(0, 0)).toEqual(0);
    expect(calculator.round(0.09, 3)).toEqual(0.09);
    expect(calculator.round(0.105, 2)).toEqual(0.11);
    expect(calculator.round(1.125, 2)).toEqual(1.13);
    expect(calculator.round(0.3555, 3)).toEqual(0.356);
    expect(calculator.round(1.2345, 2)).toEqual(1.23);
    expect(calculator.round(1.2345e3, 3)).toEqual(1234.5);
    expect(calculator.round(0.1049999999, 2)).toEqual(0.1);
    expect(calculator.round('0', 1)).toEqual(0);
    expect(calculator.round('0', 0)).toEqual(0);
    expect(calculator.round('0.09', 3)).toEqual(0.09);
    expect(calculator.round('0.105', 2)).toEqual(0.11);
    expect(calculator.round('1.125', 2)).toEqual(1.13);
    expect(calculator.round('0.3555', 3)).toEqual(0.356);
    expect(calculator.round('1.2345e3', 3)).toEqual(1234.5);
    expect(calculator.round('0.1049999999', 2)).toEqual(0.1);
  });
});
