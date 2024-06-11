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
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Aish Mishra</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I'm a software engineer with a passion for<br />building scalable, efficient, and user-friendly <span className='text-[#915eff]'>MERN Stack</span> websites.
          </p>
        </div>
      </div>
      <ComputersCanvas></ComputersCanvas>
    </section>
  );
};

export default Hero;
