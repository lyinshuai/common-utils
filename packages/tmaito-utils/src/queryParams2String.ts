/*
 * @params [any] 将查询参数转成字符串
 * @return [String] 重置协议后的URL地址
 */
interface Params {
  [proppName: string]: any;
}
export default function queryParams2String(data: Params): string {
  let str = '';
  for (const key in data) {
    str += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`;
  }
  return str.slice(0, -1);
}
