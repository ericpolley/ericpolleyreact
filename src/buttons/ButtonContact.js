import React from 'react'

export default function Blog() {
  return (
    <>

   
<div className="btnRound margBottom flexRow darken spacer" onClick={showContact}>Contact</div>
  
  </>
  )

  function showContact() {
    console.log('show contact onclick')
    document.getElementById('Blog').classList.add('hide');
    document.getElementById('Portfolio').classList.add('hide');
    document.getElementById('Contact').classList.remove('hide');
    document.getElementById('Resume').classList.add('hide');
    document.getElementById('Home').classList.add('hide');
  }
}
