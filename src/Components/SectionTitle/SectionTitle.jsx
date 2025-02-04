import React from 'react';

const SectionTitle = ( { heading, subHeading} ) => {
    return (
        <div className='w-[300px]  my-5 mx-auto p-5'>
            <p className='text-lg text-yellow-500'>{subHeading}</p>
           
            <h3 className='text-2xl  text-center uppercase border-y-2 py-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;