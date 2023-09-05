'use client'
import React from 'react';
import Programcard from '../Programcard/Programcard';
import logo1 from '../../assets/seniorchitizenicon.png';
import img1 from '../../assets/senior-woman-with-her-caregiver-outdoor.jpg';
import Heading from '../Heading/Heading';
const Progarm = () => {
    return (
        <div className='mt-10 flex flex-col justify-center items-center lg:px-20 px-2 '>
            <div>
                <Heading title={"a program for friends with disablities"} maintitle={"OUR HAPPY PROGRAMS"} description={""} colorctitle={" Together we developed"} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                <div data-aos="fade-up" data-aos-duration="1400">
                    <Programcard title={"Career Support"} img={img1} logo={logo1} />
                </div>

                <div data-aos="fade-up" data-aos-duration="1400">
                    <Programcard title={"Disability Insurance"} img={img1} logo={logo1} />
                </div>
                <div data-aos="fade-up" data-aos-duration="1400">
                    <Programcard data-aos="fade-up" data-aos-duration="1500" title={"Sport Programs"} img={img1} logo={logo1} />
                </div>

                <div data-aos="fade-up" data-aos-duration="1500">
                    <Programcard title={"Senior citizen"} img={img1} logo={logo1} />
                </div>





            </div>
        </div>
    );
};

export default Progarm;