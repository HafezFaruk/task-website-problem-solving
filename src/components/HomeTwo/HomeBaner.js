import React from 'react';
import womanWorking from '../images/womanWorking.png'

const HomeBaner = () => {

    const bgImgProperties = {
        height: '750px', 
        backgroundImage: `url(${womanWorking})`, 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',
    }

    return (
        <div style={{ marginTop: '88px' }} >
            <div className='flex justify-start items-center' style={ bgImgProperties } >

                {/* text div  */}
                <div className=' text-left md:p-32 bg-black bg-opacity-30 ' style={{width: '799px', height: '625px'}} >
                    <div className='' ><h1 className='text-white text-6xl font-black' >ঘড়ে বসে বিসিএস এর প্রস্তুতি</h1></div><br />

                    <div className='text-white' >
                        <p className='text-2xl' >আমাদের এক্সক্লুসিভ টিউটোরিয়াল, মডেল টেস্ট, বিগত বছরের বিসিএস প্রশ্ন এবং আরও অনেক কিছু দিয়ে অল্প সময়ের মধ্যে আসন্ন বিসিএস প্রিলিমিনারি পরীক্ষার জন্য আপনার সেরা প্রস্তুতি নিন!</p><br />
                    </div>
                    
                    <div>
                        <button className='bg-yellow-300 px-4 py-3 text-white text-xl '>Our Courses</button>
                        <button className='border-2 border-yellow-300 md:mx-2 px-4 py-2 text-white text-xl '>Start Leanning</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default HomeBaner;