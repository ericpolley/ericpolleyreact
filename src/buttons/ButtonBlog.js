import React from 'react'

export default function Blog() {
  return (
    <>

   
    <div className="btnRound margTop flexRow darken" onClick={showContact}>Blog</div>
  
  </>
  )

  function showContact() {
    console.log('show blog onclick')
    document.getElementById('Blog').classList.remove('hide');
    document.getElementById('Portfolio').classList.add('hide');
    document.getElementById('Contact').classList.add('hide');
    document.getElementById('Resume').classList.add('hide');
    document.getElementById('Home').classList.add('hide');
  }
}
