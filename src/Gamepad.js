import React from 'react'
import Camera from './Camera'
import Buttons from './buttons/Buttons'

export default function Gamepad() {
  return (
    <div className="gamePad flexCol">
      <Camera />
      <Buttons />
    </div>
  )
}
