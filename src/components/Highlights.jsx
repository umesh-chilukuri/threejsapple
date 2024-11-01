import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../utils'
import VideoCarosal from './VideoCarosal'




const Highlights = () => {

  
useGSAP(()=>{
  gsap.to('#title',{opacity:1,delay:2,y:0})
  gsap.to('.link',{opacity:1,delay:2,y:0,duration:1,stagger:0.25})
},[])


  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
     <div className='screen-max-width'>
      <div className='  mb-12 w-full flex items-end md:flex justify-between'>
        
        <h1 id='title'  className=' section-heading'> get the highlights</h1>
       <div className='flex flex-wrap items-end gap-5'>

        <p className=' link'>watch the film
        <img src={watchImg} alt='watch' className='ml-2'></img>
        </p>

        <p className='link'>
          watch the event
        <img src={rightImg} className='ml-2'></img>
        </p>
       </div>
      </div>
      
<VideoCarosal/>


     </div>
    </section>
  )
}

export default Highlights