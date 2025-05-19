import axios from 'axios';

export async function getServerSideProps() {
  // 用你的 NoCodeAPI 链接替换下面的 URL
  const res = await axios.get(process.env.NOCODE_API_URL);
  const products = res.data.data; // NoCodeAPI 的返回格式

  return { props: { products } };
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
