import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const iAngleRight = <FontAwesomeIcon icon={ faAngleRight } />

    return (
        <div style={{ marginTop: '97px', backgroundColor: 'rgba(240, 172, 1, 0.05)'}} className='' >
            <div className='sm:p-7 sm:text-left md:p-12 flex justify-around items-top '>

                <div className='md:w-3/12 ' >
                    <h1 className='text-2xl font-black md:text-left ' >BCS <span className='text-yellow-400' >joyjatra</span></h1><br />
                    <div className='md:text-left ' >
                        <p className='hover:text-yellow-500 transition-all duration-100 ease-linear' >Contact Number: +880 1778-466968</p><br />
                        <p className='hover:text-yellow-500 transition-all duration-100 ease-linear' >Email: info@bcsjoyjatra.com</p>
                    </div>
                </div>

                {/* <div className='md:flex justify-around items-top md:w-6/12 md:px-5'> */}
                    <div className='w-3/12 md:pl-12 ' > 
                        <h1 className='text-2xl font-black md:text-left  '>About</h1><br />
                        <div className='md:text-left' >
                            <p className='hover:text-yellow-500 transition-all duration-100 ease-linear' >Privacy Policy</p><br />
                            <p className='hover:text-yellow-500 transition-all duration-100 ease-linear' >Terms & Conditions</p>
                        </div>
                    </div>

                    <div className='md:w-3/12 sm:w-2/12 md:pl-9 ' >
                        <h1 className='text-2xl font-black md:text-left  '>Product</h1><br />
                        <div className='md:text-left ' >
                            <p><NavLink to='/' onClick={()=>{window.scrollTo(0, 0)}} className='hover:text-yellow-500 transition-all duration-100 ease-linear'>কোর্স-সমূহ</NavLink></p><br />
                            <p><NavLink to='bcs' onClick={()=>{window.scrollTo(0, 0)}} className="hover:text-yellow-500 transition-all duration-100 ease-linear" >বিসিএস</NavLink></p><br />
                            <p><NavLink to='bookStore' onClick={()=>{window.scrollTo(0, 0)}} className='hover:text-yellow-500 transition-all duration-100 ease-linear'>বুক স্টোর</NavLink></p><br />
                        </div>
                    </div>
                {/* </div> */}


                <div className='md:w-3/12 sm:px-2  '>
                <h1 className='text-2xl text-left font-black ' >Follow US</h1><br />
                <div className='w-full flex flex-col justify-end' >
                    <div className=' w-3/4 flex  ' >
                        <div> <a href='https://www.facebook.com/bcsjoyjatra/?ref=pages_you_manage' target="_blank" rel="noreferrer" ><img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="facebook icon" width='20px' /> </a> </div>
                        <div className='ml-9' ><a href='https://www.youtube.com/channel/UC2Velx-0kDEI3S9LTBoCkbg' target="_blank" rel="noreferrer" ><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="youtube icon" width='20px' /></a> </div>
                    </div> <br /><br />

                    <button className='w-full px-4 py-2 flex justify-between items-center bg-black mr-4 text-white '>
                        <span>Enter Your Email</span>
                        <span className='font-bold text-2xl' >{ iAngleRight }</span>
                    </button>
                </div>
                    
  
                </div>
                
            </div>
            <div>
                <p className='p-4 text-sm ' >স্বত্ব ©২০২২ মেক রিয়েল কতৃক সর্বস্বত্ব সংরক্ষিত</p>
            </div>
        </div>
    );
};

export default Footer;