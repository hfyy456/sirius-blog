import React from 'react';
import PostCard from '../components/postCard'
import './Home.scss'
export default function Home() {
  return (
    <main className='home-page'>
      <div className='post-list'>
        <PostCard title='f' cover='s' date='s' tags={[]} />
      </div>
    </main>
  )
}