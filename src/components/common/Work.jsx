import React from 'react'

const Work = ({ title, serial, image ,url }) => {

    const redirectToLink = () => {
        window.open(url)
    }
    return (
        <div className="text-white relative w-full sm:w-[20rem] md:w-[25rem] h-[15rem] hover:scale-105 transition-transform duration-500 hover:border-purple-600 hover:border-[4px] rounded-xl">
            <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-xl"
            />

            <div className="absolute top-3 left-5 text-2xl sm:text-3xl md:text-4xl font-popping font-bold z-10">
                {serial}
            </div>

            <div className="absolute top-0 left-0 flex flex-col justify-center items-center opacity-0 h-full w-full bg-black hover:opacity-80 transition-opacity rounded-xl">
                <div className="font-josephin font-bold text-lg sm:text-xl flex flex-col gap-3 text-center">
                    <h1>{title}</h1>
                    <p className="cursor-pointer" onClick={redirectToLink}>GitHub Link</p>
                </div>
            </div>
        </div>
    )
}

export default Work