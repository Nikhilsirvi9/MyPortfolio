import React from 'react'
import profile from '../assets/profile.jpg'
import Button from './common/Button'

const Hero = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <div className="flex justify-center mt-3 px-4 md:px-8 " id='home'>
            <div className="text-white flex flex-col gap-9 h-screen w-full md:w-[80%] lg:w-[60%] justify-start items-center">
                <div>
                    <img
                        src={profile}
                        alt="profile"
                        className="h-[10rem] md:h-[12rem] lg:h-[14rem] rounded-full"
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <div className="text-[2rem] md:text-[2.5rem] lg:text-[3.2rem] text-center flex font-josephin font-medium">
                        <h1>
                            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                                I am NIKHIL SIRVI,
                            </span>
                            DevOps Engineer based in INDIA
                        </h1>
                    </div>
                    <p className="text-[13px] md:text-[15px] lg:text-[16px] text-center px-4 md:px-16 lg:px-24 font-popping">
                    Motivated and detail-oriented Computer Science student with a strong foundation in programming,
 data structures, and algorithms. Skilled in C++ and web development, with hands-on experience in    
blockchain project. Passionate about problem-solving, software development, and emerging
 technologies. Eager to apply technical skills in real-world applications and gain industry experience.
 Quick learner with strong analytical and teamwork abilities 
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <li className='list-none' onClick={()=>scrollToSection('contact')}>
                    <Button
                        title="Connect With ME"
                        bg="bg-gradient-to-r from-indigo-500 to-pink-500"
                        hover="hover:border-white hover:border-2"
                    />
                    </li>
                    <a
        href="/FnResume.pdf" 
        target="_blank"
        rel="noopener noreferrer" 
    >
        <Button
            title="My Resume"
            border="border-white border-2"
            hover="hover:border-indigo-700"
        />
    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
