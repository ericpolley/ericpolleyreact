import React from 'react'

export default function Blog() {
  return (
    <>

   
    <div className="darken btnRound margTop flexRow " onClick={showBlog}>Blog</div>
  
  </>
  )

  function showBlog() {
    console.log('show tutorials onclick')
    document.getElementById('Tutorials').classList.add('hide');
    document.getElementById('Vlog').classList.add('hide');
    document.getElementById('Blog').classList.remove('hide');
    document.getElementById('Portfolio').classList.add('hide');
    document.getElementById('Contact').classList.add('hide');
    document.getElementById('Resume').classList.add('hide');
    document.getElementById('Home').classList.add('hide');
  }
}
