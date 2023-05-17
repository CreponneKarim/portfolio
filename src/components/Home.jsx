import React from 'react'
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='flex h-screen sm:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center mb-4 mt-10'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Native kotlin Android Developper
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have 2 years of experience building android apps using technologies like kotlin, jetpack compose, Room Database, MySql
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group w-fit text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                        Portfolio
                          <span className='group-hover:rotate-90 duration-300 ml-1'>
                            <MdOutlineKeyboardArrowRight size={25}/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my profile" className='md:bg-contain md:w-7/12 mx-auto rounded-2xl '/>
            </div>
        </div>
    </div>
  )
}

export default Home