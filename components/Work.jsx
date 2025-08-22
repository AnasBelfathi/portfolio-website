import { assets, conferenceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-20'
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
        A selection of my recent conference presentations on LLM adaptation, evaluation and retrieval.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
      >
        {conferenceData.map((conf, i) => {
          const fit = conf.fit === 'cover' ? 'object-cover' : 'object-contain'
          return (
            <motion.article
              key={i}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className='rounded-2xl border border-gray-300 dark:border-white/20 overflow-hidden bg-white/80 dark:bg-white/5 backdrop-blur'
            >
              {/* Frame photo : hauteur fixe + contain pour voir 100% de l'image */}
              <div className='relative w-full h-56 sm:h-60 md:h-64 bg-gray-100 dark:bg-white/10'>
                <Image
                  src={conf.photo}
                  alt={`${conf.title} photo`}
                  fill
                  className={`${fit} object-center p-1 rounded-xl`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0}
                />
                <div className='absolute top-3 left-3 flex gap-2'>
                  <span className='px-2 py-1 text-xs rounded-full bg-black/80 text-white'>{conf.year}</span>
                  <span className='px-2 py-1 text-xs rounded-full bg-white/90 text-black shadow'>{conf.venue}</span>
                </div>
              </div>

              <div className='p-5'>
                <h3 className='text-lg font-semibold'>{conf.title}</h3>
                <p className='mt-1 text-sm text-gray-600 dark:text-white/80'>
                  <strong>{conf.role}</strong> — {conf.topic}
                </p>

                {(conf.slides || conf.video) ? (
                  <div className='mt-4 flex items-center gap-3'>
                    {conf.slides ? (
                      <a href={conf.slides} target='_blank' rel='noreferrer'
                         className='px-3 py-1.5 text-sm border rounded-full hover:-translate-y-0.5 transition'>
                        Slides
                      </a>
                    ) : null}
                    {conf.video ? (
                      <a href={conf.video} target='_blank' rel='noreferrer'
                         className='px-3 py-1.5 text-sm border rounded-full hover:-translate-y-0.5 transition'>
                        Video
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </motion.section>
  )
}

export default Work
