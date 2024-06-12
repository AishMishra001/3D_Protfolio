import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-[250px]'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient shadow-card rounded-[20px] p-[1px] '>
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }} 
          className='bg-[#190328] rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center '>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <div className='bg-[#10021A]'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)} 
        className='mt-4 text-gray-300 text-[14px] sm:text-[17px] max-w-3xl leading-[30px] '>
        I am a skilled software developer with extensive experience in <span className='text-violet-500'>React</span> and <span className='text-violet-500'>JavaScript</span>, and a solid understanding of backend technologies such as <span className='text-violet-500'>Node.js</span> and <span className='text-violet-500'>Express.js</span>. I have expertise in various UI/UX libraries including <span className='text-violet-500'>Tailwind</span>,<span className='text-violet-500'>Three.js</span>, and <span className='text-violet-500'>Aceternity UI</span>. As a fast learner, I embrace new technologies and challenges with enthusiasm.

        <br />
        <br />
        I thrive on collaboration and enjoy meeting and working with new people. Recently, I started contributing to <span className='text-green-400'>open-source</span> projects, which has become a passion of mine. In addition to my technical skills, I am also involved in creative endeavors such as <span className='text-blue-600'>video editing</span> and <span className='text-blue-600'>content creation</span>.
        <br />
        <br />
        I look forward to opportunities that allow me to combine my technical expertise and creative skills, and I am eager to make meaningful contributions to <span className='text-violet-500'>innovative projects</span>.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About , "about") 
