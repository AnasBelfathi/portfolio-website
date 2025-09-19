import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Education = ({ isDarkMode }) => {
  // Si le logo n'est pas dans assets, mets l'image dans /public/sorbonne-logo.png
  const sorbonneLogo = (assets as any).sorbonne_logo || '/sorbonne-logo.png';

  // Points forts (on remplace l'ancien infoList pour cette section)
  const eduHighlights = [
    {
      title: '🎖️ Master EID2 — top-3 in France',
      description:
        'Lauréat du Master EID2, classé parmi les 3 meilleurs masters IA en France.',
    },
    {
      title: '🏆 Majorant de la promotion',
      description:
        'Classé premier (major) de la promo, avec un parcours orienté recherche et industrie.',
    },
    {
      title: '🎓 PhD student',
      description:
        'Doctorant actuellement, mes travaux portent sur l’adaptation des LLMs à des domaines spécialisés.',
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
        Introduction
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
        {/* Diplôme / visuel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-64 sm:w-80 rounded-3xl max-w-none'
        >
          <Image src={assets.master_dip} alt='Master degree' className='w-full rounded-3xl' />
        </motion.div>

        {/* Texte + highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1'
        >
          {/* Bandeau Sorbonne + badges */}
          <div className='flex items-center gap-3 mb-4'>
            <div className='relative w-10 h-10'>
              <Image src={sorbonneLogo} alt='Sorbonne logo' fill className='object-contain' />
            </div>
            <div className='flex flex-wrap items-center gap-2'>
              <span className='px-2.5 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200'>
                Sorbonne Paris Nord — EID2
              </span>
              <span className='px-2.5 py-1 text-xs rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'>
                🎖️ Top-3 AI Master in France
              </span>
              <span className='px-2.5 py-1 text-xs rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'>
                🏆 Majorant
              </span>
            </div>
          </div>

          <p className='mb-8 max-w-2xl font-Ovo'>
            I am an <strong>AI Research Scientist</strong> and <strong>PhD student</strong>.
            I graduated from the <strong>EID2 Master</strong> (Sorbonne Paris Nord) — ranked among the
            <strong> top-3 AI master’s programs in France</strong> — where I was the
            <strong> valedictorian (majorant)</strong>. My research focuses on
            <strong> adapting Large Language Models (LLMs)</strong> to specialized domains,
            bridging academic research and real-world industrial needs.
          </p>

          {/* Cartes highlights */}
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

          {/* LLMs récents */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className='my-6 text-gray-700 font-Ovo dark:text-white/80'
          >
            Recent LLMs I’ve worked with
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className='flex items-center gap-3 sm:gap-5'
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500'
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Education
