// components/Navbar.tsx
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex space-x-8">
          <Link href="/">
            <span className="font-bold text-lg text-blue-700 hover:text-blue-900 cursor-pointer">Anti-Subscribe</span>
          </Link>
          <Link href="/stagement">
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer">Stagement</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer">About</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
