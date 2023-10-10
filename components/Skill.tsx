import React from 'react'
import Card from './ui/Card';


export default function Skill() {
  return (
    <>
      <section id="skill" className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-32 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8" data-aos="fade-down" data-aos-duration="1000">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Project and Experience</h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
          </div>
          <Card />
        </div>
      </section>
    </>
  )
}
