import Image from "next/image";

export default function InnerPages_Banner({ subtitle, title }) {
  return (
    <section className='relative'>
    <div className='container mx-auto px-4 flex md:flex-row flex-col gap-6 md:py-[6.5rem] py-20 items-center  bg-no-repeat bg-right-top md:bg-auto bg-[length:200px_100px]'>
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-6xl md:leading-[1] text-4xl font-bold text-[#1F2B37] mb-4'>
                {title}
            </h1>
            <p className='md:text-2xl text-lg font-normal text-[#212121] mb-6'>
                {subtitle}
            </p>
        </div>
        <div className='md:w-1/2 w-full'>
        </div>
    </div>
    <Image src="/images/svgs/blocks3.svg" alt='' aria-hidden='true' width={426} height={286} className='absolute 2xl:right-0 lg:right-[-131px] right-0 lg:bottom-[-150px] bottom-[-75px] md:w-auto w-1/2 z-10' />
</section>
  )
}
