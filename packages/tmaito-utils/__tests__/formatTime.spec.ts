import { formatTime } from '../src';

describe('formatTime', () => {
  it('非正常格式', () => {
    expect(formatTime('', 'YYYY-MM')).toEqual('');
    expect(formatTime('14400000')).toEqual('');
    expect(formatTime('44034')).toEqual('44034');
    expect(formatTime('nihao')).toEqual('nihao');
  });

  it('日期时间拼接格式', () => {
    expect(formatTime('202002', 'YYYY-MM')).toEqual('2020-02');
    expect(formatTime('20200217')).toEqual('2020-02-17');
    expect(formatTime('20201317')).toEqual('2020-13-17 00:00:00');
    expect(formatTime('20200217', 'YYYY-MM-DD')).toEqual('2020-02-17');
    expect(formatTime('20200217', 'YYYY-MM-DD hh:mm:ss')).toEqual('2020-02-17 00:00:00');
    expect(formatTime('20200217222535')).toEqual('2020-02-17');
    expect(formatTime('20200217222535', 'YYYY-MM-DD hh:mm:ss')).toEqual('2020-02-17 22:25:35');
  });

  it('new Date() 默认格式', () => {
    expect(formatTime('2020-02-24T11:59:12.277+000', 'YYYY-MM-DD hh:mm:ss')).toEqual(
      '2020-02-24 11:59:12'
    );
  });

  it('时间戳格式', () => {
    expect(formatTime(1573140465006, 'YYYY-MM-DD')).toEqual('2019-11-07');
    expect(formatTime(1573140465006, 'YYYY-MM-DD hh:mm:ss')).toEqual('2019-11-07 23:27:45');
    expect(formatTime(1573140465006, 'YYYY/MM/DD')).toEqual('2019/11/07');
    expect(formatTime(1573140465006, 'YYYY/MM/DD hh:mm:ss')).toEqual('2019/11/07 23:27:45');
    expect(formatTime(1573140465006, 'hh:mm')).toEqual('23:27');
    expect(formatTime(1573140465006, 'YYYYMMDD')).toEqual('20191107');
    expect(formatTime(1573140465006, 'YYYY年MM月DD日')).toEqual('2019年11月07日');
  });
});
