import React from 'react';

const Instructor = ({ selObj }) => {
    return (
    <>
        <div className='text-left mt-10 ' >
            <h1 style={{ fontSize: '21px', fontWeight: '500'}} >ইনস্ট্রাক্টর</h1>
        </div>
        <div className='border shadow flex items-center p-3 my-4 rounded-lg  ' >
            <div className=' w-24 ' >
                <img src={selObj.tecImg} alt="Instractor" height='75px' width='75px' className=' rounded-full ' />
            </div>
            <div className='text-left pl-4' >
                <h2 className='text-lg font-medium' >{ selObj.tecName }</h2>
                <p>{ selObj.teacEdu }</p>
            </div>
        </div>
    </>
    
    );
};

export default Instructor;