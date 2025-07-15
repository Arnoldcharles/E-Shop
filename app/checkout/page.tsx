'use client';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { useNotification } from '@/context/NotificationContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import './checkout.css';

export default function CheckoutPage() {
  const { user } = useAuth();
  const { cart, clearCart } = useCart();
  const { showNotification } = useNotification();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      showNotification('Login required to access checkout', 'error');
      router.push('/login');
    }
  }, [user]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items: cart,
      total: total.toFixed(2),
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const updatedOrders = [newOrder, ...existingOrders];
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    showNotification('Order placed successfully!', 'success');
    clearCart();
    router.push('/profile');
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <div className="checkout-box">
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} x {item.quantity} = ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
}
