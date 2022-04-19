import React from 'react'
import './RightInfo.css'

function RightInfo() {
  return (
    <div className='rightinfo'>
        <h1>Olotu Michael</h1>
        <h4 className='rightinfo__career'>Frontend Developer</h4>
        <div>
        <h3>Profile</h3>
        <p className='text'>
            Very Passionate about frontend development, I love to be new stuffs and solve 
            problems because anytime I do solve a problem I get filled with Joy and love to solve 
            more problems cause it is fun
        </p>
        </div>
        <div>
            <h3>Career</h3>
            <div className='rightinfo__1'>
                <div className='rightinfo__2'> 
                    <p>2022 - Present</p>
                </div>
                <div className='rightinfo__3'> 
                    <p>Sidehustle Internship</p>
                </div>
            </div>
        </div>
         <div>
            <h3>Skills</h3>
            <div className='rightinfo__1'>
                <div className='rightinfo__2'> 
                    <p></p>
                </div>
                <div className='rightinfo__3'> 
                    <p>Html</p>
                    <p>Css</p>
                    <p>JavaScript</p>
                    <p>Reactjs</p>
                </div>
            </div>
        </div>
        <div>
            <h3>Academic</h3>
            <div className='rightinfo__1'>
                <div className='rightinfo__2'> 
                    <p>2020 - Present</p>
                </div>
                <div className='rightinfo__4'> 
                    Metallurgical & Material Engineering
                </div>
                <div className='rightinfo__5'>
                    <p>Federal University Of Technology, Akure</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightInfo