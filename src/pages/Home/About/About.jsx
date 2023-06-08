import { FaArrowRight, FaPhoneVolume } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

const About = () => {
    return (
        <div className="hero min-h-screen my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src="https://images.pexels.com/photos/15578047/pexels-photo-15578047/free-photo-of-hand-holding-digital-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-3/4 rounded-lg shadow-2xl" />
                    <img src="https://images.pexels.com/photos/3552187/pexels-photo-3552187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-1/2 h-[420px] absolute right-5 top-1/4 rounded-lg shadow-2xl" />
                    <p className='rounded-xl px-8 py-12 w-1/3 absolute left-52 top-3/4 text-center text-2xl font-bold bg-[#ea4a34] text-white'><span className='font-extrabold text-4xl'>16</span> <br />Years of Experience</p>
                </div>
                <div className="lg:w-1/2 p-4 space-y-7">
                    <h3 className="text-3xl text-rose-600 font-bold">About our School</h3>
                    <h1 className="text-5xl font-bold">Online Graduate School
                        for Adults & Children</h1>
                    <p >Sed risus augue, commodo ornare felis non, eleifend molestie metus. Donec nec purus porttitor, ultrices diam id, laoreet mi. Aenean sit amet enim quis massa pharetra eleifend. </p>

                    <p className='flex gap-4 items-center'><span className='text-[#ea4a34]'><FaCheck /></span> Flexible training programs</p>
                    <p className='flex gap-4 items-center'><span className='text-[#ea4a34]'><FaCheck /></span>  Experienced teachers</p>
                    <p className='flex gap-4 items-center'><span className='text-[#ea4a34]'><FaCheck /></span>  Free incoming lessons</p>
                    <div className='flex gap-6'>
                        <button className="btn rounded-lg btn-active bg-[#ea4a34] text-white hover:bg-black hover:text-white ">Read More <span><FaArrowRight /></span></button>
                        <div className='flex gap-4 justify-center items-center font-extrabold'>
                            <span className='text-5xl'><FaPhoneVolume /> </span>
                            <p className='text-2xl'>017 000 00 000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;