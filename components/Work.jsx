import { assets, conferenceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({ isDarkMode }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-14 scroll-mt-20'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Recent talks
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Conferences
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-white/80'
      >
        A selection of my recent conference presentations on LLM adaptation, evaluation,
        and retrieval for specialized domains.
      </motion.p>

      {/* Grille élargie : 1 col sur mobile, 2 sur md/lg, 3 sur xl */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'
      >
        {conferenceData.map((conf, index) => (
          <motion.article
            key={index}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.25 }}
            className='rounded-3xl border border-gray-300 dark:border-white/20 overflow-hidden bg-white/80 dark:bg-white/5 backdrop-blur'
          >
            {/* Photo plus grande : hauteur fixe responsive */}
            <div className='relative w-full h-72 md:h-80 lg:h-96'>
              <Image
                src={conf.photo}
                alt={`${conf.title} photo`}
                fill
                className='object-cover'
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                priority={index === 0}
              />
              <div className='absolute top-3 left-3 flex gap-2'>
                <span className='px-2 py-1 text-xs rounded-full bg-black/80 text-white'>{conf.year}</span>
                <span className='px-2 py-1 text-xs rounded-full bg-white/90 text-black shadow'>{conf.venue}</span>
              </div>
            </div>

            {/* Contenu */}
            <div className='p-6 md:p-7'>
              <h3 className='text-xl font-semibold'>{conf.title}</h3>
              <p className='mt-2 text-sm md:text-base text-gray-600 dark:text-white/80'>
                <strong>{conf.role}</strong> — {conf.topic}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Work
