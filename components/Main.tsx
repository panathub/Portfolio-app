import React from 'react'
import Typewriter from 'typewriter-effect';
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Main() {
  return (
    <section id="main" className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12" data-aos="fade-up" data-aos-duration="2000">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white" >
          <Typewriter
            options={{
              strings: ['Hello', 'My Portfolio'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Hi, My name is Panat Bangsang-oon [ MON ]</p>
        <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          Contact
          <ArrowRightIcon className="h-3 w-3 ml-2" aria-hidden="true" />
        </a>
      </div>
      <div className="w-[90%] max-w-[600px] mx-auto mt-10 lg:w-full lg:max-w-none lg:mt-0 lg:col-span-5">
        <Image src='/Saly.webp' width={1000} height={1000} priority={true} alt='robot' className="wobbling" />
      </div>
    </div>
  </section>
  )
}
