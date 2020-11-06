import React from 'react';
import './Header.scss'
import Navbar from './Navbar'
export default function Header(): JSX.Element {
  const imageUrl: string = 'https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/index.jpg'
  const imageStr: string = `url(${imageUrl})`
  return (
    <header className="header-container" style={{ backgroundImage: imageStr }} >
      <Navbar />
      <div className="blog-infor">
        <h1 className='name'>
          SIRIUS BLOG
        </h1>
        <div className='desc'>
        我是一个只会JavaScript的前端小萌新.
        </div>
      </div>
    </header>
  )
}