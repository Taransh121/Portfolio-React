import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Taransh Chellani, a 4th year BTech Student at VIT Bhopal University.</p>
          </div>
          <div>
            <p>I am Highly skilled and motivated software developer with a proven track record of designing and implementing innovative solutions to complex problems.
              I am proficient in multiple programming languages and frameworks, consistently delivering high-quality code and meeting project deadlines.
              Also I am a Strong team player with excellent communication skills, adept at collaborating with cross-functional teams to achieve project objectives.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
