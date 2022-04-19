import React from 'react'
import './LeftInfo.css'

function LeftInfo() {
  return (
    <div className='leftinfo'>
        <img src='https://svgsilh.com/svg/1633249.svg' className='leftinfo__image' />
        <div className='leftinfo__box'>
        <h2>Contact</h2>
        <div className='leftinfo__address'>
            <h4>Address</h4>
            <p>8,Onyema Close,Kola,Alagbado. Lagos</p>
            <h4>Phone</h4>
            <p>07046166802</p>
            <h4>Email</h4>
            <p>Michaeltimilehin36@gmail.com</p>
            <h4>Facebook</h4>
            <p>facebook.com/olotu_michael</p>
            <h4>Twitter</h4>
            <p>@Semz01</p>
        </div>
        <div>
            <h2>Language</h2>
            <p>English</p>
            <p>French</p>
        </div>
        </div>
     </div>
  )
}

export default LeftInfo