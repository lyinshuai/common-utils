import { download } from '../src';

describe('download 下载文件', () => {
	it('returning params', () => {
		download('https://imsc-prod-files.oss-cn-hangzhou.aliyuncs.com/file/client/un/xforceplus4.0/%E7%A5%A8%E6%98%93%E9%80%9A%E5%8F%91%E7%A5%A8%E5%8A%A9%E6%89%8B_setup.exe');
		download('https://imsc-prod-files.oss-cn-hangzhou.aliyuncs.com/file/client/un/xforceplus4.0/%E7%A5%A8%E6%98%93%E9%80%9A%E5%8F%91%E7%A5%A8%E5%8A%A9%E6%89%8B_setup.exe');
	});
});
