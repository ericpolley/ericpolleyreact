import React from 'react'

export default function ButtonTutorials() {
  return (
    <>

   
    <div className="nav" onClick={showVlog}> <p> Monthly Vlog Videos </p></div>
  
  </>
  )

  function showVlog() {
    console.log('show vlog onclick')
    document.getElementById('Vlog').classList.remove('hide');
    document.getElementById('Tutorials').classList.add('hide');
    document.getElementById('Blog').classList.add('hide');
    document.getElementById('Portfolio').classList.add('hide');
    document.getElementById('Contact').classList.add('hide');
    document.getElementById('Resume').classList.add('hide');
    document.getElementById('Home').classList.add('hide');
  }
}
