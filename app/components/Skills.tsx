'use client'

import React from 'react'
import Headersection from './Headersection'
import { skills } from '../lib/data'
import { motion } from "motion/react"


function Skills() {
  return (
    <motion.section className='text-center max-w-[45rem] mt-10 scroll-mt-28' id="skills" initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.1,
    }}>
        <Headersection>Skills</Headersection>
        <ul className='flex flex-wrap gap-5 justify-center items-center text-gray-800'>
          {skills.map((skill, i) => (
            <li className='bg-white border border-black/[0.1] rounded-xl border-gray-500 px-4 py-2  text-sm' key={i}>{skill}</li>
          ))}
        </ul>
       
    </motion.section>
  )
}

export default Skills