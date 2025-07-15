'use client';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import './products.css';

export default function ProductsPage() {
  return (
    <main className="products-page">
      <h1>Shop Products</h1>
      <div className="products-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </main>
  );
}
