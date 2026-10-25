import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [menu, setMenu] = useState(false);
    return (
        <header className={`bg-header md:py-8 py-2 relative z-50`} >
            <div className='container mx-auto px-4 flex md:flex-row flex-row gap-5 items-center justify-between'>
                <div className='md:w-1/3 w-2/3'>
                    <Link href="/" className='inline-block'>
                        <Image src="/images/logo.png" alt='Mufaqar Islam logo' width={303} height={66} priority />
                        <span className='sr-only'>Mufaqar Islam — Full Stack Web Developer</span>
                    </Link>
                </div>
                <nav>
                    <button onClick={() => setMenu(!menu)} className='text-white py-1 px-3 border border-white rounded-lg md:hidden block'>
                        {!menu ? (<FaBars size={24} />) : <AiOutlineClose size={24} />}
                    </button>
                    <ul className={`flex md:flex-row flex-col md:gap-8 gap-5 md:items-center md:static absolute left-0 right-0 transition-all duration-300 md:p-0 md:h-full md:opacity-100 ${menu ? " bg-header p-5 h-80 opacity-100" : " bg-transparent h-0 opacity-0"}`}>
                        <li className='w-fit'>
                            <Link href="/services" className='text-xl font-semibold text-white group'>
                                Services
                                <span className={`block w-0 group-hover:w-full transition-all duration-300 bg-bs_btn_bg h-[1px]`}></span>
                            </Link>
                        </li>
                        <li className='w-fit'>
                            <Link href="/works" className='text-xl font-semibold text-white group'>
                                Work
                                <span className={`block w-0 group-hover:w-full transition-all duration-300 bg-bs_btn_bg h-[1px]`}></span>
                            </Link>
                        </li>
                        <li className='w-fit'>
                            <Link href="/about" className='text-xl font-semibold text-white group'>
                                About
                                <span className={`block w-0 group-hover:w-full transition-all duration-300 bg-bs_btn_bg h-[1px]`}></span>
                            </Link>
                        </li>
                         <li className='w-fit'>
                            <Link href="/cv" className='text-xl font-semibold text-white group'>
                               Resume
                                <span className={`block w-0 group-hover:w-full transition-all duration-300 bg-bs_btn_bg h-[1px]`}></span>
                            </Link>
                        </li>
                        <li className='w-fit'>
                            <Link href="/contact" className='text-xl font-semibold text-white bg-bs_btn_bg hover:bg-bs_link_color hover:border-bs_link_color py-[0.688rem] px-[1.813rem] rounded-xl border-2 border-[#e42537] inline-block transition-all duration-300'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header