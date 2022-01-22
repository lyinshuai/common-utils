/**
 * 根据位置,使用 * 遮蔽字符串
 * @param {string} str
 * @param {number} start 起始位置
 * @param {number} len 长度
 * @param {string} _mask
 * @example utilscore.mask('12398765432',3,7) // => "123****5432"
 */
export default function mask(
  str: string,
  start: number = 0,
  len: number = 0,
  _mask: string = '*'
): string {
  let reg = new RegExp(
    `\^\(\.\{${start}\}\)\(\.\{${len}\}\)\(\.${start + len >= str.length ? '?' : '+'}\)\$`
  );
  return str.replace(reg, ($0, $1, $2, $3) => $1 + $2.replace(/./g, _mask) + $3);
}
