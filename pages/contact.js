import {
  BsArrowRight,
  BsBuilding,
  BsEnvelope,
  BsTelephone,
} from 'react-icons/bs';
import InnerPages_Banner from '../components/innerPages-banner';
import Link from 'next/link';
import { motion, Variant } from 'framer-motion';
import { fadeUp } from '../const/animation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import PageHead from '../components/pagesmeta';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaSkype, FaTwitterSquare } from 'react-icons/fa';
import CTA from '../components/newComponents/cta';
import Image from 'next/image';
import Thankyou_Popup from '../components/newComponents/thankyou-popup';
import { breadcrumbSchema, SITE_URL } from '../const/schema';

const contactSchema = [
  breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Mufaqar Islam',
    url: `${SITE_URL}/contact`,
    description:
      'Contact Mufaqar Islam for WordPress, React and Next.js development projects.',
    mainEntity: { '@id': `${SITE_URL}/#professional-service` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    dateModified: '2026-10-25',
    inLanguage: 'en-US',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '#contact-answer'],
    },
  },
];

export default function Contact_Us() {
  const [popUp, setPopUp] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [sending, setSending] = useState(false);

  const onSubmit = (data) => {
    setSending(true);
    fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received', res);
      if (res.status === 200) {
        console.log('Response succeeded!');
        reset();
        setSending(false);
      }
    });
  };
  return (
    <>
      <PageHead
        title="Hire a WordPress, React & Next.js Developer | Contact"
        description="Tell me about your project. Get a clear scope, timeline and price from a senior WordPress, React and Next.js developer within 24 hours."
        url="https://www.mufaqar.com/contact"
        schema={contactSchema}
      />
      <main className='overflow-x-hidden relative'>
        <InnerPages_Banner
          title="LET’S WORK TOGETHER"
          subtitle="I’d love to plan, design & develop your website." />
        <section className="bg-white md:py-[5rem] py-12">
          <div className="container max-w-[860px] mx-auto px-4">
            <h2 className="md:text-4xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-6">
              Start a project with Mufaqar Islam
            </h2>
            <p
              id="contact-answer"
              className="text-base md:text-lg font-normal text-title_color mb-6"
            >
              Send a short brief using the form, email info@mufaqar.com or call
              +92 302-6006-280. You get a reply within 24 hours with questions, a
              recommended approach and a fixed price for WordPress, React or
              Next.js work.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-title_color mb-3">
              What happens next
            </h3>
            <ol className="list-decimal pl-5 text-base md:text-lg font-normal text-title_color mb-6 flex flex-col gap-2">
              <li>
                You send the brief: goals, pages or features, deadline and
                budget range.
              </li>
              <li>
                I reply within 24 hours with questions, a recommended stack and
                a fixed-scope quote.
              </li>
              <li>
                We agree the scope and schedule, then kick off with a shared
                project plan.
              </li>
            </ol>
            <h3 className="text-xl md:text-2xl font-semibold text-title_color mb-3">
              What to include in your brief
            </h3>
            <ul className="list-disc pl-5 text-base md:text-lg font-normal text-title_color mb-6 flex flex-col gap-2">
              <li>What the site or app needs to do, and who it is for.</li>
              <li>Any existing website, brand assets or content you have.</li>
              <li>Your target launch date and budget range.</li>
              <li>Integrations you already use, such as payments or CRM.</li>
            </ul>
            <p className="text-sm font-normal text-title_color mb-2">
              Enquiries are handled directly by{' '}
              <Link
                href="/about"
                className="underline hover:decoration-bs_btn_bg transition-all duration-300"
              >
                Mufaqar Islam
              </Link>
              , not a sales team.
            </p>
            <p className="text-sm font-normal text-title_color">
              Last updated:{' '}
              <time dateTime="2026-10-25">October 25, 2026</time>
            </p>
          </div>
        </section>
        <section className='bg-title_color md:py-[12.5rem] py-20 relative'>
          <div className='container mx-auto px-4 relative'>
            <div className='flex md:flex-row flex-col md:gap-10 gap-5 items-start'>
              <div className='md:w-1/3 w-full'>
                <h3 className='text-3xl font-semibold text-white mb-2'>
                  Phone
                </h3>
                <Link href="tel:+923026006280" target='_blank' className='text-2xl font-normal text-white underline hover:decoration-bs_btn_bg transition-all duration-300'>
                  +92 302-6006-280
                </Link>
                <h3 className='text-3xl font-semibold text-white mb-2 mt-8'>
                  Email
                </h3>
                <Link href="mailto:info@mufaqar.com" target='_blank' className='text-2xl font-normal text-white underline hover:decoration-bs_btn_bg transition-all duration-300'>
                  info@mufaqar.com
                </Link>
                <h3 className='text-3xl font-semibold text-white mb-2 mt-8'>
                  Address
                </h3>
                <p className='text-2xl font-normal text-white'>
                  134 B Ahmed Housing, Multan Road, Lahore, Pakistan
                </p>
                <ul className='flex flex-wrap gap-4 mt-8'>
                  <li>
                    <Link href="https://www.facebook.com/mufaqar" target='_blank' className='md:text-4xl text-2xl text-white hover:text-bs_link_color inline-flex transition-all duration-300'>
                      <FaFacebookSquare />
                      <span className='sr-only'>Mufaqar Islam on Facebook</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/in/mufaqar" target='_blank' className='md:text-4xl text-2xl text-white hover:text-bs_link_color inline-flex transition-all duration-300'>
                      <FaLinkedin />
                      <span className='sr-only'>Mufaqar Islam on LinkedIn</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/mufaqar" target='_blank' className='md:text-4xl text-2xl text-white hover:text-bs_link_color inline-flex transition-all duration-300'>
                      <FaTwitterSquare />
                      <span className='sr-only'>Mufaqar Islam on Twitter</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com/mufaqar" target='_blank' rel="noopener noreferrer" className='md:text-4xl text-2xl text-white hover:text-bs_link_color inline-flex transition-all duration-300'>
                      <FaGithubSquare />
                      <span className='sr-only'>Mufaqar Islam on GitHub</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://join.skype.com/invite/M0ilv0J1egAb" target='_blank' className='md:text-4xl text-2xl text-white hover:text-bs_link_color inline-flex transition-all duration-300'>
                      <FaSkype />
                      <span className='sr-only'>Mufaqar Islam on Skype</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='md:w-2/3 w-full'>
                <form
                  id="contact-form"
                  onSubmit={(e) => {
                    handleSubmit(onSubmit)(e);
                    setTimeout(() => {
                      setPopUp(true);
                    }, 3000);
                  }}
                  className="flex flex-col gap-8 relative z-10 scroll-mt-24"
                >
                  <div className="w-full">
                    <label htmlFor="name" className="hidden">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="name"
                      placeholder="Your Name"
                      className='text-xl font-semibold text-title_color py-[.8125rem] px-4 w-full rounded-lg border-2 border-[#afd2e9] outline-none focus:shadow-[0_0_0_.25rem_rgb(175,210,233,25%)]'
                      {...register('name', { required: true })}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="hidden">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      autoComplete="email"
                      placeholder="Your Email"
                      className='text-xl font-semibold text-title_color py-[.8125rem] px-4 w-full rounded-lg border-2 border-[#afd2e9] outline-none focus:shadow-[0_0_0_.25rem_rgb(175,210,233,25%)]'
                      {...register('email', { required: true })}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="w-full">
                    <label htmlFor="phone" className="hidden">
                      Your Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      autoComplete="tel"
                      placeholder="Your Phone"
                      className='text-xl font-semibold text-title_color py-[.8125rem] px-4 w-full rounded-lg border-2 border-[#afd2e9] outline-none focus:shadow-[0_0_0_.25rem_rgb(175,210,233,25%)]'
                      {...register('phone', { required: true })}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="w-full">
                    <textarea
                      id="message"
                      rows="6"
                      placeholder="Tell me about your project, timeline and budget range"
                      className='text-xl font-semibold text-title_color py-[.8125rem] px-4 w-full rounded-lg border-2 border-[#afd2e9] outline-none focus:shadow-[0_0_0_.25rem_rgb(175,210,233,25%)]'
                      {...register('message', { required: true })}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className='text-xl font-semibold text-white bg-bs_btn_bg hover:bg-bs_link_color hover:border-bs_link_color py-[0.8125rem] px-[1.813rem] rounded-xl border-2 border-[#e42537] inline-block transition-all duration-300 w-fit'>
                    SEND PROJECT BRIEF
                  </button>
                  <p className="text-sm font-normal text-title_color -mt-4">
                    I reply within 24 hours. No obligation and no sales team.
                  </p>
                </form>
              </div>
            </div>
          </div>
          <Image src="/images/svgs/blocks3.svg" alt='blocks3.svg' width={426} height={286} className='absolute 2xl:right-0 lg:right-[-131px] right-0 lg:bottom-[-150px] bottom-[-75px] md:w-auto w-1/2 z-10' />
        </section>
        <CTA />
        <div
          onClick={() => setPopUp(false)}
          className={`${popUp
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-60 opacity-0 pointer-events-none"
            } transition-all duration-500 fixed top-0 bottom-0 w-screen h-screen bg-black/10 z-20 flex items-center justify-center`}
        >
          <Thankyou_Popup popUp={popUp} setPopUp={setPopUp} />
        </div>

      </main>
    </>
  );
}

