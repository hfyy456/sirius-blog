import React from 'react';
import PostCard from '../components/postCard'
import './Home.scss'
export default function Home() {
  return (
    <main className='home-page'>
      <div className='post-list'>
        <div className='post-item'>
          <PostCard
            title='代码高亮和表格效果测试'
            cover='https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-docs-01-cover.png'
            date='Sep 14, 2019'
            preview='最近「延禧攻略」大火，于是我也追了一波风。不得不说，服装配饰太精致太好看啦，精致到难以描绘(>_<)'
            tags={[]} />
        </div>

        <div className='post-item'>
          <PostCard
            title='代码高亮和表格效果测试'
            cover='https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-docs-01-cover.png'
            date='Sep 14, 2019'
            preview='最近「延禧攻略」大火，于是我也追了一波风。不得不说，服装配饰太精致太好看啦，精致到难以描绘(>_<)'
            tags={[]} />
        </div>
        <div className='post-item'>
          <PostCard
            title='代码高亮和表格效果测试'
            cover='https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-docs-01-cover.png'
            date='Sep 14, 2019'
            preview='最近「延禧攻略」大火，于是我也追了一波风。不得不说，服装配饰太精致太好看啦，精致到难以描绘(>_<)'
            tags={[]} />
        </div>  <div className='post-item'>
          <PostCard
            title='代码高亮和表格效果测试'
            cover='https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-docs-01-cover.png'
            date='Sep 14, 2019'
            preview='最近「延禧攻略」大火，于是我也追了一波风。不得不说，服装配饰太精致太好看啦，精致到难以描绘(>_<)'
            tags={[]} />
        </div>
      </div>
    </main>
  )
}