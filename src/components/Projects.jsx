import React from 'react'
import Work from './common/Work'
import workData from './data/workData.js'
import Heading from './common/Heading.jsx'

const Projects = () => {
    return (
        <div className="text-white w-full h-max flex justify-center mt-16 pb-16 px-4 md:px-8" id='Projects'>
            <div className="w-full lg:w-[82%]">
                <Heading title="My latest Projects" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-5  mt-16">
                    {workData.map((value, key) => {
                        return (
                            <Work
                                title={value.title}
                                serial={value.id}
                                image={value.img}
                                url={value.GitHubLink}
                                key={key}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects