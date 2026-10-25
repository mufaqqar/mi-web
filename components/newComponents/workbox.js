import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Workbox = ({ cstm_class, data }) => {
    return (
        <div className='group'>
            <Image src={data?.feature} alt={`${data?.title} website project by Mufaqar Islam`} width={1920} height={768} sizes='(max-width: 768px) 100vw, 45vw' className='object-cover w-full min-h-[350px]' />
            <div className={`${cstm_class} md:px-12 md:py-8 p-8 md:w-11/12 mx-auto relative md:min-h-[300px] overflow-hidden md:mt-[-70px] mt-0`}>
                <Image src="/images/svgs/hexa.svg" alt='' aria-hidden='true' width={502} height={451} className='absolute scale-100 object-cover -left-40 bottom-12 group-hover:scale-[2.5] transition-all duration-1000 opacity-20' />
                <div className='relative z-10'>
                    <p className='text-2xl font-normal text-white mb-5 underline decoration-white group-hover:decoration-bs_btn_bg transition-all duration-1000'>
                        {data?.category}
                    </p>
                    <h3>
                        <Link href={`/works/${data?.slug}`} className='md:text-4xl text-2xl font-semibold text-white max-w-[380px] inline-block'>
                            {data?.title}
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Workbox