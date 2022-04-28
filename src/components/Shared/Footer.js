import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const iAngleRight = <FontAwesomeIcon icon={ faAngleRight } />

    return (
      <div
        style={{
          backgroundColor: "rgba(240, 172, 1, 0.05)",
        }}
        className="mt-10"
      >
        <div className="grid grid-cols-12 md:mx-14">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 mt-10 lg:mt-0">
            <h1 className="text-2xl font-black md:text-left ">
              BCS <span className="text-yellow-400">joyjatra</span>
            </h1>
            <br />
            <div className="md:text-left ">
              <p className="hover:text-yellow-500 transition-all duration-100 ease-linear">
                Contact Number: +880 1778-466968
              </p>
              <br />
              <p className="hover:text-yellow-500 transition-all duration-100 ease-linear">
                Email: info@bcsjoyjatra.com
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3 mt-10 lg:mt-0">
            <h1 className="text-2xl font-black md:text-left  ">About</h1>
            <br />
            <div className="md:text-left">
              <p className="hover:text-yellow-500 transition-all duration-100 ease-linear">
                Privacy Policy
              </p>
              <br />
              <p className="hover:text-yellow-500 transition-all duration-100 ease-linear">
                Terms & Conditions
              </p>
            </div>
          </div>

          <div className=" col-span-12 md:col-span-6 lg:col-span-2 xl:col-span-2 mt-10 lg:mt-0">
            <h1 className="text-2xl font-black md:text-left  ">Product</h1>
            <br />
            <div className="md:text-left ">
              <p>
                <NavLink
                  to="/"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-yellow-500 transition-all duration-100 ease-linear"
                >
                  কোর্স-সমূহ
                </NavLink>
              </p>
              <br />
              <p>
                <NavLink
                  to="bcs"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-yellow-500 transition-all duration-100 ease-linear"
                >
                  বিসিএস
                </NavLink>
              </p>
              <br />
              <p>
                <NavLink
                  to="bookStore"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-yellow-500 transition-all duration-100 ease-linear"
                >
                  বুক স্টোর
                </NavLink>
              </p>
              <br />
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3 mt-10 lg:mt-0">
            <div className="w-full flex flex-col justify-end">
              <h1 className="text-2xl text-center sm:text-left font-black ">
                Follow US
              </h1>
              <br />
              <div className=" flex mx-auto sm:mx-0">
                <div>
                  <a
                    href="https://www.facebook.com/bcsjoyjatra/?ref=pages_you_manage"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/174/174848.png"
                      alt="facebook icon"
                      width="20px"
                    />{" "}
                  </a>{" "}
                </div>
                <div className="ml-9">
                  <a
                    href="https://www.youtube.com/channel/UC2Velx-0kDEI3S9LTBoCkbg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                      alt="youtube icon"
                      width="20px"
                    />
                  </a>
                </div>
              </div>
              <br />
              <br />
            </div>
            <button className="w-full px-4 py-2 flex justify-between items-center bg-black mr-4 text-white">
             
              <input
                type="email"
                name=""
                placeholder="Enter Your Email"
                id=""
              />
              <span className="font-bold text-2xl">{iAngleRight}</span>
            </button>
          </div>
        </div>
        <div>
          <p className="p-4 text-sm ">
            স্বত্ব ©২০২২ মেক রিয়েল কতৃক সর্বস্বত্ব সংরক্ষিত
          </p>
        </div>
      </div>
    );
};

export default Footer;