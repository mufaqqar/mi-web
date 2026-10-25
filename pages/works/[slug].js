import Image from "next/image";
import Link from "next/link";
import InnerPages_Banner from "../../components/innerPages-banner";
import { Categories } from "../../const/works";
import PageHead from "../../components/pagesmeta";
import { breadcrumbSchema, SITE_URL } from "../../const/schema";

const allWorks = Categories.flatMap((category) =>
  category.works.map((work) => ({ ...work, category: category.category }))
);

export async function getStaticPaths() {
  return {
    paths: allWorks.map((work) => ({ params: { slug: work.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const work = allWorks.find((item) => item.slug === params.slug) || null;

  return { props: { work } };
}

export default function Work({ work }) {
  if (!work) {
    return (
      <section className="md:py-[12.5rem] py-20">
        <div className="container mx-auto px-4">
          <p className="md:text-2xl text-base text-title_color mb-9 text-center">
            This page could not be found.
          </p>
        </div>
      </section>
    );
  }

  const stack = (work.features.length > 1
    ? work.features.slice(1, 3)
    : work.features
  ).map((feature) => feature.name.replace(/,\s*$/, ""));

  const description = `${work.title} case study: how Mufaqar Islam built this ${work.category.toLowerCase()} project with ${stack.join(
    " and "
  )}. View the build.`;

  const workSchema = [
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Work", url: "/works" },
      { name: work.title, url: `/works/${work.slug}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: work.title,
      headline: `${work.title} case study`,
      description,
      url: `${SITE_URL}/works/${work.slug}`,
      image: {
        "@type": "ImageObject",
        contentUrl: `${SITE_URL}${work.feature}`,
        caption: `${work.title} — ${work.category} project by Mufaqar Islam`,
        width: 1920,
        height: 768,
      },
      screenshot: `${SITE_URL}${work.feature}`,
      creator: { "@id": `${SITE_URL}/#person` },
      author: { "@id": `${SITE_URL}/#person` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      about: work.features.map((feature) => feature.name.replace(/,\s*$/, "")),
      genre: work.category,
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      dateModified: "2026-10-25",
    },
  ];

  return (
    <>
      <PageHead
        title={`${work.title} Case Study | ${work.category} Project`}
        description={description}
        url={`https://www.mufaqar.com/works/${work.slug}`}
        schema={workSchema}
      />
      <InnerPages_Banner
        subtitle="A live project designed, built and maintained by Mufaqar Islam."
        title={work.title}
      />
      <section className="bg-white md:py-[5rem] py-12">
        <div className="container max-w-[860px] mx-auto px-4">
          <h2 className="md:text-4xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-6">
            Project snapshot
          </h2>
          <p className="text-base md:text-lg font-normal text-title_color mb-6">
            {work.title} is a {work.category.toLowerCase()} project built and
            maintained by Mufaqar Islam using {stack.join(" and ")}. The live
            site is online and the features below are in production use.
          </p>
          <table className="w-full border-collapse text-left mb-6">
            <caption className="sr-only">
              {work.title} project details
            </caption>
            <tbody>
              <tr>
                <th
                  scope="row"
                  className="py-3 pr-6 align-top text-base font-semibold text-title_color border-b border-gray-200"
                >
                  Project
                </th>
                <td className="py-3 text-base font-normal text-title_color border-b border-gray-200">
                  {work.title}
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="py-3 pr-6 align-top text-base font-semibold text-title_color border-b border-gray-200"
                >
                  Category
                </th>
                <td className="py-3 text-base font-normal text-title_color border-b border-gray-200">
                  {work.category}
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="py-3 pr-6 align-top text-base font-semibold text-title_color border-b border-gray-200"
                >
                  Stack
                </th>
                <td className="py-3 text-base font-normal text-title_color border-b border-gray-200">
                  {stack.join(", ")}
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="py-3 pr-6 align-top text-base font-semibold text-title_color border-b border-gray-200"
                >
                  Status
                </th>
                <td className="py-3 text-base font-normal text-title_color border-b border-gray-200">
                  Live
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="py-3 pr-6 align-top text-base font-semibold text-title_color"
                >
                  Developer
                </th>
                <td className="py-3 text-base font-normal text-title_color">
                  <Link
                    href="/about"
                    className="underline hover:decoration-bs_btn_bg transition-all duration-300"
                  >
                    Mufaqar Islam
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm font-normal text-title_color">
            Last updated:{" "}
            <time dateTime="2026-10-25">October 25, 2026</time>
          </p>
        </div>
      </section>
      <section className="bg-bs_secondary md:py-[12.5rem] py-20 relative">
        <div className="container px-4 mx-auto">
          <Image
            src={work.feature}
            alt={`${work.title} project by Mufaqar Islam`}
            width={1920}
            height={768}
            sizes="(max-width: 768px) 100vw, 1100px"
            className="mx-auto w-full"
          />
        </div>
      </section>
      <section className="bg-bs_info md:py-[12.5rem] py-20 relative">
        <div className="container px-4 mx-auto flex md:flex-row flex-col items-center">
          <div className="md:w-1/2 w-full md:p-7 p-4">
            <h2 className="md:text-5xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-12 max-w-[340px]">
              The Challenge
            </h2>
            <p className="md:text-2xl text-base text-title_color mb-9">
              As a web developer, the task is to modernize {work.title}&apos;s
              web platform. The primary objectives include enhancing user
              experience, ensuring mobile responsiveness, optimizing
              performance, improving security and implementing SEO.
            </p>
            <p className="md:text-2xl text-base text-title_color mb-9">
              The build also covers scalability, a user-friendly content
              management system, third-party integrations and thorough testing
              before launch.
            </p>
            <div className="mb-8">
              <p className="md:text-2xl text-base text-title_color mb-9 font-bold">
                VISIT
              </p>
              <Link
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300 break-words">
                  {work.link}
                </span>
              </Link>
            </div>
            <div>
              <p className="md:text-2xl text-base text-title_color mb-9 font-bold">
                SERVICES
              </p>
              <ul>
                {work.features.map((item, id) => (
                  <li key={id}>
                    <Link href="/services">
                      <span className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300">
                        {item?.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            {work.gallery.slice(1, 2).map((item, id) => (
              <Image
                key={id}
                src={item?.img}
                alt={`${work.title} project screenshot ${id + 2}`}
                width={550}
                height={750}
                sizes="(max-width: 768px) 100vw, 45vw"
                className="md:ml-auto md:mr-0"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-title_color md:py-[12.5rem] py-20 relative">
        <div className="container px-4 mx-auto">
          {work.gallery.slice(0, 1).map((item, id) => (
            <Image
              key={id}
              src={item?.img}
              alt={`${work.title} project homepage screenshot`}
              width={1920}
              height={768}
              sizes="(max-width: 768px) 100vw, 1100px"
              className="mx-auto"
            />
          ))}
        </div>
      </section>
      <section className="bg-bs_secondary md:py-[12.5rem] py-20 relative">
        <div className="container px-4 mx-auto">
          <h2 className="md:text-5xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-12 max-w-[340px]">
            The Solution
          </h2>
          <p className="md:text-2xl text-base text-title_color">
            The project was delivered in phases: planning and design first,
            development second, then testing and quality assurance before the
            launch.
          </p>
          <p className="md:text-2xl text-base text-title_color mb-9">
            After deployment I provided documentation and training for{" "}
            {work.title}&apos;s team so they can manage content and future
            changes without a developer.
          </p>
          <div className="mb-7">
            <ul className="flex flex-col gap-2 list-disc list-inside marker:text-bs_btn_bg marker:!mr-0 mb-9">
              <li>
                <span className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300">
                  User-Centric Design
                </span>
              </li>
              <li>
                <span className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300">
                  Mobile Responsiveness
                </span>
              </li>
              <li>
                <span className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300">
                  Technical SEO
                </span>
              </li>
              <li>
                <span className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300">
                  Performance Optimization
                </span>
              </li>
              <li>
                <span className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300">
                  User-Friendly CMS
                </span>
              </li>
            </ul>
          </div>
          <p className="md:text-2xl text-base text-title_color">
            The codebase and custom functionality are documented so handover and
            future maintenance are straightforward.
          </p>
        </div>
      </section>
      <section className="bg-title_color md:py-[12.5rem] py-20 relative">
        <div className="container px-4 mx-auto">
          <Image
            src={work.feature}
            alt={`${work.title} feature overview`}
            width={1920}
            height={768}
            sizes="(max-width: 768px) 100vw, 1100px"
            className="mx-auto"
          />
        </div>
        <Image
          src="/images/svgs/blocks3.svg"
          alt=""
          aria-hidden="true"
          width={426}
          height={286}
          className="absolute 2xl:right-0 lg:right-[-131px] right-0 lg:bottom-[-150px] bottom-[-75px] md:w-auto w-1/2 z-10"
        />
      </section>
      <section className="bg-bs_info md:py-[12.5rem] py-20 relative">
        <div className="container px-4 mx-auto grid md:grid-cols-3 grid-cols-1 gap-5">
          {work.gallery.slice(1).map((item, id) => (
            <Image
              key={id}
              src={item?.img}
              alt={`${work.title} project screenshot ${id + 2}`}
              width={550}
              height={750}
              sizes="(max-width: 768px) 100vw, 30vw"
              className="mx-auto"
            />
          ))}
        </div>
      </section>
    </>
  );
}
