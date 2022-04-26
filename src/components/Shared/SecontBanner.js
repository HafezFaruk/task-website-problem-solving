import React from 'react';


const SecontBanner = () => {
    return (
        <div>
            <div style={{marginTop: '80px' }} className='md:flex  sm:m-7 md:m-16 pt-14 pb-10 ' >

                {/* image part ------------------------------------ */}
                <div className='md:w-2/4 ' >
                    <iframe width="550" height="345" src="https://www.youtube.com/embed/x7lygbgt4-I" ></iframe>
                </div>

                {/* text part ------------------------------------- */}
                <div className='md:w-2/4 sm:m-4 pl-4 py-4 text-left  md:text-left sm:text-left' >
                    <h1 className='text-3xl font-black' >আমরাই ক্যান <span className='text-yellow-400' >শেরা</span></h1> <br />
                    {/* <h1 className='text-3xl font-black' > <span className='text-yellow-400' >Us</span></h1> */}
                    <p className='md:mr-16 ' >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are</p> <br />
                    <p className='md:mr-16 ' >going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet</p>
                </div>

            </div>
            
        </div>
    );
};

export default SecontBanner;