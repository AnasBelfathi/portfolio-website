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

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='flex-1'
        >
          {/* One concise paragraph */}
          <p className='mb-6 max-w-2xl font-Ovo'>
            Graduate of the <strong>EID2 Master</strong>—ranked among the
            <strong> top-3 AI programs in France</strong>—and <strong>valedictorian</strong> of the class.
            I am now a <strong>PhD student</strong> focused on <strong>LLM domain adaptation & evaluation</strong>.
          </p>

          {/* Mini timeline */}
          <div className='mb-8'>
            <h3 className='mb-3 text-base font-semibold text-gray-800 dark:text-white/90'>Academic timeline</h3>
            <ul className='space-y-3'>
              <li className='flex items-start gap-3'>
                <span className='mt-2 w-2 h-2 rounded-full bg-black dark:bg-white'></span>
                <div>
                  <p className='font-medium'>B.Sc. in Computer Science — University of Fez</p>
                  <p className='text-sm text-gray-600 dark:text-white/70'>Foundations in algorithms, ML, and software engineering.</p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='mt-2 w-2 h-2 rounded-full bg-black dark:bg-white'></span>
                <div>
                  <p className='font-medium'>EID2 Master — Sorbonne Paris Nord (Valedictorian)</p>
                  <p className='text-sm text-gray-600 dark:text-white/70'>Top-3 AI program in France; focus on NLP and LLMs.</p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='mt-2 w-2 h-2 rounded-full bg-black dark:bg-white'></span>
                <div>
                  <p className='font-medium'>PhD in AI — LS2N, Nantes (ongoing)</p>
                  <p className='text-sm text-gray-600 dark:text-white/70'>Research on adapting LLMs to specialized domains and robust evaluation.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Core skills gained */}
          <div>
            <h3 className='mb-3 text-base font-semibold text-gray-800 dark:text-white/90'>Core skills gained</h3>
            <ul className='grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-xl'>
              {[
                'Machine Learning & Deep Learning',
                'NLP & Sequence Modeling',
                'LLM Adaptation (PEFT/Instruction Tuning)',
                'Evaluation & Safety',
                'Information Retrieval & RAG',
                'Research Methods & Writing'
              ].map((skill) => (
                <li
                  key={skill}
                  className='text-sm px-3 py-2 rounded-full border border-gray-300 dark:border-white/30 text-gray-800 dark:text-white/80'
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Compact badges */}
          <div className='flex flex-wrap items-center gap-2 mt-6'>
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
