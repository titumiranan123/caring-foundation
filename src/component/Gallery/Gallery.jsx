"use client"

import Heading from '../Heading/Heading';
import Gallerycard from '../Gallerycard/Gallerycard';
import './Gallery.css';
const Gallery = () => {

    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <Heading maintitle={"OUR GALLERY"} colorctitle={"Together"} title={"build love"} description={"Congue quisque egestas diam in. Donec enim diam vulputate ut pharetra sit amet. Sit amet venenatis urna cursus eget nunc."} />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 md:grid-cols-2 mt-10'>
                <Gallerycard />
                <Gallerycard />
                <Gallerycard />
                <Gallerycard />
                <Gallerycard />
                <Gallerycard />
                <Gallerycard />
                <Gallerycard />

            </div>
        </div>

    );
};

export default Gallery;