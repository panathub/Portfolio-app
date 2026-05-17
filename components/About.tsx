import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-transparent">
      <div className="items-center gap-16 px-4 py-8 mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:py-32 lg:px-6">
        <div
          className="font-light text-gray-500 sm:text-lg dark:text-gray-400"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="mb-4">
            As a dedicated Full Stack Developer with 4+ years of experience in
            the tech industry, I specialize in designing and developing scalable
            web applications and backend services. I enjoy working across the
            entire development stack, from building robust APIs and system
            architectures to creating responsive and user-friendly interfaces.
          </p>
          <h2 className="mt-10 mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Framework
          </h2>
          <div className="flex items-center gap-4 [&_img]:w-10 [&_img]:mt-3">
            <Image src="/laravel.svg" width={10} height={10} alt="laravel" />
            <Image src="/nestjs.svg" width={10} height={10} alt="nest" />
            <Image src="/nextjs.svg" width={10} height={10} alt="next" />
          </div>
          <h2 className="mt-10 mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Language and Tools
          </h2>
          <div className="flex items-center gap-4 [&_img]:w-10 [&_img]:mt-3">
            <Image
              src="/javascript.svg"
              width={10}
              height={10}
              alt="javascript"
            />
            <Image
              src="/typescript.svg"
              width={10}
              height={10}
              alt="typescript"
            />
            <Image src="/react.svg" width={10} height={10} alt="react" />
            <Image src="/vuejs.svg" width={10} height={10} alt="vuejs" />
            <Image src="/php.svg" width={10} height={10} alt="php" />
            <Image src="/nodejs.svg" width={10} height={10} alt="nodejs" />
            <Image src="/antd.svg" width={10} height={10} alt="antd" />
          </div>
          <div className="flex gap-10">
            <div>
              <h2 className="mt-10 mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Database
              </h2>
              <div className="flex items-center gap-4 [&_img]:w-10 [&_img]:mt-3">
                <Image src="/mysql.svg" width={10} height={10} alt="mysql" />
                <Image
                  src="/mariadb.svg"
                  width={10}
                  height={10}
                  alt="mariadb"
                />
              </div>
            </div>
            <div>
              <h2 className="mt-10 mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Other
              </h2>
              <div className="flex items-center gap-4 [&_img]:w-10 [&_img]:mt-3">
                <Image src="/git.svg" width={10} height={10} alt="git" />
                <Image src="/github.svg" width={10} height={10} alt="github" />
                <Image
                  src="/bitbucket.svg"
                  width={10}
                  height={10}
                  alt="bitbucket"
                />
                <Image src="/docker.svg" width={10} height={10} alt="docker" />
                <Image src="/aws.svg" width={10} height={10} alt="aws" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="grid grid-cols-2 gap-4 mt-8"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="w-full mt-4 rounded-lg lg:mt-10"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
