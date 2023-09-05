import React from 'react';
import Heading from '../Heading/Heading';
import Newscard from '../Newscard/Newscard';
import img from '../../assets/disability.jpg';

const Latestnews = () => {
    return (
        <div className='flex flex-col justify-center  items-center px-10'>
            <div>
                <Heading maintitle={"LATEST NEWS"} colorctitle={"Latest"} title={"news & article "} description={'Congue quisque egestas diam in. Donec enim diam vulputate ut pharetra sit amet. Sit amet venenatis urna cursus eget nunc.'} />
            </div>
            <div className='mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 -z-10'>
                <Newscard heading={"Disability Awareness 2024 Office & Programs"} img={img} />
                <Newscard heading={"Disability Fact & Making Disability Insurance"} img={img} />
                <Newscard heading={"10 Principles of Disability Justice"} img={img} />

            </div>
        </div>
    );
};

export default Latestnews;