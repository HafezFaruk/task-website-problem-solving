import React from 'react';

const TitleDet = ( { selObj } ) => {
    return (
        <div className=' text-left ' >
            <h1 className='text-3xl font-extrabold ' >{ selObj.title }</h1>
            <p className='my-2' >{ selObj.tageLine }</p>
        </div>
    );
};

export default TitleDet;