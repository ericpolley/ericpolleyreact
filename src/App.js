import Gamepad from './Gamepad'
import './App.css'
import ButtonTutorials from './buttons/ButtonTutorials';
import ButtonVlog from './buttons/ButtonVlog';
import ButtonPortfolio2 from './buttons/ButtonPortfolio2'


function App() {
  return (
    <div className="flexCol body">
      <div className="flexRow ">
      <div className="navSpacer"></div>
      <ButtonTutorials />
      <div className="navSpacer"></div>
      <ButtonVlog />
      <div className="navSpacer"></div>
      <ButtonPortfolio2 />
      <div className="navSpacer"></div>
      </div>
    <div className="container flexCol">
      
      <Gamepad />  
      </div>
    </div>
  
    
  );
}

export default App;
