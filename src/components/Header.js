import React from 'react';

function Header() {
  return(
<div className='Header-div'>
      <h1>Ashura</h1>
      <nav>
      <ul>
      <li className='Nav-links'> <a>Home</a> </li>
      <li className='Nav-links'> <a>New</a> </li>
      <li className='Nav-links'> <a>Finished</a> </li>
      <li className='Nav-links'> <a>Hot</a> </li>
      </ul>
      </nav>
</div>
  )
}

export default Header;
