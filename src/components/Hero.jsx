import { motion } from 'framer-motion';
import { styles } from '../styles';
import bgImage from '../assets/herobg.png';
import ComputersCanvas from './canvas/Computers';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
          <div className='w-1 h-40 sm:h-80 violet-gradient'></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff] block sm:inline'>Aish Mishra</span></h1>
          <p className={`${styles.heroSubText} mt-4 sm:mt-2 text-white`}>
            I'm a software engineer with a passion for building scalable, <br /> efficient, and user-friendly <span className='text-[#915eff]'>MERN Stack</span> websites.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-2 w-full flex justify-center items-center '>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-gray-300 flex justify-center items-start p-2 mt-24'>
                <motion.div
                animate={{
                  y:[0,24,0]
                }}
                transition={{
                  duration : 1.5 , 
                  repeat : Infinity , 
                  repeatType : 'loop'
                }}
                className="w-3 h-3 rounded-full bg-gray-300 mb-1"
                />

          </div>
        </a>

      </div>
    </section>
  );
};

export default Hero;
