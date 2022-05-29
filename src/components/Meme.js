import React from 'react'

const Meme = () => {
  return (
    <div>
        <main>
            <form className="form" action="">
                <input 
                    className='form--input'
                    placeholder='Top text'
                    type="text" />
                <input 
                    className='form--input'
                    placeholder='Bottom text'
                    type="text" />
                <button className='form--button'>Get a new memem image </button>
            </form>
        </main>
    </div>
  )
}

export default Meme