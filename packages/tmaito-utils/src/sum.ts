/**
 * 计算一维数组指定字段之和
 * @param {array} arr
 * @param {string} key
 * @param {number} defaultValue
 * @return number
 * @example utilscore.mask('12398765432',3,7) // => "123****5432"
 */
import { plus } from './calculator';
export default function sum(arr: any[], key: string, defaultValue: number = 0): number {
  if (arr.length) {
    const item = arr.map(item => (key ? +item[key] || defaultValue : item));
    if (item.length > 1) {
      return item.reduce((item, sum) => plus(item, sum), 0);
    }
    return +item.toString();
  }
  return 0;
}
