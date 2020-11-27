import React from 'react';
import showdown from 'showdown'
import Topbar from '../components/Topbar'
import './Article.scss'
export default function Article() {
  const converter = new showdown.Converter();
  const text = '# hello, markdown!   hello, markdown!'
  const html = converter.makeHtml(text);
  return (
    <div className='page'>
      <Topbar />
      <main className='article-container'>
        <div id="post">
          <div className='infor'>
            <h1>sdas</h1>
            <div className='date'>Sep 14, 2019</div>
          </div>
          <article dangerouslySetInnerHTML={{ __html: html }}>
          </article>
        </div>
      </main>
    </div>
  )
}