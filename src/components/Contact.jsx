import React from 'react'

const Contact = () => {
    return (
        <div name='contact'  className='w-full h-fit md:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Contact
                    </p>
                    <p className='py-6'>
                        Submit the form below to get in touch with me
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/fadef944-605b-40c4-9a2a-bbe67279fd02" method="POST" className='flex flex-col w-full'>
                        <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4' />
                        <input type="text" name='email' placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4' />
                        <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4'></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ' >Let's talk!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact