import React, { useEffect, useState } from 'react';

const StudentInfo = () => {
    const [isDisable, setIsDisable] = useState( true );
    const [ userNumOrEmail, setUserNumOrEmail ] = useState('');
    const [getOTP, setGetOTP] = useState( false )

    useEffect(()=>{
        if(Number(userNumOrEmail)){ // checking is Number (number)
            const numTestRes = userNumOrEmail.match(/^\+?(88)?0?1[3456789][0-9]{8}\b/)
            if(numTestRes?.length){
                setIsDisable( false )
            }
            else{
                setIsDisable( true )
            }
            console.log(2)
        }
    },[userNumOrEmail])

    const handleSubmit = () =>{
        setGetOTP( true )
    }

    return (
        <div className='pt-10 md:w-2/4 sm:w-3/4 mx-auto' >
            <div className='border md:px-24 sm:px-11 py-12 rounded-lg shadow-lg ' >

                <div className='flex flex-col' >
                    <label className='text-left my-2' htmlFor="numOrEmail">মোবাইল নাম্বার</label>
                    <input onChange={(e)=>{ setUserNumOrEmail( e.target.value ) }} className='rounded-lg border-2 ' type="text" placeholder='01XXXXXXXXX' />
                </div>

                { getOTP && <div className=' mt-10' >
                    <p className='text-left my-2' >ফোনে পাঠানো OTP নিচে লিখুন</p>
                    <div className=' flex justify-around items-center w-full ' >
                        <input style={{ width: '97px', height: '50px' }} className=' rounded-lg' type="text" name="opt1" />
                        <input style={{ width: '97px', height: '50px' }} className=' rounded-lg' type="text" name="opt2" />
                        <input style={{ width: '97px', height: '50px' }} className=' rounded-lg' type="text" name="opt3" />
                        <input style={{ width: '97px', height: '50px' }} className=' rounded-lg' type="text" name="opt4" />
                    </div>
                </div>}


                <div>
                    <button onClick={ handleSubmit } disabled={isDisable} style={{ backgroundColor: ' #F0AC01 ' }}  className={`border w-full mt-5 p-2 rounded-lg ${ isDisable ? 'cursor-not-allowed' : 'cursor-pointer'} text-white `} >এগিয়ে যান  <samp className='text-lg font-bold ml-5 ' >&rarr;</samp></button>
                </div>
               
            </div>
        </div>
    );
};

export default StudentInfo;