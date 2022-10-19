

export default function Blog() {
  return (
    <>

   
    <div className="btnLong flexRow darken"  onClick={showPortfolio}>Portfolio</div>
  
  </>
  )

  function showPortfolio() {
    console.log('show portfolio onclick')
    document.getElementById('Blog').classList.add('hide');
    document.getElementById('Portfolio').classList.remove('hide');
    document.getElementById('Contact').classList.add('hide');
    document.getElementById('Resume').classList.add('hide');
    document.getElementById('Home').classList.add('hide');
  }
}
