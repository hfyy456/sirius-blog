import React, { useEffect } from 'react';
import './Navbar.scss'
import { NavLink, useHistory } from 'react-router-dom'

export default function Navbar(): JSX.Element {
  const path: any = useHistory()
  const blogName: string = 'Sirius Blog'
  const menuList: Array<any> = [{
    name: '首页',
    path: '/',
    icon: 'home'
  }, {
    name: "关于",
    path: '/about',
    icon: 'feeds'
  },]
  useEffect(() => {
    console.log(path.location.pathname)
  })
  return (
    <nav className="nav-container" >
      <span className='blog-name'>{blogName}</span>
      <span className='menus'>
        {
          menuList.map((item, index) => {
            return <span className='menu-item' key={index}><NavLink activeClassName='menu-item-active' to={item.path}><i className={`iconfont icon${item.icon}-fill`} />{item.name}</NavLink></span>
          })
        }
      </span>
    </nav>
  )
}