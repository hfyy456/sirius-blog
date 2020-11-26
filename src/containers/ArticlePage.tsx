import React from 'react';
import showdown from 'showdown'
export default function Article() {
  const converter = new showdown.Converter();
  const text = '# hello, markdown!'
  const html = converter.makeHtml(text);
  return (
    <div>
      <article dangerouslySetInnerHTML={{__html: html }}>
      </article>
    </div>
  )
}