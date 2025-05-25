import axios from 'axios';
import { ProductCard } from '../components/ProductCard';

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
    <div className="mx-auto max-w-3xl p-8">
      <h1 className="mb-8 text-2xl font-bold">Buy Once 产品目录</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.Name} product={product} />
        ))}
      </div>
    </div>
  );
}
