import React from 'react';
import { Link } from 'react-router-dom'

//get button name and path for evaery component
const Navbar = (props) => {

  return (
    <div className='navbar'>
      <h2 onClick={() => props.handleClick(false)}>
        <span className=''>Coding</span>
        <span className=''>Ninjas</span>
      </h2>
      <h2>
        <span>Album Collection</span>
      </h2>
      <Link to={props.path}><button>{props.page}</button></Link>
    </div>
  )
}

export default Navbar
