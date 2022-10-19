import React from 'react'
import PortfolioButton from './ButtonPortfolio'
import ResumeButton from './ButtonResume'
import ContactButton from './ButtonContact'
import BlogButton from './ButtonBlog'
import ButtonsArrows from './ButtonsArrows'


export default function Buttons() {
  
  return (
   

    <div className="buttons flexCol">
     
      
        <div className="flexRow margSmBottom">
        <div id="btnPortfolio"> <PortfolioButton /></div>
        <div className="empty"></div>
        <div className="" id="btnResume"><ResumeButton /></div>
        </div>

        <div className="flexRow">
        
            <ButtonsArrows />
            
            <div className="empty"></div>
            
             
        <div id="btnBlog"><BlogButton /></div>
        <div id="btnContact"><ContactButton /></div>
        </div>
        
    </div>
   
  )

  }
  










