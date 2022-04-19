import React from 'react'
import './Screen.css'
import LeftInfo from '../component/LeftInfo'
import RightInfo from '../component/RightInfo'

function screen() {
  return (
    <div className='screen'>
        <LeftInfo />
        <RightInfo />
    </div>
  )
}

export default screen