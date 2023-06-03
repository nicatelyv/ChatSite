import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat site</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/13360140/pexels-photo-13360140.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>Nicat</span>
        <button>Log out</button>
      </div>
    </div>
  )
}

export default Navbar