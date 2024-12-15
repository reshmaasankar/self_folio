"use client";

import React from 'react'
import Headersection from './Headersection'

import { motion } from "motion/react"
import toast from "react-hot-toast";
import SubmitBtn from './SubmitBtn';
import { sendEmail } from '../actions/sendEmail';

function Contact() {
  return (
    <motion.section
      id="contactme"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center mt-20"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}

    >
      <Headersection>Contact me</Headersection>

      <p className="text-gray-700 -mt-6 dark:text-gray-300">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:reshusankar@gmail.com">
          reshusankar@gmail.com.
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          console.log('data is', data, error)
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

export default Contact