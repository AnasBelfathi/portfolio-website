import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Education = ({ isDarkMode }) => {
  const eduHighlights = [
    {
      title: '🎖️ Master EID2 — Top-3 AI Program in France',
      description:
        'Graduate of the EID2 Master, ranked among the top three AI programs in France.',
    },
    {
      title: '🏆 Valedictorian of the class',
      description:
        'Ranked first of the cohort, excelling in both research and applied AI projects.',
    },
    {
      title: '🎓 PhD student (ongoing)',
      description:
        'Currently pursuing a PhD, focusing on adapting and evaluating LLMs for specialized domains.',
    },
  ];

  return (
    <motion.div
      id='education'
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Background
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
      >
        {/* Diploma photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-64 sm:w-80 rounded-3xl max-w-none'
        >
          <Image src={assets.master_dip} alt='Master diploma' className='w-full rounded-3xl' />
        </motion.div>

        {/* Text + highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1'
        >
          {/* Short summary */}
          <p className='mb-8 max-w-2xl font-Ovo'>
            I graduated from the <strong>EID2 Master</strong> (ranked among the 
            <strong> top-3 AI programs in France</strong>), where I was the 
            <strong> valedictorian</strong> of my class. I am now a <strong>PhD student</strong> 
            working on <strong>domain adaptation and evaluation of Large Language Models (LLMs)</strong> 
            with applications bridging academic research and industry.
          </p>

          {/* Highlights cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
          >
            {eduHighlights.map(({ title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
              >
                <h3 className='my-2 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Short timeline */}
          <div className='mt-8 text-sm text-gray-600 dark:text-white/80'>
            <div className='flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-black dark:bg-white'></span>
              <span><strong>Master EID2</strong> — graduated, valedictorian</span>
            </div>
            <div className='flex items-center gap-2 mt-2'>
              <span className='w-2 h-2 rounded-full bg-black dark:bg-white'></span>
              <span><strong>PhD</strong> — ongoing, LLM domain adaptation & evaluation</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Education
