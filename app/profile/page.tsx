'use client';
import { useAuth } from '@/context/AuthContext';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import './profile.css';

function OrderHistory() {
  if (typeof window === 'undefined') return null;

  const orders = JSON.parse(localStorage.getItem('orders') || '[]');

  if (!orders.length) {
    return <p className="empty">No previous orders.</p>;
  }

  return (
    <div className="orders">
      {orders.map((order: any) => (
        <div className="order-card" key={order.id}>
          <p><strong>Date:</strong> {order.date}</p>
          <ul>
            {order.items.map((item: any) => (
              <li key={item.id}>
                {item.name} x {item.quantity} – ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${order.total}</p>
        </div>
      ))}
    </div>
  );
}

export default function ProfilePage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user]);

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/');
  };

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      {user ? (
        <div className="profile-box">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Account ID:</strong> {user.uid}</p>
          <p><em>Thank you for shopping with us!</em></p>

          <h3>🧾 Order History</h3>
          <OrderHistory />

          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
// This component renders the user's profile page, including their email, account ID, and order history.
// It also provides a logout button that signs the user out and redirects them to the home page