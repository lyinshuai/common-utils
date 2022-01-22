/**
 * 格式化时间
 * @param {any} value
 * @param {String} format
 * @example utilscore.formatTime('2019/06/04 12:45:32','YYYY-MM-DD hh:mm:ss') // => "2019-06-04 12:45:32"
 */

const isValidDate = (date: any) => date instanceof Date && !isNaN(date.getTime());

export default function formatTime(value: any, format: string = 'YYYY-MM-DD'): string {
  if (!value || +value === 14400000) return '';
  value = `${value}`;
  let standardTime: string = '';
  if (value.length === 13) {
    const date = +new Date(+value) + 8 * 60 * 60 * 1000;
    standardTime = new Date(date).toISOString();
  } else if (value.length > 14) {
    standardTime = value;
  } else {
    if (isNaN(value)) return value;
    let reg = /(\d{4})(\d{2})(\d{2})/g;
    if (value.length === 6) reg = /(\d{4})(\d{2})/g;
    if (value.length === 14) reg = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g;
    const dateReg = reg.exec(value);
    if (dateReg) {
      let [, year, month, day = '01', hours = '00', minute = '00', second = '00'] = dateReg;
      const date = `${year}-${month}-${day} ${hours}:${minute}:${second}`;
      const date2Date = new Date(date);
      if (isValidDate(date2Date)) {
        standardTime = new Date(+date2Date + 8 * 60 * 60 * 1000).toISOString();
      } else {
        return date;
      }
    } else {
      return value;
    }
  }
  let time = standardTime.substr(0, 19).replace(/[a-z]/i, ' ');
  const [_, YYYY, MM, DD, hh, mm, ss] = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/g.exec(time);
  var filterTime = (type: string, _: string) => type.slice(0, _.length);
  return format
    .replace(/(Y{1,4})/g, $1 => filterTime(YYYY, $1))
    .replace(/(M{1,2})/g, $1 => filterTime(MM, $1))
    .replace(/(D{1,2})/g, $1 => filterTime(DD, $1))
    .replace(/(h{1,2})/g, $1 => filterTime(hh, $1))
    .replace(/(m{1,2})/g, $1 => filterTime(mm, $1))
    .replace(/(s{1,2})/g, $1 => filterTime(ss, $1));
}
