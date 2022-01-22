import { getParams } from '../src';

describe('获取 URL 参数', () => {
  it('returning params', () => {
    const search =
      '?redirect=abc&token=yili&pwd=stXCdTy5znOWAj2Xm/XTQkqAWh19JY4LYT+J/6a1ePstigZbugbJ6vSgRb/o26RGnXHviAkW9/wD9YOL/HeGi/vrLo44UUS8vy4asjjQJEZu0ZZ6Dca9LUgGj/dJ/PkR4MWJb9AJAnIBwbaFpzTJYpVRFsTdWWFO5XC0V4acPmU=';
    const params = getParams(search);
    expect(params).toEqual({
      redirect: 'abc',
      token: 'yili',
      pwd: 'stXCdTy5znOWAj2Xm/XTQkqAWh19JY4LYT+J/6a1ePstigZbugbJ6vSgRb/o26RGnXHviAkW9/wD9YOL/HeGi/vrLo44UUS8vy4asjjQJEZu0ZZ6Dca9LUgGj/dJ/PkR4MWJb9AJAnIBwbaFpzTJYpVRFsTdWWFO5XC0V4acPmU='
    });
    expect(getParams('')).toEqual({});
    expect(getParams(search, 'token')).toEqual('yili');
    expect(getParams(search, 'name')).toEqual('');
  });
});
