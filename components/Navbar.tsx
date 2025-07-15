'use client';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">E-Shop</Link>
      </div>

      <div className={`nav-links ${open ? 'open' : ''}`}>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart <FaShoppingCart /></Link>
        {user ? (
          <>
            <Link href="/profile">Profile</Link>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;