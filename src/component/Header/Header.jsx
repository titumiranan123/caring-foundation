import React from 'react';
import './Header.css';
import Headercarousel from '../Headercarosule/Headercarousel';
const Header = () => {
    return (
        <div className='relative '>
            <div className='bg-slide-show h-[900px] w-[90%] relative    -z-10'>
                <div className='absolute w-full h-full  ' >

                </div>
                <div className='absolute top-0 bg-gradient-to-r from-blue-600     w-full overly h-full'></div>
                <div className='absolute lg:p-10  p-20 text-white lg:top-40 top-14  space-y-4 h-full '>
                    <h1 className='lg:text-xl text-lg font-bold'>WELLCOME TO FOUNDATION </h1>
                    <h2 className='lg:text-6xl text-2xl font-bold'>TO GIVE AND HELP OTHERS </h2>
                    <h3 className='lg:text-6xl text-2xl font-bold'>WE NEED YOUR SUPPORT</h3>
                    <p className='lg:text-lg text-sm font-semibold w-3/4'>Cursus in hac habitasse platea dictumst. Interdum consectetur libero id faucibus nils tincidunt eget . Dui vivamus arcu felis bibendum ut tristique er egestas quis.</p>
                    <button className='py-4 px-8 bg-[#20BD40]'><span>More Information</span></button>
                </div>
            </div>
            <div data-aos="fade-right" className='bg-[#002052] lg:mx-auto  md:mx-auto lg:w-[80rem] md:w-[40rem] w-[360px] md:h-[300px] absolute lg:-bottom-64 lg:p-10  p-4 flex-col left-6 md:left-20  lg:left-36 flex justify-center md:-bottom-[15rem]
             items-center border-2 rounded-lg'>
                <div>
                    <h1 className='md:text-2xl text-white text-xl  font-bold text-center'>THANK YOU 2400+ COMPANIES THAT HAVE SUPPORTED US</h1>
                </div>
                <div>
                    <Headercarousel />
                </div>

            </div>
        </div>
    );
};

export default Header;