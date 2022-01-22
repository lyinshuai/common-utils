/**
 * 根据位置,使用 * 遮蔽字符串
 * @param {string} search
 * @param {string} key
 */
export default function getParams(search: string, key?: string): any {
  if (!search) return {};
  const params = search
    .substr(1)
    .split('&')
    .reduce((args, arg) => {
      const [argKey, ...value] = arg.split('=');
      args[argKey] = value.join('=');
      return args;
    }, {});
  if (key) return params[key] || '';
  return params;
}
