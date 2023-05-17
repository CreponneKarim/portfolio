import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white' >
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>
                    About
                </p>
              </div>
            <p className='text-xl mt-20'>
                Who am I, you might ask? I am Karim Laouchedi 4th year esi student, who is well versed into android app development.
            </p>

            <br />

            <p className='text-xl'>
                I also do quite a bit of web developement using different languages and tools that will be exposed later on. I'm also very intrested in all that gravitates around Linux. Catch you later !
            </p>
        </div>
    </div>
  )
}

export default About