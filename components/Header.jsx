import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt='Portrait of Anas Belfathi' className='rounded-full w-32' />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl mb-1 font-Ovo'
      >
        Hi! I'm Anas Belfathi <Image src={assets.hand_icon} alt='waving hand' className='w-6' />
      </motion.h3>

      {/* Rôle court sous le nom */}
      <motion.p
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className='text-sm md:text-base font-medium text-gray-600 dark:text-gray-300 tracking-wide'
      >
        AI Research Scientist in France 🇫🇷
      </motion.p>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
      >
        Advancing AI for Real-World Impact
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto font-Ovo'
      >
        I am an AI Research Scientist based in Nantes, France, with 5+ years of experience
        working on real-life research and industrial projects bridging academia and industry.
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        {/* Contact me */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
        >
          Contact me <Image src={assets.right_arrow_white} alt='arrow right' className='w-4' />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          href="https://www.linkedin.com/in/anasbelfathi" 
          target="_blank" 
          rel="noreferrer"
          className='px-10 py-3 rounded-full flex items-center gap-2 text-white'
          style={{ backgroundColor: "#0A66C2" }}
        >
          LinkedIn <Image src={assets.linkedin_icon} alt='linkedin icon' className='w-4' />
        </motion.a>

        {/* Download CV */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Anas_Belfathi_CV.pdf" download
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
        >
          Download CV <Image src={assets.download_icon} alt='download icon' className='w-4' />
        </motion.a>
      </div>
    </div>
  )
}

export default Header
