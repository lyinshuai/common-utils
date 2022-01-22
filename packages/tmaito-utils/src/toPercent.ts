/*
 * @params [String, Number] num小数
 * @params [Boolean] isTransform 是否需要转换百分比
 * @params [Number] fixed 数点后位数
 * @return [String] 百分数
 */
export default function toPercent(
  num: any,
  isTransform: boolean = true,
  fixed: number = 0
): string {
  if (isNaN(num)) return num;
  if (!+num) return `${+num}`;
  const pow = Math.pow(10, fixed);
  const hundredfold = isTransform ? 100 * 100 : 100;
  num = Math.round(Number(num) * hundredfold * pow);
  return (num / 100 / pow).toFixed(fixed) + '%';
}
