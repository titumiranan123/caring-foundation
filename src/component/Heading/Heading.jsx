import React from 'react';

const Heading = ({ maintitle, colorctitle, title, description }) => {
    return (
        <div className='flex gap-5 flex-col justify-center items-center'>
            <h1 className='text-xl text-center font-bold mt-10'>{maintitle}</h1>
            <h1 className='text-4xl text-center font-bold'><span className='text-blue-500'>{colorctitle}</span> {title}</h1>
            <p className='text-sm  text-slate-400 w-3/4 text-center'>{description}</p>
        </div>
    );
};

export default Heading;