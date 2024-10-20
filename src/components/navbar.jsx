import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className=" flex flex-row w-full bg-color-2">  
  
    <div className=" max-w-screen-xl  flex flex-wrap items-center 
    justify-between pl-6 pt-5 ">
         <h1 className="font-sora pl-10 text-[60px] font-bold text-color-1 ">
            C.R.A.I
          </h1>
          </div>

        <div className="hidden md:flex md:items-center lg:flex lg:items-center 
        lg:space-x-6 lg:ml-auto ml-auto pt-5 mr-5
        ">
          <ul className=" flex space-x-6
        font-sora text-xl  font-semibold text-color-1 ">
        <li>
          <Link
            to="/"
            className={`nav-link transition-all duration-300 py-1 px-2 ${
              activeLink === 'Home' ? 'bg-color-1 rounded-full text-white py-1' : ' text-color-1 hover:text-gray-300 py-3'
            }`}
            onClick={() => handleLinkClick('Home')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/index"
            className={`nav-link transition-all duration-300 py-1 px-2 ${
              activeLink === 'AgencyIndex' ? 'bg-color-1  rounded-full text-white py-1' : ' text-color-1 hover:text-gray-300 py-3'
            }`}
            onClick={() => handleLinkClick('AgencyIndex')}
          >
            Index
          </Link>
        </li>
        <li>
          <Link
            to="/mission"
            className={`nav-link transition-all duration-300 py-1 px-2 ${
              activeLink === 'Mission' ? 'bg-color-1  rounded-full text-white py-1' : ' text-color-1 hover:text-gray-300 py-3'
            }`}
            onClick={() => handleLinkClick('Mission')}
          >
            Mission
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`nav-link transition-all duration-300 py-1 px-2 ${
              activeLink === 'Contact' ? 'bg-color-1  rounded-full text-white py-1' : ' text-color-1 hover:text-gray-300 py-3'
            }`}
            onClick={() => handleLinkClick('Contact')}
          >
            Contact
          </Link>
        </li>
        {/* Button */}
        <li>
          <Link
            to="/index"
            className="bg-white text-black px-6 py-2
             rounded-full hover:bg-gray-200 hover:text-color-1 
             border border-green-700"
          >
            View All Agencies
          </Link>
        </li>
          </ul>
          </div>

          
      <div className="md:hidden hidden" id="mobile-menu">
       <ul className="flex flex-col items-center space-y-2 bg-green-200 p-4 text-green-900">
        <li><a href="#" className="hover:bg-green-300 px-3 py-1 rounded-md">Index</a></li>
      <li><a href="#" className="hover:bg-green-300 px-3 py-1 rounded-md">Mission</a></li>
      <li><a href="#" className="hover:bg-green-300 px-3 py-1 rounded-md">Contact</a></li>
      <a href="#" className="inline-block px-4 py-2 text-green-900 border
       border-green-900 rounded-full hover:bg-green-300">
        View All Agencies
        </a>
      </ul>
     </div>

 
       
      
    </nav>
  );
};

export default Nav;
