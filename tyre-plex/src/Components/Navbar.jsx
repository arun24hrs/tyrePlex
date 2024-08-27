import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';



const Navbar = () => {
  return (
    <div className='flex p-4 justify-between'>
        <div className='flex items-center'><button>
        <FontAwesomeIcon icon={faBarsStaggered} className='w-8 h-8' />
        </button>
        <img className='px-2 w-24 h-6' src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo-mbl.png?tr=w-150,q-60" alt="tyre plex logo"  /></div>
        <div className='menu'></div>
        <div>
        <FontAwesomeIcon icon={faUser} className='w-8 h-8 hover:cursor-pointer' />
        </div>
    </div>
  )
}

export default Navbar