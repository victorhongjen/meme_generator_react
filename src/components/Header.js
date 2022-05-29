import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <img
        src={require('../images/yaoming.png')}
        alt=""
        className="header--img"
      />
      <h2 className='header--title'>Meme Generator</h2>
      <h5 className='header--project'>React Project - Interactive</h5>
    </header>
  )
}

export default Header