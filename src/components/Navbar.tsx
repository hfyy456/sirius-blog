import React, { useEffect } from 'react';
import './Navbar.scss'
import { Link, useHistory } from 'react-router-dom'

export default function Navbar(): JSX.Element {
  const path: any = useHistory()
  const blogName: string = 'Sirius Blog'
  const menuList: Array<any> = [{
    name: '首页',
    path: '/about',
  }]
  useEffect(() => {
    console.log(path.location.pathname)
  })
  return (
    <nav className="nav-container" >
      <span className='blog-name'>{blogName}</span>
      <span className='menus'>
        <ul>
          {
            menuList.map((item, index) => {
              return <li key={index}><Link to={item.path}>{item.name}</Link></li>
            })
          }
        </ul>
      </span>
    </nav>
  )
}