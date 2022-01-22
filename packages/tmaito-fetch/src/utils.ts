import qs from 'qs';
import axios from 'axios';
let pending: Array<string> = [];

/**
 * token
 * @param {Object} config
 */
const getToken = (config: any): string => {
	let { method, url, params, data } = config;
	if (typeof data === 'string') {
		try {
			String.prototype.trim = function () {
				return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
			};
			data = JSON.parse(data.trim());
		} catch (e) {
			console.log(e);
		}
	}
	return [method, url, qs.stringify(params), qs.stringify(data)].join('&');
}

/**
 * 添加请求
 * @params{Object} config
 */
export const addPending = (config: any) => {
	const token = getToken(config);
	if (pending.includes(token)) {
		config.cancelToken = config.cancelToken || new axios.CancelToken(cancel => {
			cancel();
		})
	} else {
		pending.push(token);
	}
}

/**
 * 添加请求
 * @params{Object} config
 */
export const removePending = (config: any) => {
	const token = getToken(config);
	const index = pending.findIndex(item => item === token);
	if (index !== -1) {
		pending.splice(index, 1);
	}
}
