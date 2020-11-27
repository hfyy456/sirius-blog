import React from 'react';
import showdown from 'showdown'
import Topbar from '../components/Topbar'
import './Article.scss'
export default function Article() {
  const converter = new showdown.Converter();
  const text = '# hello, markdown!'
  const html = converter.makeHtml(text);
  return (
    <div className='page'>
      <Topbar />
      <main className='article-container'>
        <article dangerouslySetInnerHTML={{ __html: html }}>
        </article>
      </main>
    </div>
  )
}