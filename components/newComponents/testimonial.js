import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
    return (
        <section className='bg-title_color md:py-[12.5rem] py-20 relative'>
            <div className='container mx-auto px-4'>
                <h2 className='md:text-5xl text-2xl font-semibold text-white underline decoration-bs_link_color mb-12 text-center'>
                    What Clients Say
                </h2>
                <div className='flex flex-row md:gap-10 gap-5 items-start max-w-[880px] mx-auto '>
                    <Image src="/images/svgs/qout.svg" alt='' aria-hidden='true' width={123} height={98} className='-mt-10 md:w-full w-[70px]' />
                    <figure className='md:mb-28 mb-10'>
                        <blockquote className='md:text-2xl text-xl font-normal italic text-white mb-9'>
                            I’ve been working with Mufaqar since 2015, and the experience has been exceptional. He is incredibly responsive, which is crucial when your business depends on your website, yet he was equally patient with us as our requirements evolved. I highly recommend Mufaqar to anyone looking to elevate their website and have a trustworthy professional manage it.
                        </blockquote>
                        <figcaption className='md:text-[1.375rem] md:leading-4 text-lg font-normal text-white'>
                            <strong>Nikola, NSigma</strong> — Chief Officer
                        </figcaption>
                    </figure>
                </div>
                <Image src="/images/svgs/blocks3.svg" alt='' aria-hidden='true' width={426} height={286} className='absolute 2xl:right-0 lg:right-[-131px] right-0 lg:bottom-[-150px] bottom-[-75px] md:w-auto w-1/2 z-10' />
            </div>
        </section>

    )
}

export default Testimonial