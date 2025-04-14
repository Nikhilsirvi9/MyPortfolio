import React from 'react'

const Skills = ({ title, percentage }) => {
    return (
        <div>
            <div className="flex gap-3 items-center hover:scale-105 transition-transform">
                <h1 className="font-josephin font-medium text-sm md:text-base lg:text-lg min-w-[8rem]">
                    {title}
                </h1>
                <div
                    className="h-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    )
}

export default Skills