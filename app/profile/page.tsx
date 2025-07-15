'use client';
import { useAuth } from '@/context/AuthContext';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import './profile.css';

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
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
// This page displays the user's profile information and allows them to log out.
// If the user is not logged in, they are redirected to the login page.