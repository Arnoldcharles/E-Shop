'use client';
import { useRouter } from 'next/navigation';
import './home.css';
import { FaShoppingBag } from 'react-icons/fa';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="fade-in-up">Welcome to <span>E-Shop</span></h1>
          <p className="fade-in-up delay-1">Your favorite online store for tech, fashion & more.</p>
          <button onClick={() => router.push('/products')} className="shop-btn fade-in-up delay-2">
            <FaShoppingBag /> Shop Now
          </button>
        </div>
      </section>
    </div>
  );
}
