"use client";
import { useRouter } from "next/navigation";
import { products } from "@/lib/products";
import "./home.css";
import {
  FaShoppingBag,
  FaArrowRight,
  FaLaptop,
  FaTshirt,
  FaMobileAlt,
  FaHeadphones,
} from "react-icons/fa";

export default function HomePage() {
  const router = useRouter();
  const featured = products.slice(0, 3);

  const categories = [
    { name: "Electronics", icon: <FaLaptop /> },
    { name: "Fashion", icon: <FaTshirt /> },
    { name: "Phones", icon: <FaMobileAlt /> },
    { name: "Accessories", icon: <FaHeadphones /> },
  ];

  return (
    <div className="home-container">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="fade-in-up">
            Welcome to <span>E-Shop</span>
          </h1>
          <p className="fade-in-up delay-1">
            Your favorite online store for tech, fashion & more.
          </p>
          <button
            onClick={() => router.push("/products")}
            className="shop-btn fade-in-up delay-2"
          >
            <FaShoppingBag /> Shop Now
          </button>
        </div>
      </section>

      {/* FEATURED */}
      <section className="featured">
        <h2 className="featured-title">🔥 Featured Products</h2>
        <p className="featured-subtitle">Top picks just for you</p>
        <div className="featured-grid">
          {featured.map((product, i) => (
            <div
              key={product.id}
              className={`featured-card fade-in-up delay-${i}`}
            >
              <div className="image-wrap">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="card-info">
                <h4>{product.name}</h4>
                <p>${product.price}</p>
                <button onClick={() => router.push("/products")}>
                  View Product <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2 className="category-title">🧭 Shop by Category</h2>
        <p className="category-subtitle">Explore our collections</p>
        <div className="category-grid">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`category-card fade-in-up delay-${i}`}
            >
              <div className="icon">{cat.icon}</div>
              <h4>{cat.name}</h4>
              <button onClick={() => router.push("/products")}>
                Browse <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
