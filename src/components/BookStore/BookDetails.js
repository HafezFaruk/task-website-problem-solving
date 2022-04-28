import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import BookDetailsText from './BookStoreUnits/BookDetailsText';

const BookDetails = () => {

    const [promoCodeBox, setPromoCodeBox ] = useState( false );
    const navigate = useNavigate();
    const location = useLocation();
    const { bookId } = useParams();
    const selBook = location.state.selectedBook;

    console.log( selBook.bookId )

    const handleStartCourses = ( )=>{
        navigate(`/bookStore/det/${selBook.bookId}/purc`, { state: { selBook }})
        window.scrollTo(0, 0)
    }


    return (
        <div style={{ marginTop: '110px' }}  >

            <div className='md:mx-16 sm:mx-8' >
                <div className=' w-full relative sm:flex ' >
                    
                    <div className=' md:w-7/12 sm:w-full ' >
                        <BookDetailsText />
                    </div>

                    {/* book img card ------------------- */}
                    <div className='md:w-5/12 sm:w-full sm:mb-4 mx-2 sm:mx-0'>
                        <div className='flex flex-col m-2 rounded-lg shadow-xl ' >

                            {/* book image  */}
                            <div className=' flex p-4  ' >
                                <div className='sm:w-6/12' >
                                    <img width='100%' className='rounded-md' src={ selBook.bookImg } alt="book" />
                                </div>
                                <div className='sm:w-6/12 my-auto' >
                                    <div className='' >

                                        <div className='mx-4 my-2 flex' >
                                            <div className=' bg-yellow-100 p-2 rounded-md ' >
                                                <img width='65px' height='65px' src="https://cdn-icons-png.flaticon.com/512/327/327116.png" alt="book pages" />
                                            </div>
                                            <div className=' ml-3 flex flex-col justify-around items-start' >
                                                <p className=' font-bold ' >পৃষ্ঠা</p>
                                                <p className=' font-bold ' >৬১৩</p>
                                            </div>
                                        </div>

                                        <div className='mx-4 my-2 flex' >
                                            <div className=' bg-pink-100 p-2 rounded-md ' >
                                                <img width='65px' height='65px' src="https://cdn-icons-png.flaticon.com/512/1164/1164620.png" alt="book pages" />
                                            </div>
                                            <div className=' ml-3 flex flex-col justify-around items-start' >
                                                <p className=' font-bold ' >বইয়ের সাইজ</p>
                                                <p className=' font-bold ' >small</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* button section  */}
                            <div className='p-6' >
                                <div className='flex justify-between' >
                                    <button onClick={()=>{setPromoCodeBox( true )}} ><u>প্রোমো কোড { promoCodeBox && 'লিখুন'}</u></button>
                                    <h2 className='text-2xl font-semibold' >৳ ৯৫০</h2>
                                </div>

                                { promoCodeBox ? <div className=' mt-2 ' >
                                    <div className='flex' >
                                        <button onClick={()=>{ setPromoCodeBox( false ) }} className='border text-2xl py-2 px-4 mr-3 rounded ' >X</button>
                                        <div className='border flex w-full' >
                                            <input className='w-full rounded-l ' type="text" name="promoCode" placeholder='প্রোমো কোডটি ব্যবহার করুন' />
                                            <button className='bg-black text-white rounded-r-md p-3' >অ্যাপ্লাই</button>
                                        </div>
                                    </div>
                                </div> : 
                                <div className='my-2' >
                                    <button onClick={ handleStartCourses } style={{ backgroundColor: '#F0AC01' }} className=' p-3 w-full rounded-lg text-white ' >বইটি কিনুন<span className='ml-6'>&rarr;</span></button>
                                </div> }
                            </div>

                        </div>

                    </div>


                </div>
            </div>

        </div>
    );
};

export default BookDetails;