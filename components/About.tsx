import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <section id="about" className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-32 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400" data-aos="fade-right" data-aos-duration="1000">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Me</h2>
                    <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                    <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                    <h2 className="mt-10 mb-2 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white" >Libary and Framework</h2>
                    <div className='flex items-center gap-4 [&_img]:w-10 [&_img]:mt-3'>
                        <Image src='/laravel.svg'width={10} height={10} alt='laravel'/>
                        <Image src='/react.svg' width={10} height={10} alt='react'/>
                        <Image src='/nextjs.svg' width={10} height={10} alt='next'/>
                    </div>
                    <h2 className="mb-2 mt-10 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Language and Tools</h2>
                    <div className='flex items-center gap-4 [&_img]:w-10 [&_img]:mt-3'>
                        <Image src='/javascript.svg' width={10} height={10} alt='javascript'/>
                        <Image src='/php.svg' width={10} height={10} alt='php'/>
                        <Image src='/antd.svg' width={10} height={10} alt='antd'/>
                    </div>
                    <div className="flex gap-10">
                        <div>
                            <h2 className="mb-2 mt-10 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Database</h2>
                            <div className='flex items-center gap-4 [&_img]:w-10 [&_img]:mt-3'>
                                <Image src='/mysql.svg' width={10} height={10} alt='mysql'/>
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-2 mt-10 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Other</h2>
                            <div className='flex items-center gap-4 [&_img]:w-10 [&_img]:mt-3'>
                                <Image src='/git.svg' width={10} height={10} alt='git'/>
                                <Image src='/github.svg' width={10} height={10} alt='github'/>
                                <Image src='/bitbucket.svg' width={10} height={10} alt='bitbucket'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8" data-aos="fade-left" data-aos-duration="1000">
                    <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                </div>
            </div>
        </section>
    )
}
