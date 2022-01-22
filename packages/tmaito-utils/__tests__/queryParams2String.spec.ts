import * as Utils from '../src/index';

describe('queryParams 转译称字符串', () => {
  it('return queryParams2String', () => {
    expect(
      Utils.queryParams2String({
        source: 'sc',
        toggle: true
      })
    ).toEqual('source=sc&toggle=true');
  });
});
