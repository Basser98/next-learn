import { useState } from 'react';

interface SubscriptionItem {
  name: string;
  price: number;
  period: '月' | '年';
}

export default function SubscriptionCalculator() {
  const [subs, setSubs] = useState<SubscriptionItem[]>([
    { name: '', price: 0, period: '月' }
  ]);
  const [result, setResult] = useState({ month: 0, year: 0 });

  // 计算总费用
  const calc = (subs: SubscriptionItem[]) => {
    let month = 0, year = 0;
    subs.forEach(item => {
      if (item.period === '月') {
        month += item.price;
        year += item.price * 12;
      } else {
        year += item.price;
        month += item.price / 12;
      }
    });
    setResult({
      month: Number(month.toFixed(2)),
      year: Number(year.toFixed(2)),
    });
  };

  // 用户输入改变
  const handleChange = (idx: number, key: keyof SubscriptionItem, val: any) => {
    const copy = [...subs];
    (copy[idx] as any)[key] = key === 'price' ? Number(val) : val;
    setSubs(copy);
    calc(copy);
  };

  // 添加一行
  const addRow = () => {
    setSubs([...subs, { name: '', price: 0, period: '月' }]);
  };

  // 删除一行
  const removeRow = (idx: number) => {
    const copy = subs.filter((_, i) => i !== idx);
    setSubs(copy.length ? copy : [{ name: '', price: 0, period: '月' }]);
    calc(copy);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 mb-12">
      <h2 className="text-xl font-bold mb-6 text-center">订阅支出计算器</h2>
      <div className="space-y-4">
        {subs.map((item, idx) => (
          <div key={idx} className="flex gap-2 items-center">
            <input
              className="border px-2 py-1 rounded w-40"
              placeholder="产品名，如 Netflix"
              value={item.name}
              onChange={e => handleChange(idx, 'name', e.target.value)}
            />
            <input
              type="number"
              className="border px-2 py-1 rounded w-24"
              placeholder="价格"
              min={0}
              value={item.price}
              onChange={e => handleChange(idx, 'price', e.target.value)}
            />
            <select
              className="border px-2 py-1 rounded"
              value={item.period}
              onChange={e => handleChange(idx, 'period', e.target.value as '月' | '年')}
            >
              <option value="月">每月</option>
              <option value="年">每年</option>
            </select>
            <button className="text-red-500 ml-2" onClick={() => removeRow(idx)}>删除</button>
          </div>
        ))}
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded mt-2"
          onClick={addRow}
        >
          + 添加一项
        </button>
      </div>

      <div className="mt-8 p-4 rounded bg-gray-50 text-center">
        <div>每月合计支出：<span className="font-bold text-blue-700 text-lg">¥{result.month}</span></div>
        <div>每年合计支出：<span className="font-bold text-blue-700 text-lg">¥{result.year}</span></div>
      </div>
      <div className="text-xs text-gray-400 mt-3">* 计算结果仅本地保存，不上传服务器。</div>
    </div>
  );
}
