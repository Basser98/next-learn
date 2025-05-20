import axios from 'axios';

export async function getServerSideProps() {
  try {
    const res = await axios.get(process.env.NOCODE_API_URL);
    const products = res.data.data;
    return { props: { products } };
  } catch (err) {
    console.error('API 调用出错:', err.message, err?.response?.data);
    // 你可以返回空数组或者返回一个错误页
    return { props: { products: [] } };
  }
}

export default function HomePage({ products }) {
  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl font-bold">Buy Once 产品目录</h1>
      {products && products.length > 0 ? (
        <ul>
          {products.map((prod, i) => (
            <li key={i} className="mb-4">
              <a
                href={prod.Homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600"
              >
                {prod.Name}
              </a>
              {' — '}
              {prod.Type} | {prod.Platform} | ¥{prod.Price}
              <div className="text-sm text-gray-500">{prod.Description}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>暂无产品</p>
      )}
    </div>
  );
}
