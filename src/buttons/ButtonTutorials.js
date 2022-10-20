import React from 'react'

export default function ButtonTutorials() {
  return (
    <>

   
    <div className="nav" onClick={showTutorials}><p>Tutorials</p>  </div>
  
  </>
  )

  function showTutorials() {
    console.log('show tutorial onclick')
    document.getElementById('Tutorials').classList.remove('hide');
    document.getElementById('Vlog').classList.add('hide');
    document.getElementById('Blog').classList.add('hide');
    document.getElementById('Portfolio').classList.add('hide');
    document.getElementById('Contact').classList.add('hide');
    document.getElementById('Resume').classList.add('hide');
    document.getElementById('Home').classList.add('hide');
  }
}
