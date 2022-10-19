import React from 'react'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Blog from './Blog'
import Contact from './Contact'
import './App.css'
import Home from './Home'

export default function Camera() {
  return (
    <div className ="tv flexCol">
    <div className="camera flexCol">
      <Home />
    <Portfolio />
    <Resume />
    <Blog />
    <Contact />

    </div>
    </div>
  )


}




  

 