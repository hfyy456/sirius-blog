import React from 'react';
import './postCard.scss'

interface Iprops {
  title: string,
  cover: string,
  date: string,
  tags: Array<string>
}
const PostCard: React.FC<Iprops> = (props) => {
  const { title, cover, date, tags } = props
  return (
    <div className="card-container">
      <div className='card-cover'></div>
      <div className='card-info'></div>
    </div>
  )
}
export default PostCard