import React from 'react';
import './postCard.scss'

interface Iprops {
  title: string,
  cover: string,
  date: string,
  tags: Array<string>,
  preview: string,
}
const PostCard: React.FC<Iprops> = (props) => {
  const { title, cover, date, tags, preview } = props
  return (
    <div className="card-container">
      <div className='card-cover'>
        <a href='www.baidu.com'>
          <img alt='cover' src={cover} />

        </a>
      </div>
      <div className='card-info'>
        <h3 className='arti-title'>{title}</h3>
        <section className='arti-preview'>{preview}</section>
        <div className='arti-date'>{date}</div>
        <div className='arti-tags'>{tags}</div>
      </div>
    </div>
  )
}
export default PostCard