import { compareSort } from '../src';

describe('大小写字母、数字、汉字排序', () => {
	it('对象数组排序', () => {
		const data = [
			{ 'goodSn': '02', 'goodName': '牛仔裤z', 'price': '178' },
			{ 'goodSn': '02', 'goodName': '直三正品拖鞋', 'price': '178' },
			{ 'goodSn': 'a03', 'goodName': '直三正品拖鞋', 'price': '78' },
			{ 'goodSn': 'c03', 'goodName': '直三正品拖鞋', 'price': '78' },
			{ 'goodSn': 'c03', 'goodName': '直三正品拖鞋', 'price': '78' },
			{ 'goodSn': 'c03', 'goodName': '直三正品拖鞋', 'price': '78' },
			{ 'goodSn': 'b03', 'goodName': '直三正品拖鞋', 'price': '78' },
			{ 'goodSn': '03', 'goodName': '牛仔裤c', 'price': '78' },
			{ 'goodSn': '啊', 'goodName': '直三正品拖鞋', 'price': '78' },
			{ 'goodSn': '你好啊', 'goodName': '直三正品拖鞋', 'price': '78' },
			{ 'goodSn': '不怎么样', 'goodName': '直三正品拖鞋', 'price': '78' },
			{ 'goodSn': '不好么', 'goodName': '直三正品拖鞋', 'price': '78' },
			{ 'goodSn': '@', 'goodName': '直三正品拖鞋', 'price': '78' },
			{ 'goodSn': '$', 'goodName': '直三正品拖鞋', 'price': '78' },
			{ 'goodSn': 'z', 'goodName': '直三正品拖鞋', 'price': '78' },
			{ 'goodSn': 'B', 'goodName': '直三正品拖鞋', 'price': '78' },
			{ 'goodSn': 'B', 'goodName': '直三正品拖鞋', 'price': '78' },
			{ 'goodSn': 'a住', 'goodName': '牛仔裤a', 'price': '178' }
		];

		compareSort(data, '', true);
		compareSort(data, 'goodSn', false).map(item => item.goodSn);
		compareSort(data, 'goodSn', true).map(item => item.goodSn);
		compareSort(data, 'goodName', true).map(item => item.goodName);
		// expect(value1).toEqual(['$', '@', '02', '02', '03', 'a03', 'a住', 'B', 'B', 'b03', 'c03', 'z', '啊', '不好么', '不怎么样', '你好啊']);
		// console.log(compareSort(data, '', true));
		// console.log(compareSort(data, 'goodSn', true));
		// console.log(compareSort(data, 'goodSn', false));
		// console.log(compareSort(data, 'goodName', true));
	});
});
