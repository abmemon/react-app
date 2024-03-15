import React from 'react'
import contentCss from '../../../assets/css/content.module.css'

function Content() {
  return (
    <>
      <aside className={contentCss.sidebar}>Menu</aside>
      <div className={contentCss.contentbody}>OLorem ipsum dolor sit amet consectetur adipisicing elit. Unde illo quis distinctio molestias corporis debitis magnam aperiam et itaque hic dolore sed amet, laborum nostrum vero sapiente porro recusandae facere!</div>
    </>
  )
}

export default Content