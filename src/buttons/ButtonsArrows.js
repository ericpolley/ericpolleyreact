import React from "react"



export default function ButtonsArrows() {
    return (
      
  <div className="flexCol arrowButtons">
            <div className="btnArrows flexRow arrowUp" onClick={showUp}></div>
                
                <div className="flexRow ">
                <div className="btnArrows arrowLeft " onClick={showLeft}></div>
                <div className="empty"></div>
                <div className="btnArrows arrowRight" onClick={showRight}></div>
                </div>
                <div className="btnArrows flexRow" onClick={showDown}></div>
     
      </div>

    
    )

  
    function showUp() {
      console.log('show UP onclick')
      document.getElementById('Tutorials').classList.add('hide');
    document.getElementById('Vlog').classList.add('hide');
      document.getElementById('Blog').classList.remove('hide');
    document.getElementById('Portfolio').classList.add('hide');
    document.getElementById('Contact').classList.add('hide');
    document.getElementById('Resume').classList.add('hide');
    document.getElementById('Home').classList.add('hide');
      
    }
    function showDown() {
        console.log('show Down onclick')
        document.getElementById('Tutorials').classList.add('hide');
    document.getElementById('Vlog').classList.add('hide');
        document.getElementById('Blog').classList.add('hide');
    document.getElementById('Portfolio').classList.remove('hide');
    document.getElementById('Contact').classList.add('hide');
    document.getElementById('Resume').classList.add('hide');
    document.getElementById('Home').classList.add('hide');
     
        
      }
      
      function showLeft() {
        console.log('show Left onclick')
        document.getElementById('Tutorials').classList.add('hide');
    document.getElementById('Vlog').classList.add('hide');
        document.getElementById('Blog').classList.add('hide');
    document.getElementById('Portfolio').classList.add('hide');
    document.getElementById('Contact').classList.remove('hide');
    document.getElementById('Resume').classList.add('hide');
    document.getElementById('Home').classList.add('hide');
      }
      function showRight() {
        console.log('show Right onclick')
        document.getElementById('Tutorials').classList.add('hide');
    document.getElementById('Vlog').classList.add('hide');
        document.getElementById('Blog').classList.add('hide');
    document.getElementById('Portfolio').classList.add('hide');
    document.getElementById('Contact').classList.add('hide');
    document.getElementById('Resume').classList.remove('hide');
    document.getElementById('Home').classList.add('hide');
      }
  

  
  }