import React from 'react';
import './Navbar.scss'
export default function Navbar(): JSX.Element {
  const blogName: string = 'Sirius Blog'
  return (
    <nav className="nav-container" >
      <span className='blog-name'>{blogName}</span>
      <span className='menus'>
        <ul>
          <li></li>
        </ul>
      </span>
    </nav>
  )
}