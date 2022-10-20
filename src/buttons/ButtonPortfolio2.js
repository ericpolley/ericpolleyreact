

export default function Portfolio2() {
  return (
    <>

   
    <div className="nav"  onClick={showPortfolio2}>Portfolio</div>
  
  </>
  )

  function showPortfolio2() {
    console.log('show portfolio2 onclick')
    document.getElementById('Tutorials').classList.add('hide');
    document.getElementById('Vlog').classList.add('hide');
    document.getElementById('Blog').classList.add('hide');
    document.getElementById('Portfolio').classList.remove('hide');
    document.getElementById('Contact').classList.add('hide');
    document.getElementById('Resume').classList.add('hide');
    document.getElementById('Home').classList.add('hide');
  }
}
