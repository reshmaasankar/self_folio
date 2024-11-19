'use client'

import Image from 'next/image'
import React from 'react';
import { motion } from "motion/react"
import Link from 'next/link';


function Intro() {
  return (
    <section className='text-center max-w-[50rem] scroll-mt-28' id="home">
      <div className='flex items-center justify-center'>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <Image src='/reshma_photo.jpg' alt='Reshma' width={192} height={192} className='h-24 w-24 rounded-full border-[0.35rem] border-white' />
        </motion.div>
      </div>
      <motion.p className='font-bold mb-10 mt-2 px-4 text-2xl'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >Hello, I am Reshma - a Front end developer wih more than 8 years of experince.</motion.p>
      
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4  font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
         <Link
          href="#contactme"
          className="rounded-full bg-black px-8 py-3 font-medium text-white"
          
        >
          Contact me here{" "}
        </Link>

        <a
          className="rounded-full bg-white px-8 py-3 font-medium text-black"
          href="/Reshma A.docx"
          download
        >
           Download CV{" "}
        </a>
      </motion.div>
    </section>
  )
}

export default Intro