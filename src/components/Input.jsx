import React from 'react'
import AddImage from "../img/addImage.png"

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className="send">
        <input type="file" style={{ display: "none" }} id='file' />
        <label htmlFor="file">
          <img src={AddImage} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input