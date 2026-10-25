import Link from 'next/link'
import React from 'react'

const CTA = () => {
    return (
        <section className='bg-bs_info md:py-[12.5rem] py-20 '>
            <div className='container max-w-[720px] mx-auto px-4'>
                <h2 className='md:text-4xl text-4xl font-semibold text-title_color underline decoration-bs_link_color mb-6 text-center'>
                    Tell me about your project
                </h2>
                <p className='md:text-2xl text-lg font-normal text-title_color text-center mb-9'>
                    Send a short brief and get a fixed-scope quote within 24 hours. No sales team, no obligation, and no work starts until you approve the scope and price.
                </p>
                <div className='flex md:flex-row flex-col gap-4 items-center justify-center mb-8'>
                    <Link href="/contact#contact-form" className='text-base font-semibold text-white bg-bs_btn_bg hover:bg-bs_link_color py-[0.688rem] px-[1.813rem] border-2 border-bs_btn_bg hover:border-bs_link_color inline-block transition-all duration-300'>
                        Start a project
                    </Link>
                    <Link href="/works" className='text-base font-semibold text-title_color hover:text-white hover:bg-title_color py-[0.688rem] px-[1.813rem] border-2 border-title_color inline-block transition-all duration-300'>
                        See case studies
                    </Link>
                </div>
                <ul className='flex md:flex-row flex-col md:gap-10 gap-2 items-center justify-center'>
                    <li>
                        <Link href="tel:+923026006280" target='_blank' className='md:text-xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300'>
                            Call +92 302-6006-280
                        </Link>
                    </li>
                    <li>
                        <Link href="mailto:info@mufaqar.com" target='_blank' className='md:text-xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300'>
                            info@mufaqar.com
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default CTA