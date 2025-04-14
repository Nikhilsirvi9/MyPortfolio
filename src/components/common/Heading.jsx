import React from 'react'
import tile from '../../assets/tile.svg'

const Heading = ({ title }) => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-max flex justify-center relative text-white">
                <div className="text-[2rem] md:text-[3rem] lg:text-[3.4rem] font-bold relative font-popping z-10 text-center">
                    {title}
                </div>
                <img
                    src={tile}
                    alt="tile"
                    className="h-[2rem] md:h-[2.5rem] lg:h-[3rem] absolute top-3 md:top-5 right-[-15px] md:right-[-20px] lg:right-[-25px]"
                />
            </div>
        </div>
    )
}

export default Heading