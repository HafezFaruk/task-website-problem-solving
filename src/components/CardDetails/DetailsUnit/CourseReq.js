import React from 'react';

const CourseReq = () => {
    return (
        <div>
            <h2 className='text-xl text-left font-bold  my-6 ' >কোর্সটি করতে যা প্রয়োজন হবে</h2>
            <div className='border text-left p-4 rounded-lg ' >
                <ul>
                    <li>
                        <p><span style={{ color: '#F0AC01' }} className='text-xl ' >&#10003;</span> ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)</p>
                        <p><span style={{ color: '#F0AC01' }} className='text-xl ' >&#10003;</span> স্মার্টফোন অথবা পিসি</p>
                    </li>
                </ul>
            </div>
            
        </div>
    );
};

export default CourseReq;