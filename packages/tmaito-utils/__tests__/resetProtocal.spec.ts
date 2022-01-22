import * as Utils from '../src/index';

describe('重置URL协议为当前访问协议头', () => {
  it('return resetProtocal', () => {
    expect(
      Utils.resetProtocal(
        'http://phoenix-normal.oss-cn-hangzhou.aliyuncs.com/ant-coop-logo%2Flogo.png',
        'https:'
      )
    ).toEqual('https://phoenix-normal.oss-cn-hangzhou.aliyuncs.com/ant-coop-logo%2Flogo.png');

    expect(
      Utils.resetProtocal(
        'https://phoenix-normal.oss-cn-hangzhou.aliyuncs.com/ant-coop-logo%2Flogo.png',
        'http:'
      )
    ).toEqual('http://phoenix-normal.oss-cn-hangzhou.aliyuncs.com/ant-coop-logo%2Flogo.png');

    expect(
      Utils.resetProtocal(
        'ftp://phoenix-normal.oss-cn-hangzhou.aliyuncs.com/ant-coop-logo%2Flogo.png',
        'http:'
      )
    ).toEqual('ftp://phoenix-normal.oss-cn-hangzhou.aliyuncs.com/ant-coop-logo%2Flogo.png');
  });
});
