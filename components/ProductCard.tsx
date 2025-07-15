"use client";
import { ProductType } from "../lib/products";
import { useNotification } from "@/context/NotificationContext";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import "./ProductCard.css";

export default function ProductCard({ product }: { product: ProductType }) {
  const { showNotification } = useNotification();
  const { user } = useAuth();
  const router = useRouter();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!user) {
      showNotification("Please log in to add to cart", "error");
      return router.push("/login");
    }

    addToCart(product);
    showNotification(`${product.name} added to cart`, "success");
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
