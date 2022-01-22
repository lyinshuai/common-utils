/*
 * @params [String] URL
 * @params [String] protocol URL需要重置的协议 http: or https:
 * @return [String] 重置协议后的URL地址
 */
export default function resetProtocal(url: string, protocol: string): string {
  if (/^http[s]?:/.exec(url)) {
    return url.replace(/^http[s]?:/, protocol);
  }
  return url;
}
