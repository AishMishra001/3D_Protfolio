import {BallCanvas} from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../styles'


const Tech = () => {
  return (
    <div>
      <div className='mb-10'>
      <p className={styles.sectionSubText}>I ASKED MY CODE FOR A DATE.. IT TOLD ME TO '404: NOT FOUND'</p>
        <h2 className={styles.sectionHeadText}>TECHNOLOGIES I KNOW.</h2>
      </div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technologies)=>(
        <div className='w-28 h-28' key={technologies.name}>
              <BallCanvas icon={technologies.icon}/>

        </div>
      ))}

    </div>
    </div>
  )
}

export default SectionWrapper(Tech ,'tech' )