import React from 'react'
import html from "../assets/html.png";
import js from "../assets/javascript.png";
import css from "../assets/css.png";
import docker from "../assets/docker.png";
import kotlin from "../assets/kotlin.png";
import react from "../assets/react.png";
import android from "../assets/android.png";  
import compose from "../assets/compose.png";

const Experience = () => {
    const techs =[
        {
            id :1,
            src : kotlin,
            title : 'KOTLIN',
            style : 'shadow-purple-500'
        },
        {
            id: 2,
            src: compose,
            title: 'JETPACK COMPOSE',
            style: 'shadow-green-500'
        },
        {
            id: 3,
            src: docker,
            title: 'DOCKER',
            style: 'shadow-blue-500'
        },
        {
            id: 4,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 5,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 6,
            src: js,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 7,
            src: react,
            title: 'REACT',
            style: 'shadow-sky-500'
        },
        {
            id: 9,
            src: android,
            title: 'ANDROID',
            style: 'shadow-green-500'
        },
    ]
    return (
    <div name='experience' className=' bg-gradient-to-b from-gray-800 to-black w-full  md:h-screen h-fit'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
                
            </div>
            <div className=' w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({id,src,title,style}) =>{
                        return (
                            <div id={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="html" className='w-20 mx-auto' />
                                <p className='mt-4'>
                                    {title}
                                </p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </div>
    )
}

export default Experience