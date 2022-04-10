import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isNavbarToggle, setIsNavbarToggle] = useState(false);
    const toggleTarget = document.getElementById("mobile-menu");

    const mobileToggleHandler = ()=>{
        setIsNavbarToggle(!isNavbarToggle);
        // if(isNavbarToggle){
        //     toggleTarget.classList.remove("hidden");
        // }else{
        //     toggleTarget.classList.add("hidden");
        // }
    }

    

  return (
    <div className="fixed top-0 left-0 w-screen">
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Dream Diary
            </span>
          </Link>
          <div className="flex md:order-2">
            <div className="hidden relative mr-3 md:mr-0 md:block">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="email-adress-icon"
                className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <button
              id="mobile-menu-toggle"
              onClick={mobileToggleHandler}
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`${!isNavbarToggle ? "hidden" : ""} justify-between items-center w-full md:flex md:w-auto md:order-1`}
            style={{ transition: 'all 3s ease-in-out', display: isNavbarToggle ? '100px' : '0' }} 
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to="/myNotes"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  MyNotes
                </Link>
              </li>
           </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
