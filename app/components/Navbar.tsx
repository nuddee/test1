'use client';

import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentMenu, setCurrentMenu] = useState<string | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>, menu: string) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };


  const open = Boolean(anchorEl);

  return (
    <nav className="navbar navbar-expand-lg navbar-red ">
      <div className="container justify-content-center mx-auto px-2 py-2 ">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link href="Aproducts" className="nav-link">
              ALL PRODUCT
            </Link>
          </li>
          <li
            className="nav-item dropdown"
            onMouseEnter={(e) => handleMouseEnter(e, 'shopByPet')}
            onMouseLeave={handleMouseLeave}
          >
            <a className="nav-link dropdown-toggle " href="#">
              SHOP BY PET
            </a>
            {currentMenu === 'shopByPet' && (
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMouseLeave}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                  onMouseLeave: handleMouseLeave,
                }}
              >
                
                <Link href="/dog">
                  <MenuItem onClick={handleMouseLeave}>Dogs</MenuItem>
                </Link>
                <Link href="/cat">
                <MenuItem onClick={handleMouseLeave}>Cats</MenuItem>
                </Link>
                <Link href="/fish">
                  <MenuItem onClick={handleMouseLeave}>Fish</MenuItem>
                </Link>
                <Link href="bird">
                <MenuItem onClick={handleMouseLeave}>Bird</MenuItem>
                </Link>
                <Link href="small-a">
                <MenuItem onClick={handleMouseLeave}>Small Animal</MenuItem>
                </Link>
              </Menu>
            )}
          </li>

          

          <li
            className="nav-item dropdown"
            onMouseEnter={(e) => handleMouseEnter(e, 'promotions')}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="admin-table" className="nav-link">
              Stock Management
            </Link>
            
          </li>

          

          <li
            className="nav-item dropdown"
            onMouseEnter={(e) => handleMouseEnter(e, 'aboutUs')}
            onMouseLeave={handleMouseLeave}
          >
            <a className="nav-link dropdown-toggle" href="#">
              ABOUT US
            </a>
            {currentMenu === 'aboutUs' && (
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMouseLeave}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                  onMouseLeave: handleMouseLeave,
                }}
              > 
                <Link href="Our-Story" className="cart flex items-center">
                  <MenuItem onClick={handleMouseLeave}>Our Story</MenuItem>
                </Link>

                <MenuItem onClick={handleMouseLeave}>Contact Us</MenuItem>
              </Menu>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
