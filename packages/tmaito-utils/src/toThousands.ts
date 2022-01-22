/*
 * @params [String | Number] n 金额
 * @params [Number] fixed 小数点截取位数
 * @params [Boolean] isFilling 是否填充小数点截取位数
 * @return [String] 千分位
 */
import { round } from './calculator';
export default function toThousands(n: any, fixed: number = 2, isFilling: boolean = true): string {
  if (isNaN(n) || !n) return n;
  let num = round(n, fixed).toFixed(fixed);
  if (!isFilling) num = (+num).toString();
  if (!num.includes('.')) num = `${num}.`;
  return num.replace(/(\d)(?=(\d{3})+\.)/g, ($0, $1) => `${$1},`).replace(/\.$/, '');
}
