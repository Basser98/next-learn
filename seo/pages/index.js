// pages/index.js
import axios from 'axios';
import Head from 'next/head';

import { Navbar } from '../components/Navbar';
import SubscriptionCalculator from '../components/SubscriptionCalculator';
import { ProductCard } from '../components/ProductCard';

export async function getServerSideProps() {
  const res = await axios.get(process.env.NOCODE_API_URL);
  const products = res.data.data;
  return { props: { products } };
}

export default function HomePage({ products }) {
  return (
    <>
      <Head>
        <title>Anti-Subscribe</title>
        <meta name="description" content="反订阅平台" />
      </Head>
      <Navbar />

      {/* 先放计算器 */}
      <SubscriptionCalculator />

      {/* 然后是产品目录 */}
      <div className="mx-auto max-w-3xl p-8">
        <h1 className="mb-8 text-2xl font-bold">Buy Once 产品目录</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.Name} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
