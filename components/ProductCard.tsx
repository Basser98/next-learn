import Link from 'next/link';

interface Product {
  Name: string;
  Type: string;
  Platform: string;
  Price: string;
  Homepage: string;
  Description: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
      <a
        href={product.Homepage}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-2 block text-xl font-bold text-gray-900 transition-colors hover:text-blue-600"
      >
        {product.Name}
      </a>

      <div className="my-3 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
          {product.Type}
        </span>
        <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
          {product.Platform}
        </span>
        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
          {product.Price}
        </span>
        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
          {product.Homepage}
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-600">{product.Description}</p>
    </div>
  );
}
