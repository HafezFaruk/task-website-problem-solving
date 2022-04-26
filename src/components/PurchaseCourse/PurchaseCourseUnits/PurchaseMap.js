import React from 'react';

const PurchaseMap = () => {
    return (
        <div className='pt-5 ' >
            <div className=' flex justify-between items-center w-2/6 m-auto ' >
                <div style={{ width: '30px', height: '30px'}} className=' '>
                    <div style={{ width: '30px', height: '30px', backgroundColor: '#F0AC01', borderColor: '#F0AC01'}} className='border-2 rounded-full text-white border-green-500' >&#10003;</div>
                </div>

                <div style={{ backgroundColor: '#F0AC01', borderColor: '#F0AC01' }} className=' border w-full' ></div>

                <div style={{ width: '30px', height: '30px'}} className=' ' >
                    <div style={{ width: '30px', height: '30px', borderColor: '#F0AC01'}} className='border-2 rounded-full border-green-500' >2</div>
                </div>
                
                <div  className=' border w-full' ></div>

                <div style={{ width: '30px', height: '30px'}} className=' ' >
                    <div  style={{ width: '30px', height: '30px'}} className='border-2 rounded-full ' >3</div>
                </div>
            </div>
            <div className=' flex justify-around items-center w-3/6 m-auto ' >
                <div className=' w-4/12 ' >Select Course</div>
                <div className=' w-4/12' >Your Info</div>
                <div className=' w-4/12' >Payment</div>
            </div>
        </div>
    );
};

export default PurchaseMap;