
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
    }
    function showDown() {
        console.log('show Down onclick')
      }
      function showLeft() {
        console.log('show Left onclick')
      }
      function showRight() {
        console.log('show Right onclick')
      }
  }