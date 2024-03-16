import "../../index.css";
import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
   return (
      <div className="navbar p-0">
         <div className="navbar-start">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="pl-0 btn btn-ghost lg:hidden"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
               >
                  <li>
                     <a>Item 1</a>
                  </li>
                  <li>
                     <a>Recipes</a>
                  </li>

                  <li>
                     <a>About</a>
                  </li>

                  <li>
                     <a>Search</a>
                  </li>
               </ul>
            </div>
            <a
               href="#"
               className="text-xl md:text-3xl font-bold hover:text-[#0be58a] duration-300 cursor-pointer"
            >
               <span className="our-primary">Tushar's</span> Kitchen
            </a>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="space-x-8 menu-horizontal px-1 opacity-70 text-lg header-navbar">
               <li>
                  <a>Home</a>
               </li>

               <li>
                  <a>Recipes</a>
               </li>

               <li>
                  <a>About</a>
               </li>

               <li>
                  <a>Search</a>
               </li>
            </ul>
         </div>
         <div className="navbar-end">
            {/* search bar */}
            <label className="input bg-gray-100 rounded-3xl items-center gap-2 mr-3 flex">
               <FiSearch />
               <input
                  className="w-[70px] lg:w-[130px]"
                  type="text"
                  placeholder="Search"
               />
            </label>
            {/* user button */}
            <button className="text-3xl bg-our-primary rounded-full p-2">
               <FaRegUserCircle />
            </button>
         </div>
      </div>
   );
};

Navbar.propTypes = {};

export default Navbar;
