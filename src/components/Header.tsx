import React from 'react';
import './Header.scss'
import Navbar from './Navbar'

export default function Header(): JSX.Element {
  const imageUrl: string = 'https://qiniu.hfsblog.com/36966143821_36e65cfcb3_k.jpg'
  const imageStr: string = `url(${imageUrl})`
  const scrollToElement = (e: any) => {
    const elem = document.getElementById('post')
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  }
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
      <div className='scroll-down'><i onClick={scrollToElement} className="iconfont icontop bottom"></i></div>
    </header>
  )
}