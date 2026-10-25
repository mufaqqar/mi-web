import Image from 'next/image';
import React from 'react';
import StoryBgOne from '../public/images/StoryBgOne.svg';
import StoryBgTwo from '../public/images/StoryBgTwo.svg';
import { motion, Variant } from 'framer-motion';
import { fadeUp } from '../const/animation';

function Story() {
  return (
    <>
      <section className="bg-title_color">
        <div className="container grid p-4 md:py-[12.5rem] py-20 mx-auto md:grid-cols-2 story relative z-10">
          <div className="relative grid bg-white border border-gray-300 stories_wrapper rounded-xl md:grid-cols-2">
            <div className="border-r-[1px] border-gray-300">
              <h2 className="text-center text-green-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]">
                200+
              </h2>
              <h6 className="mt-2 text-center h3">Clients Worldwide</h6>
            </div>
            <div>
              <h2 className="text-center text-blue-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]">
                10M+
              </h2>
              <h6 className="mt-2 text-center h3">Lines of Code</h6>
            </div>
            <div className="border-t-[1px] border-r-[1px] border-gray-300">
              <h2 className="text-center text-yellow-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]">
                195+
              </h2>
              <h6 className="mt-2 text-center h3">Client Retention</h6>
            </div>
            <div className="border-t-[1px] border-gray-300">
              <h2 className="text-center text-orange-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]">
                15<sub className="text-2xl">Years</sub>
              </h2>
              <h6 className="mt-2 text-center h3">In Business</h6>
            </div>
            <div className="border-t-[1px] border-r-[1px] border-gray-300">
              <h2 className="text-center text-fuchsia-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]">
                880+
              </h2>
              <h6 className="mt-2 text-center h3">Projects Completed</h6>
            </div>
            <div className="border-t-[1px] border-gray-300 relative z-[2]">
              <h2 className="text-center text-cyan-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]">
                24/7
              </h2>
              <h6 className="mt-2 text-center h3">IT Support</h6>
            </div>
            <figure className="absolute bottom-4 z-[-1] -left-20">
              <Image src={StoryBgOne} alt="Bg-1"></Image>
            </figure>
            <figure className="absolute lg:-right-12 z-[-1] -bottom-16">
              <Image src={StoryBgTwo} alt="Bg-1" className=""></Image>
            </figure>
          </div>
          <div className="mt-16 md:pl-20 md:mt-0">
            <h6 className="text-bs_link_color h3">My Story</h6>
            <h2 className="md:text-4xl text-2xl font-semibold text-white underline decoration-bs_link_color mb-8">
              Muhammad Mufaqar Islam
            </h2>
            <p className="text-lg font-normal text-white mb-4">
              I was born and raised in beautiful Pakistan and currently reside
              in Lahore. My journey into the world of web development began with
              a deep passion for creating and building online experiences, which
              led me to carve my own path as a freelancer.
            </p>
            <p className="text-lg font-normal text-white mb-4">
              I started working as a freelance WordPress  developer
              at the age of 24, diving headfirst into learning and mastering all
              things WordPress. Over the years, I honed my skills in WordPress,
              React.js, and modern development frameworks like Next.js and
              TailwindCSS. Today, with over 15 years of experience, I work
              independently, delivering high-quality web development services to
              clients worldwide.
            </p>
            <p className="text-lg font-normal text-white mb-4">
              In addition to client work, I actively share my knowledge and
              expertise with the WordPress community in Pakistan. I’ve had the
              privilege of collaborating with businesses to not only create
              visually appealing websites but also optimize them to drive leads,
              conversions, and business growth.
            </p>
            <p className="text-lg font-normal text-white mb-4">
              Combining my skills in WordPress, online marketing, and search
              engine optimization, I specialize in designing websites that not
              only look great but also deliver measurable results for my
              clients.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Story;
