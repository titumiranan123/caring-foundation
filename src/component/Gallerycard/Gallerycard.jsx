import React from 'react';
// Make sure to import your CSS file
import galleryImage from '../../assets/g-2.jpg';
import Image from 'next/image';

const Gallerycard = () => {
    return (
        <div className='gallery-card w-52 h-42'>
            <Image className='p-4' src={galleryImage} alt='' />

            <div className='content'>
                <div className='text-container'>
                    <h1 className='text-xl text-white font-bold'>Photo Gallery</h1>
                    <p>
                        Premium Banner gives you a wide range of styles and options that
                        you will definitely fall in love with
                    </p>
                </div>
            </div>
            <div className='border-animation'></div>
        </div>
    );
};

export default Gallerycard;
