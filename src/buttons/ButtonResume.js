

export default function Blog() {
  return (
    <>

   
    <div className="btnLong darken flexRow"  onClick={showResume}>Resume</div>
  
  </>
  )

  function showResume() {
    console.log('show resume onclick')
    document.getElementById('Blog').classList.add('hide');
    document.getElementById('Portfolio').classList.add('hide');
    document.getElementById('Contact').classList.add('hide');
    document.getElementById('Resume').classList.remove('hide');
    document.getElementById('Home').classList.add('hide');
  }
}
