import React from 'react'
// import virili from "../assets/portfolio/virili.jpg";
// import winrahi4G from "../assets/portfolio/winrahi4G.jpg";
// import winrahiSMS from "../assets/portfolio/winrahiSMS.jpg";
// import arduino from "../assets/portfolio/arduino.jpg";

import navbar from "../assets/html.png";

const Portfolio = () => {
    const links = [
        {
            id:1,
            src: navbar//winrahi4G
        },
        {
            id: 2,
            src: navbar//arduino
        },
        {
            id: 3,
            src: navbar//winrahiSMS
        },
        // {
        //     id: 4,
        //     src: navbar//virili
        // },

    ]

    return (
    <div name="portfolio" className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen h-fit'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                </p>
                <p className='py-6'>
                    Check out some of my work right here
                </p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {links.map(({id,src})=>{
                    return (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-200 group' >
                        <img src={navbar} alt="navbar" className='rounded-md group-hover:scale-105 duration-200 h-32 m-auto' />
                        <div className='flex items-center justify-center '>
                            <button className='px-6 py-3 m-4 hover:scale-105 duration-200'>
                                Git repository
                            </button>
                        </div>
                    </div>);  
                })}
                
            </div>
        </div>
    </div>
    )
}

export default Portfolio