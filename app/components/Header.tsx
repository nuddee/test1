'use client'; // Ensure it runs on the client

import React from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link'; // Import Link from Next.js

export default function Header() {
  return (
    <header className="bg-danger text-white p-3 flex justify-between items-center">
      <div className="container flex items-center">
        <Link href="/" className="navbar-brand flex items-center text-white">
          <PetsIcon style={{ height: '50px' }} />
          <span className="ml-2">Pet goods store</span>
        </Link>
      </div>
      <div>
        <img src="https://media1.giphy.com/media/leuNkvf9pE6loEnjnb/source.gif" alt="" style={{ height: '60px', marginRight:"800px"}}/>
      </div>
      
      {/* Right side - Login and Cart */}
      <div className="flex items-center space-x-4"> {/* Space between login and cart */}
        {/* Login Icon */}
        <Link href="/Login" className="login flex items-center">
          <AccountCircleIcon className="mr-2" />
          <span>Log In</span>
        </Link>
        {/* Cart Icon */}
        <Link href="/Cart" className="cart flex items-center">
          <ShoppingCartIcon className="mr-2" />
          <span>Cart</span>
        </Link>
      </div>
    </header>
  );
}
