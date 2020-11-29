import React from 'react';
import './postCard.scss'
import { NavLink } from 'react-router-dom'

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
        <NavLink to='/article/123'>
          <img alt='cover' src={cover} />
        </NavLink>
      </div>
      <div className='card-info'>
        <NavLink className='link-active' to='/article/123' ><h3 className='arti-title'>{title}</h3></NavLink>
        <section className='arti-preview'>{preview}</section>
        <div className='arti-date'>{date}</div>
        <div className='arti-tags'>{tags}</div>
      </div>
    </div>
  )
}
export default PostCard