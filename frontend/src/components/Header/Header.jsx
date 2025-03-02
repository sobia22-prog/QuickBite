import React from 'react';
import './Header.css';
import headerImage from './header_img.png'; // Import the image

const Header = () => {
  return (
    <div 
      className='header' 
      style={{ backgroundImage: `url(${headerImage})` }} // Set background image using inline styles
    >
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Welcome to our food ordering platform! Browse our diverse menu, from tantalizing appetizers to mouthwatering entrees. Order your favorites with ease and convenience. Enjoy delicious meals delivered right to your doorstep!</p>
            <button>View Menu</button>
        </div>
    </div>
  );
};

export default Header;
