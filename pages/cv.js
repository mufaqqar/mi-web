import { BsHeadphones } from "react-icons/bs";
import { BsEnvelopeOpen } from "react-icons/bs";
import { BsCloudDownload } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import Link from "next/dist/client/link";
import TimelineBox from "../components/timelineBox";
import CV_fixNav from "../components/cv-fixNav";
import Image from "next/image";
import Profile_Pic from "../public/images/Profile.jpg";
import { motion, Variant } from "framer-motion";
import { fadeUp, scaleUp } from "../const/animation";
import PageHead from "../components/pagesmeta";
import { breadcrumbSchema, SITE_URL } from "../const/schema";

const cvSchema = [
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Resume", url: "/cv" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Resume of Mufaqar Islam",
    url: `${SITE_URL}/cv`,
    mainEntity: { "@id": `${SITE_URL}/#person` },
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: "Mufaqar Islam — Full Stack Web Developer Resume",
    url: `${SITE_URL}/Resume.pdf`,
    fileFormat: "application/pdf",
    about: { "@id": `${SITE_URL}/#person` },
    dateModified: "2026-10-25",
  },
];

export default function CV() {
  return (
    <>
      <PageHead
        title="Resume | Mufaqar Islam — Full Stack Developer"
        description="View the resume of Mufaqar Islam — a seasoned Full Stack Web Developer with 15+ years of experience in WordPress, React, Next.js, PHP, and TailwindCSS. Available for hire."
        url="https://www.mufaqar.com/cv"
        schema={cvSchema}
      />
      <motion.section
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        id="about"
        className="md:pt-24 pb-16 bg-bs_secondary"
      >
        <div className="md:max-w-[1140px] mx-auto flex md:flex-row flex-col md:space-y-0 space-y-8 items-center">
          <div className="md:w-1/3 w-full flex justify-center">
            <motion.div
              variants={scaleUp}
              className="border-4 border-white md:mb-[-9.8rem]"
            >
              <Image
                src={Profile_Pic}
                alt={Profile_Pic}
                className="object-contain"
              />
            </motion.div>
          </div>
          <div className="md:w-2/3 w-full md:pl-11 px-4 md:text-left text-center">
            <motion.h2
              variants={fadeUp}
              className="md:text-6xl text-4xl font-semibold text-title_color mb-4"
            >
              Mufaqar Islam
            </motion.h2>
            <motion.h6
              variants={fadeUp}
              className="md:text-2xl text-xl font-medium mb-4 text-title_color"
            >
              Full Stack Web Developer | WordPress | React | NextJs |
              Tailwindcss
            </motion.h6>
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium tracking-widest text-title_color"
            >
              Seasoned ReactJs/WordPress/PHP Developer with over 15 years of
              experience building, launching, and managing complex websites also
              specialize in all things "MERN".
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-sm font-medium tracking-widest text-title_color"
            >
              PREVIOUS: FRONT-END DEVELOPER AT SOFTSGENS
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium tracking-widest text-title_color"
            >
              EDUCATION: BS Computer Science
            </motion.p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="py-8 border-b border-black/30"
      >
        <div className="md:max-w-[1140px] mx-auto flex md:flex-row flex-col items-center">
          <div className=" w-1/3"></div>
          <div className="md:w-2/3 w-full flex md:flex-row flex-col md:space-y-0 space-y-5 items-center justify-between">
            <motion.div variants={fadeUp}>
              <Link href="tel:+923026006280" target="_blank" rel="nofollow">
                <span className="flex space-x-2 items-center group text-title_color">
                  <BsHeadphones className="md:text-3xl text-2xl text-bs_secondary group-hover:text-title_color" />
                  <span className="text-xl">Contact Information</span>
                </span>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link
                href="mailto:mufaqar@gmail.com"
                target="_blank"
                rel="nofollow"
              >
                <span className="flex space-x-2 items-center group text-title_color">
                  <BsEnvelopeOpen className="md:text-3xl text-2xl text-bs_secondary group-hover:text-title_color" />
                  <span className="text-xl">Send Message</span>
                </span>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link href="Resume.pdf">
                <span className="flex space-x-2 items-center group text-title_color">
                  <BsCloudDownload className="md:text-3xl text-2xl text-bs_secondary group-hover:text-title_color" />
                  <span className="text-xl">Download Resume</span>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="py-8"
      >
        <div className="md:max-w-[1140px] mx-auto grid md:grid-cols-2">
          <motion.div variants={fadeUp} className="md:p-8 p-5">
            <h3 className="text-2xl font-bold uppercase tracking-tighter text-title_color mb-5 underline decoration-bs_link_color">
              About me
            </h3>
            <p className="text-base text-title_color">
              ReactJs Developer with 15+ years of extensive Frontend and Backend
              experience. React, Next Js | Bootstrap, and Tailwind Css
              Familiarity with modern front-end build pipelines and tools.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="md:p-8 p-5">
            <div className="p-8 shadow-xl transform hover:-translate-y-3 duration-500">
              <h5 className="text-xl font-bold tracking-tighter text-title_color mb-3">
                Personal Details
              </h5>
              <div className="flex md:flex-row flex-col justify-between">
                <ul className="flex flex-col md:space-y-4">
                  <li className="font-medium text-sm flex items-center space-x-2 text-title_color">
                    <span>PHONE: </span>
                    <Link
                      href="tel:+923026006280"
                      target="_blank"
                      rel="nofollow"
                    >
                      <span className="text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300">
                        (+92) 302 -6006280
                      </span>
                    </Link>
                  </li>
                  <li className="font-medium text-sm flex items-center space-x-2 text-title_color">
                    <span>NATIONALITY: </span>{" "}
                    <span className="text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300">
                      {" "}
                      PAKISTAN
                    </span>
                  </li>
                </ul>
                <ul className="flex flex-col md:space-y-4">
                  <li className="font-medium text-sm flex items-center space-x-2 text-title_color">
                    <span>SKYPE: </span>
                    <Link href="skype:mufaqar" target="_blank" rel="nofollow">
                      <span className="text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300">
                        {" "}
                        mufaqar
                      </span>
                    </Link>
                  </li>
                  <li className="font-medium text-sm flex items-center space-x-2 text-title_color">
                    <span>EMAIL: </span>
                    <Link
                      href="mailto:mufaqar@gmail.com"
                      target="_blank"
                      rel="nofollow"
                    >
                      <span className="text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300">
                        mufaqar@gmail.com
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        id="experience"
        className="py-16 px-4 bg-gray-100"
      >
        <div className="md:max-w-[1140px] mx-auto ">
          <motion.h3
            variants={fadeUp}
            className="text-2xl font-bold uppercase tracking-tighter text-title_color mb-5 underline decoration-bs_link_color"
          >
            EXPERIENCE
          </motion.h3>
          <div className="relative">
            <TimelineBox
              Start_Date="July 2016"
              End_Date="PRESENT"
              Company="SoftGens"
              Com_Loc="Lahore"
              Position="ReactJs Frontend Developer"
              Info="Developed responsive Web applications with NextJs
                                Tanslating designs and wireframes into high quality code
                                Work with Headless CMS like Sanity.io , Strapi and WordPress
                                Migrated Website from WordPress to ReactJs
                                Develop a flexible and well-structured front-end architecture, along with
                                the APIs to support it.
                                Identifies potential problems within the codebase and maintains existing
                                React systems, including fixing bugs.
                                Assisted migrate front and backend to GraphQl
                                Hosted Application on Vercel , Netlify and others.
                                Collaborated in an agile environment and cross functional team to build
                                best-in-class software"
            />
            <TimelineBox
              Start_Date="March 2012"
              End_Date="May 2016"
              Company="SWS"
              Com_Loc="Lahore"
              Position="WordPress Developer"
              Info="WordPress Developer ( Theme Development )
                            Frontend Development ( PSD to HTML )
                            Integrated social media tools and SDKs into various websites
                            "
            />
            <TimelineBox
              Start_Date="Jan 2010"
              End_Date="Jan 2012"
              Company="WebRiver"
              Com_Loc="Lahore"
              Position="PHP Web Developer"
              Info="Developed PHP based Websites, Customized Frontend and Integrate with
                            database backend."
            />
            <div className="h-[485px] w-1 bg-title_color absolute inset-0 -left-3 top-[125px] md:block hidden"></div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        id="education"
        className="py-16 px-4"
      >
        <div className="md:max-w-[1140px] mx-auto ">
          <motion.h3
            variants={fadeUp}
            className="text-2xl font-bold uppercase tracking-tighter text-title_color mb-5 underline decoration-bs_link_color"
          >
            EDUCATION
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="shadow-xl p-8 ">
              <GiGraduateCap className="text-3xl text-bs_secondary" />
              <h5 className="text-xl font-bold tracking-tighter text-title_color mb-2">
                PU Lahore
              </h5>
              <p className="font-medium text-sm text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300">
                Bachelor in computer Science
              </p>
              <p className="text-title_color text-base font-bold">
                Jun 2006 - Mar 2010
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="shadow-xl p-8">
              <GiGraduateCap className="text-3xl text-bs_secondary" />
              <h5 className="text-xl font-bold tracking-tighter text-title_color mb-2">
                EVs Lahore
              </h5>
              <p className="font-medium text-sm text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300">
                Certification in Web Development
              </p>
              <p className="text-title_color text-base font-bold">2004 -2006</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        id="skills"
        className="md:pb-[12.5rem] pb-20 pt-16 px-4"
      >
        <div className="md:max-w-[1140px] mx-auto flex md:flex-row flex-col items-center">
          <div className="p-8 md:w-3/4 w-full">
            <motion.h3
              variants={fadeUp}
              className="text-2xl font-bold uppercase tracking-tighter text-title_color mb-5 underline decoration-bs_link_color"
            >
              SKILLS & LANGUAGE
            </motion.h3>
            <div className="flex md:flex-row flex-col md:gap-5">
              <ul className="flex flex-col md:gap-4 md:w-1/2 w-full">
                <motion.li
                  variants={fadeUp}
                  className="font-medium text-sm uppercase flex md:flex-row flex-col items-center"
                >
                  <p className="md:w-1/4 w-full text-title_color">PHP </p>
                  <div className="md:w-3/4 w-full">
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div
                        className="bg-bs_secondary text-xs font-medium text-title_color text-center p-0.5 leading-none rounded-full"
                        style={{ width: "92%" }}
                      >
                        {" "}
                        92%
                      </div>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  variants={fadeUp}
                  className="font-medium text-sm uppercase flex md:flex-row flex-col items-center"
                >
                  <p className="md:w-1/4 w-full text-title_color">WordPress </p>
                  <div className="md:w-3/4 w-full">
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div
                        className="bg-bs_secondary text-xs font-medium text-title_color text-center p-0.5 leading-none rounded-full"
                        style={{ width: "95%" }}
                      >
                        {" "}
                        95%
                      </div>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  variants={fadeUp}
                  className="font-medium text-sm uppercase flex md:flex-row flex-col items-center"
                >
                  <p className="md:w-1/4 w-full text-title_color">Rest API</p>
                  <div className="md:w-3/4 w-full">
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div
                        className="bg-bs_secondary text-xs font-medium text-title_color text-center p-0.5 leading-none rounded-full"
                        style={{ width: "85%" }}
                      >
                        {" "}
                        80%
                      </div>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  variants={fadeUp}
                  className="font-medium text-sm uppercase flex md:flex-row flex-col items-center"
                >
                  <p className="md:w-1/4 w-full text-title_color">
                    JavaScript{" "}
                  </p>
                  <div className="md:w-3/4 w-full">
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div
                        className="bg-bs_secondary text-xs font-medium text-title_color text-center p-0.5 leading-none rounded-full"
                        style={{ width: "90%" }}
                      >
                        {" "}
                        80%
                      </div>
                    </div>
                  </div>
                </motion.li>
              </ul>
              <ul className="flex flex-col md:space-y-4 md:w-1/2 w-full">
                <motion.li
                  variants={fadeUp}
                  className="font-medium text-sm uppercase flex md:flex-row flex-col items-center"
                >
                  <p className="md:w-1/4 w-full text-title_color">Database </p>
                  <div className="md:w-3/4 w-full">
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div
                        className="bg-bs_secondary text-xs font-medium text-title_color text-center p-0.5 leading-none rounded-full"
                        style={{ width: "92%" }}
                      >
                        {" "}
                        92%
                      </div>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  variants={fadeUp}
                  className="font-medium text-sm uppercase flex md:flex-row flex-col items-center"
                >
                  <p className="md:w-1/4 w-full text-title_color">ReactJs</p>
                  <div className="md:w-3/4 w-full">
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div
                        className="bg-bs_secondary text-xs font-medium text-title_color text-center p-0.5 leading-none rounded-full"
                        style={{ width: "90%" }}
                      >
                        {" "}
                        80%
                      </div>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  variants={fadeUp}
                  className="font-medium text-sm uppercase flex md:flex-row flex-col items-center"
                >
                  <p className="md:w-1/4 w-full text-title_color">NextJs</p>
                  <div className="md:w-3/4 w-full">
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div
                        className="bg-bs_secondary text-xs font-medium text-title_color text-center p-0.5 leading-none rounded-full"
                        style={{ width: "90%" }}
                      >
                        {" "}
                        90%
                      </div>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  variants={fadeUp}
                  className="font-medium text-sm uppercase flex md:flex-row flex-col items-center"
                >
                  <p className="md:w-1/4 w-full text-title_color">Tailwind </p>
                  <div className="md:w-3/4 w-full">
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div
                        className="bg-bs_secondary text-xs font-medium text-title_color text-center p-0.5 leading-none rounded-full"
                        style={{ width: "96%" }}
                      >
                        {" "}
                        96%
                      </div>
                    </div>
                  </div>
                </motion.li>
              </ul>
            </div>
          </div>
          <motion.div
            variants={fadeUp}
            className="p-8 shadow-xl md:w-1/4 w-full"
          >
            <h5 className="text-xl font-bold tracking-tighter text-title_color mb-3">
              Languages
            </h5>
            <ul className="flex flex-col">
              <li className="font-medium text-sm uppercase flex items-center space-x-5 text-title_color">
                <span>ENGLISH </span>
              </li>
              <li className="font-medium text-sm uppercase flex items-center space-x-5 text-title_color">
                <span>URDU </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <CV_fixNav />
    </>
  );
}
