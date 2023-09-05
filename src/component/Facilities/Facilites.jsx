import React from 'react';
import Facilitiescard from '../Facilitiescard/Facilitiescard';
import scuter from '../../assets/scuter1.png';
import bus from '../../assets/bus_1125624.png';
import disableSport from '../../assets/disable.png';
import doctor from '../../assets/doctor_921059.png';
import therapist from '../../assets/thera.png';
import hospital from '../../assets/hospital_6743560.png';
import lift from '../../assets/lift.png';
import parking from '../../assets/parking-sign_6212548.png';
import Heading from '../Heading/Heading';
const Facilites = () => {
    return (
        <div className='flex justify-center items-center flex-col mt-5'>
            <div className='space-y-4 flex flex-col justify-center items-center'>
                <Heading maintitle={"OUR FACILITIES"} colorctitle={"Create"} title={" a more accessible environment"} description={"Arcu dictum varius duis at consectetur lorem . Orci nulla pellentesque dignissim enim sit amet ."} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-10'>

                <div data-aos="fade-up" data-aos-duration="1100">
                    <Facilitiescard img={scuter} title={' Mobility Scooter'} description={"Mobility scooters provide the freedom to move around independently, whether it's running errands, visiting friends and family, or enjoying the great outdoors"} />
                </div>
                <div data-aos="fade-up" data-aos-duration="1200">
                    <Facilitiescard img={bus} title={' Accessible Bus'} description={"Accessible buses are equipped with clear and visible signage, including Braille instructions"} />
                </div>
                <div data-aos="fade-up" data-aos-duration="1300">
                    <Facilitiescard img={disableSport} title={'Disabled Sports'} description={"Mobility scooters provide the freedom to move around independently, whether it's running errands, visiting friends and family, or enjoying the great outdoors"} />
                </div>
                <div data-aos="fade-up" data-aos-duration="1400">
                    <Facilitiescard img={therapist} title={'Therapist'} description={"Mobility scooters provide the freedom to move around independently, whether it's running errands, visiting friends and family, or enjoying the great outdoors"} />
                </div>
                <div data-aos="fade-up" data-aos-duration="1100">
                    <Facilitiescard img={doctor} title={'Psychiatrist'} description={"Accessible buses are equipped with clear and visible signage, including Braille instructions"} />
                </div>
                <div data-aos="fade-up" data-aos-duration="1200">
                    <Facilitiescard img={lift} title={'Stair Lift'} description={"Mobility scooters provide the freedom to move around independently, whether it's running errands, visiting friends and family, or enjoying the great outdoors"} />
                </div>
                <div data-aos="fade-up" data-aos-duration="1300">
                    <Facilitiescard img={parking} title={'Disabled Parking'} description={"Accessible buses are equipped with clear and visible signage, including Braille instructions"} />
                </div>
                <div data-aos="fade-up" data-aos-duration="1400">
                    <Facilitiescard img={hospital} title={'Clinic Building'} description={"Mobility scooters provide the freedom to move around independently, whether it's running errands, visiting friends and family, or enjoying the great outdoors"} />
                </div>
            </div>

        </div>
    );
};

export default Facilites;