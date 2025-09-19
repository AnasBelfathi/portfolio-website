import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Education = ({ isDarkMode }) => {
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
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-16'
      >
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-64 sm:w-80 rounded-3xl max-w-none'
        >
          <Image src={assets.master_dip} alt='Master diploma' className='w-full rounded-3xl' />
        </motion.div>

        {/* Single concise block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='flex-1'
        >
          <p className='mb-5 max-w-2xl font-Ovo'>
            Graduate of the <strong>EID2 Master</strong>—ranked among the
            <strong> top-3 AI programs in France</strong>—and <strong>valedictorian</strong> of the class.
            Currently a <strong>PhD student</strong> focusing on <strong>LLM domain adaptation & evaluation</strong>.
          </p>

          {/* Two compact badges (key facts) */}
          <div className='flex flex-wrap items-center gap-2'>
            <span className='px-2.5 py-1 text-xs rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'>
              🎖️ Top-3 AI program (EID2)
            </span>
            <span className='px-2.5 py-1 text-xs rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'>
              🏆 Valedictorian
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Education
