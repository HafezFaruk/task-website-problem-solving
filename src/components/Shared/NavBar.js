import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase.js";
import logo from "../images/logo.png";


const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const { handelLogOut, currentUser } = useFirebase();
 
console.log(handelLogOut);


  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "0px",
          width: "100%",
          display: "sticky",
          zIndex: "2",
        }}
        className=" bg-white shadow-md "
      >
        <nav className=" px-2 bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div

          // className=" container flex flex-wrap justify-between items-center mx-auto"
          >
            <div className="flex justify-between items-center ">
              <NavLink to="/" className="lg:mx-14 ">
                <img
                  src={logo}
                  className="mr-3"
                  width="90px"
                  height="90px"
                  alt="Flowbite Logo"
                />
              </NavLink>
              <div className="order-first md:order-none relative">
                <div className="flex justify-center items-center">
                  <button
                    data-collapse-toggle="mobile-menu"
                    type="button"
                    className=" border-2 inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
                    aria-controls="mobile-menu-2"
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
                  </button>

                  <div
                    className=" hidden w-full md:block md:w-auto"
                    id="mobile-menu"
                  >
                    <ul
                      className={`absolute lg:absolute  bg-white md:bg-transparent top-14 md:-top-3 w-48 md:w-auto -left-1 md:-left-64 lg:-left-80  flex flex-col items-center md:flex-row md:space-x-1 md:mt-0 md:text-xs lg:text-sm xl:text-lg md:font-medium `}
                    >
                      {/* absolute bg-white top-14  w-40  -left-1*/}
                      {/* Dropdown list for courses ------------------- */}
                      <li>
                        {/* <button
                            id="dropdownNavbarLink "
                            data-dropdown-toggle="dropdownNavbar"
                            className=" flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                          >
                            কোর্স-সমূহ
                            <svg
                              className="ml-1 w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </button> */}
                        {/* <!-- Dropdown menu --> */}
                        {/* <div
                            id="dropdownNavbar"
                            className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                          >
                            <ul
                              className="py-1 text-sm text-gray-700 dark:text-gray-400"
                              aria-labelledby="dropdownLargeButton"
                            >
                              <li>
                                <NavLink
                                  to="bcs"
                                  onClick={() => {
                                    window.scrollTo(0, 0);
                                  }}
                                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  বিসিএস
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="primTeac"
                                  onClick={() => {
                                    window.scrollTo(0, 0);
                                  }}
                                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  প্রাথমিক শিক্ষক
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="ntrca"
                                  onClick={() => {
                                    window.scrollTo(0, 0);
                                  }}
                                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  শিক্ষক নিবন্ধন
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="thiredFourthLavel"
                                  onClick={() => {
                                    window.scrollTo(0, 0);
                                  }}
                                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  ৩য় ও ৪র্থ শ্রেণির চাকরি
                                </NavLink>
                              </li>
                            </ul>
                          </div> */}
                      </li>

                      <li>
                        <NavLink
                          to="allCourses"
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}
                          className={({ isActive }) =>
                            `block px-3 py-1 rounded-md hover:bg-yellow-300 hover:text-white border-black transition-all duration-300 ease-linear ${
                              isActive
                                ? "bg-yellow-300 text-white "
                                : "border-white"
                            }`
                          }
                        >
                          <span className="whitespace-nowrap"> কোর্স-সমূহ</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="bcs"
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}
                          className={({ isActive }) =>
                            `block px-3 py-1 rounded-md hover:bg-yellow-300 hover:text-white border-black transition-all duration-300 ease-linear ${
                              isActive
                                ? "bg-yellow-300 text-white "
                                : "border-white"
                            }`
                          }
                        >
                          বিসিএস
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="primTeac"
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}
                          className={({ isActive }) =>
                            `block px-3 py-1 rounded-md hover:bg-yellow-300 hover:text-white border-black transition-all duration-300 ease-linear ${
                              isActive
                                ? "bg-yellow-300 text-white "
                                : "border-white"
                            }`
                          }
                        >
                          <span className="whitespace-nowrap">
                            প্রাথমিক শিক্ষক
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="ntrca"
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}
                          className={({ isActive }) =>
                            `block pr-3 pl-3 px-4 py-1 rounded-md hover:bg-yellow-300 hover:text-white border-black transition-all duration-300 ease-linear ${
                              isActive
                                ? "bg-yellow-300 text-white "
                                : "border-white"
                            }`
                          }
                        >
                          <span className="whitespace-nowrap">
                            শিক্ষক নিবন্ধন
                          </span>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="bookStore"
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}
                          className={({ isActive }) =>
                            `block px-3 py-1 rounded-md hover:bg-yellow-300 hover:text-white border-black transition-all duration-300 ease-linear ${
                              isActive
                                ? "bg-yellow-300 text-white "
                                : "border-white"
                            }`
                          }
                        >
                          <span className="whitespace-nowrap"> বুক স্টোর</span>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="noticeBoard"
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}
                          className={({ isActive }) =>
                            `block px-3 py-1 rounded-md hover:bg-yellow-300 hover:text-white border-black transition-all duration-300 ease-linear ${
                              isActive
                                ? "bg-yellow-300 text-white "
                                : "border-white"
                            }`
                          }
                        >
                          নোটিশ
                        </NavLink>
                      </li>
                    </ul>
                    {/* <div className=" md:mr-16 md:hidden sm:block ">
                      {!currentUser ? (
                        <Link
                          to="/login"
                          onClick={() => {
                            setShowLogin(true);
                          }}
                          className="mx-6 truncate"
                        >
                          লগ-ইন
                        </Link>
                      ) : (
                        <button onClick={logOut}>Logout</button>
                      )}
                      <Link
                        to="/signUp"
                        onClick={() => {
                          setShowSignUp(true);
                        }}
                        c
                        style={{ backgroundColor: "#F0AC01" }}
                        className=" truncate py-1 px-2 rounded text-white  "
                      >
                        রেজিস্টার
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                {/* {showLogin ? (
                    <LoginModal
                      setShowLogin={setShowLogin}
                      setShowSignUp={setShowSignUp}
                    />
                  ) : null}
                  {showSignUp ? (
                    <SignUpModal
                      setShowSignUp={setShowSignUp}
                      setShowLogin={setShowLogin}
                    />
                  ) : null} */}

                {/* login and sign up button ----------------------------- */}
                <div className=" lg:mr-16  ">
                  <Link
                    to="/login"
                    onClick={() => {
                      setShowLogin(true);
                    }}
                    className="mx-6 truncate"
                  >
                    লগ-ইন
                  </Link>
                  {/* {currentUser.email ? (
                    <Link
                      to="/login"
                      onClick={() => {
                        setShowLogin(true);
                      }}
                      className="mx-6 truncate"
                    >
                      লগ-ইন
                    </Link>
                  ) : (
                    <button onClick={handelLogOut} className="mx-6 truncate">
                      Log Out
                    </button>
                  )} */}
                  <Link
                    to="/signUp"
                    onClick={() => {
                      setShowSignUp(true);
                    }}
                    style={{ backgroundColor: "#F0AC01" }}
                    className=" truncate py-1 px-2 rounded text-white  "
                  >
                    রেজিস্টার
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
