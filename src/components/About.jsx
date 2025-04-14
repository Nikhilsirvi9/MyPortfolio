import React from 'react'
import tile from '../assets/tile.svg'
import profile from '../assets/mainProfile.jpg'
import Skills from './common/Skills'
import Heading from './common/Heading'

const About = () => {
  return (
    <div className="flex justify-center px-4 md:px-8" id="about">
      <div className="flex flex-col text-white gap-10 w-full lg:w-[78rem]">
        <Heading title="About me" />

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex justify-center">
            <img
              src={profile}
              alt="profile"
              className="w-[20rem] md:w-[30rem] lg:w-[35rem] rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-10">
            <div className="font-medium">
              <p className="font-popping text-sm md:text-base">
              I am a passionate and motivated Frontend Developer currently in my final year of college, with hands-on experience in modern web technologies like React.js, Node.js, MongoDB, and Solidity. I’ve worked on real-world projects such as TravelPass, a blockchain-based verification system, and have actively participated in hackathons, where I honed my problem-solving and collaboration skills.
              </p>
              <p className="font-popping text-sm md:text-base">
              I’m constantly exploring new tools and frameworks, and I bring a strong work ethic, adaptability, and a genuine enthusiasm for building responsive, user-friendly web applications.
              </p>
            </div>

            <div className="w-full lg:w-[50rem] flex flex-col gap-5 font-popping font-normal text-sm md:text-lg">
              <Skills title="HTML & CSS" percentage={80} />
              <Skills title="React JS" percentage={50} />
              <Skills title="JavaScript" percentage={60} />
              <Skills title="MySQL" percentage={65} />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-[6rem] w-full justify-center mt-10">
          <div className="hidden md:block bg-white w-[2px] h-20"></div>
          <div className="hover:scale-125 duration-500 transition-transform text-center">
            <h1 className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent text-[2rem] md:text-[3rem] font-josephin font-bold">
              5+
            </h1>
            <h1 className="font-josephin font-medium text-lg md:text-xl">
              Projects Completed
            </h1>
          </div>
          <div className="hidden md:block bg-white w-[2px] h-20"></div>
        </div>
      </div>
    </div>
  )
}

export default About