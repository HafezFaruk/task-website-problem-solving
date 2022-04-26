import React, { useState } from 'react';

const LearningPoints = ({ selObj }) => {

    const [ showText, setShowText ] = useState( false )

    return (
        <div className='mt-8' >
            <h1 style={{ fontSize: '21px', fontWeight: '500'}} className='text-left my-3' >এই কোর্সটি থেকে যা শিখবেন</h1>

            <div className='border rounded-t-md pt-4 ' >

                <div className='px-4 text-left'>
                    <ul>
                        <li><span style={{ color: '#F0AC01' }} className='text-xl ' >&#10003;</span> দৈনন্দিন জীবনের বিভিন্ন পরিস্থিতিতে ইংরেজিতে নিজের মতামত তুলে ধরতে পারবেন</li>
                        <li><span style={{ color: '#F0AC01' }} className='text-xl ' >&#10003;</span> ইংরেজিতে কথা বলতে পারবেন সাবলীলভাবে</li>
                        <li><span style={{ color: '#F0AC01' }} className='text-xl ' >&#10003;</span> ইংরেজি শব্দের সঠিক উচ্চারণ করতে পারবেন</li>
                        <li><span style={{ color: '#F0AC01' }} className='text-xl ' >&#10003;</span> স্কুল ও কর্মক্ষেত্রে ইংরেজিতে কথা বলতে পারবেন</li>
                        <li><span style={{ color: '#F0AC01' }} className='text-xl ' >&#10003;</span> ইংরেজিতে কথা বলার জড়তা কাটিয়ে উঠতে পারবেন</li>
                        
                    </ul>
                </div>

                <div className='border-t mt-4 text-left ' >
                    <div className='mx-4 mt-4' >
                        <h1 className='text-xl font-bold text-left' >কোর্স সম্পর্কে</h1><br />
                        <p>আত্মবিশ্বাসের সাথে এবং সাবলীলভাবে ইংরেজিতে কথা বলতে পারলে জীবনের প্রতিটি পর্যায়েই অন্য যে কারো থেকে এগিয়ে থাকা যায়। অ্যাকাডেমিকস, ক্যারিয়ার, প্রতিযোগিতামূলক পরীক্ষা এমনকি ভ্রমণের ক্ষেত্রেও ইংরেজির দক্ষতা সাফল্য লাভের জন্য অনেক বেশি প্রয়োজন। তাই, ইংরেজিতে কথা বলার দক্ষতার গুরুত্ব এবং তাৎপর্য বলার অপেক্ষা রাখে না।</p><br />
                        { showText ? <p> <p className='' >আর এই দক্ষতা অর্জনে আপনাকে সাহায্য করতেই টেন মিনিট স্কুল নিয়ে এসেছে এই 'ঘরে বসে Spoken English' কোর্সটি। আমাদের সবার প্রিয় শিক্ষক মুনজেরিন শহীদ এর সাথে আপনি সঠিকভাবে এবং সাবলীলভাবে দৈনন্দিন জীবনে ইংরেজিতে কথা বলা শিখে যাবেন।</p><br /></p> : null }
                        {/* <div style={{ background: 'linear-gradient(360deg,#fbfbfb 0%,rgba(255,255,255,.6) 100%)' }} className='' ></div> */}
                        { showText ? <p> <p>বাস্তব জীবনের বিভিন্ন পরিস্থিতিতে কীভাবে সাবলীলভাবে ইংরেজিতে কথা বলবেন তা শেখাবে মুনজেরিন শহীদ। বাস্তব উদাহরণ এবং সঠিক উচ্চারণ শিখে নিয়ে আপনি কোনো জড়তা ছাড়াই ইংরেজিতে কথা বলতে পারবেন। ক্লাসগুলো করার পর নিজের দক্ষতা যাচাই করার জন্য সবগুলো ভিডিও লেসনের উপর রয়েছে কুইজ। এছাড়াও শর্টকাটে শেখার জন্য প্রতিটি লেসনের সাথে থাকছে নোটস।ভিডিওর নতুন নতুন শব্দগুলো শেখার জন্য থাকছে ভোক্যাবুলারি ফ্ল্যাশ কার্ড যেখানে কার্ডের মাধ্যমে একটি শব্দের অর্থ, তার ব্যবহার ও উচ্চারণ শিখে নিতে পারবেন। আর সবশেষে ক্লাসগুলো লিখিত রূপে পাবার জন্য থাকছে ট্রান্সক্রিপ্ট।</p></p> : null }
                    </div>

                    <p onClick={()=>{ showText ? setShowText( false ) : setShowText( true ) }} style={{ color: '#F0AC01' }} className='text-center mb-8 ' ><u> { !showText ? 'আরো দেখুন' : 'সংক্ষিপ্ত করুন'} </u></p>
                </div>

            </div>

        </div>
    );
};

export default LearningPoints;