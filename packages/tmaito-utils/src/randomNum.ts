/*
 * @params [Number] min 范围最小值
 * @params [Number] max 范围最大值
 * @return [Number] 范围内随机数
 */
export default function randomNum(min: number, max: number): number {
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
