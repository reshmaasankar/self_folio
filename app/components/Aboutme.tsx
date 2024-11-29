'use client'

import React from 'react'
import Headersection from './Headersection'
import { motion } from "motion/react"


function Aboutme() {
    return (
        <motion.section className='text-center max-w-[50rem] mt-10 scroll-mt-28' id="aboutme"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{delay: 0.15}}
        >
            <Headersection>About Me</Headersection>
            <p className='mb-5 font-medium italic text-gray-700 dark:text-gray-300'>
                I graduated in 2015 and started my career as an Associate System Engineer at Tata Consultancy Services (TCS) in 2016,
                 where I developed strong technical foundations and contributed to various projects.
                In 2019, I joined EY (Ernst & Young) and currently work as a Senior Consultant, specializing in front-end development. 
                In my role, I design and build user-friendly, responsive web applications that deliver seamless experiences for clients. 
                My work at EY involves collaborating with cross-functional teams to create innovative solutions, while also leading a team to drive project success. I continuously strive to enhance
                 my skills and stay ahead of the latest industry trends.
            </p>
        </motion.section>
    )
}

export default Aboutme