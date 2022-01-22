/**
 * 根据位置,使用 * 遮蔽字符串
 * @param {string} search
 * @param {string} key
 */
export default function download(url: string): any {
	const key = `iframe-${encodeURIComponent(url)}`;
	const dom = document.getElementById(key);
	if (dom) {
		document.body.removeChild(dom);
	}
	const iframe = document.createElement('iframe');
	iframe.src = url;
	iframe.style.display = 'none';
	iframe.id = key;
	document.body.appendChild(iframe);
}
