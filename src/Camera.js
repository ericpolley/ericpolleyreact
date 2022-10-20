import React from 'react'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Blog from './Blog'
import Contact from './Contact'
import './App.css'
import Home from './Home'
import Tutorials from './Tutorials'
import Vlog from './Vlog'

export default function Camera() {
  return (
    <div className ="tv flexCol">
    <div className="camera flexCol">
      <Home />
      <Vlog />
      <Tutorials />
    <Portfolio />
    <Resume />
    <Blog />
    <Contact />

    </div>
    </div>
  )


}




  

 