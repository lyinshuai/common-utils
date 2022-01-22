/**
 * 获取 IE 浏览器版本
 * @params {Number} version 是否低于该版本
 * @return {Object}
 * type: 浏览器类型 IE 或 其他浏览器
 * version: 如果是IE浏览器 则返回版本，否则 默认为 -1
 * isLowerVersion: 是否是IE低版本
 */
interface BVersion {
  type: string;
  version: number;
  isLowerVersion: boolean;
}
export default function browserVersion(version: number = 9): BVersion {
  // 取得浏览器的userAgent字符串
  const userAgent = navigator.userAgent;
  // 判断是否为小于IE11的浏览器
  const isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  // 判断是否为IE的Edge浏览器
  const isEdge = userAgent.indexOf('Edge') > -1 && !isLessIE11;
  // 判断是否为IE11浏览器
  const isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;

  // 浏览器类型及版本
  const params = {
    version: -1,
    type: 'IE'
  };
  if (isLessIE11) {
    const IEReg = new RegExp('MSIE (\\d+\\.\\d+);');
    // 正则表达式匹配浏览器的userAgent字符串中MSIE后的数字部分，，这一步不可省略！！！
    IEReg.test(userAgent);
    // 取正则表达式中第一个小括号里匹配到的值
    const IEVersionNum = parseFloat(RegExp['$1']);
    switch (IEVersionNum) {
      case 7:
      case 8:
      case 9:
      case 10:
        params.version = IEVersionNum;
        break;
      default:
        params.version = 6;
        break;
    }
    params.type = 'IE';
  } else if (isEdge) {
    params.type = 'Edge';
  } else if (isIE11) {
    params.type = 'IE';
    params.version = 11;
  } else {
    (params.type = 'other'), (params.version = -1);
  }
  return {
    ...params,
    isLowerVersion: params.type === 'IE' && params.version < version
  };
}
