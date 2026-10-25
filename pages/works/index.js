import React, { useState } from 'react';
import Workbox from '../../components/newComponents/workbox';
import Testimonial from '../../components/newComponents/testimonial';
import CTA from '../../components/newComponents/cta';
import { Categories } from '../../const/works.jsx'
import InnerPages_Banner from '../../components/innerPages-banner.js';
import PageHead from '../../components/pagesmeta';
import { breadcrumbSchema, SITE_URL } from '../../const/schema';

export default function Works() {
  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Combine all works into a single array for displaying when "All work" is selected
  const allWorks = Categories.flatMap((category) =>
    category.works.map((work) => ({ ...work, categoryId: category.id, category: category.category, }))
  );

  const worksSchema = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Work', url: '/works' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Portfolio of Mufaqar Islam',
      itemListElement: allWorks.map((work, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: work.title,
        url: `${SITE_URL}/works/${work.slug}`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/works#webpage`,
      url: `${SITE_URL}/works`,
      name: 'Portfolio | WordPress, React & Next.js Projects',
      description:
        'Live case studies covering POS platforms, e-commerce stores and education web apps built by Mufaqar Islam.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#person` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      dateModified: '2026-10-25',
      inLanguage: 'en-US',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '#works-answer'],
      },
    },
  ];

  // Find works of the selected category
  const selectedWorks =
    selectedCategory !== 'All'
      ? Categories.find((category) => category.category === selectedCategory)?.works.map((work) => ({
        ...work,
        categoryId: Categories.find((cat) => cat.category === selectedCategory)?.id,
        category: Categories.find((cat) => cat.category === selectedCategory)?.category,
      })) || []
      : [];

  return (
    <main className='overflow-x-hidden'>
      <PageHead
        title="Portfolio | WordPress, React & Next.js Projects"
        description="Live case studies: POS platforms, e-commerce stores and Next.js web apps built and maintained by Mufaqar Islam. See the stack, scope and results."
        url="https://www.mufaqar.com/works"
        schema={worksSchema}
      />
      <InnerPages_Banner
        title="Work"
        subtitle="The majority of my work comes from word of mouth, repeat clients, and referrals. Here’s a selection of projects I’m especially proud of."
      />
      <section className="bg-white md:py-[5rem] py-12">
        <div className="container max-w-[860px] mx-auto px-4">
          <h2 className="md:text-4xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-6">
            Case studies from live projects
          </h2>
          <p
            id="works-answer"
            className="text-base md:text-lg font-normal text-title_color mb-4"
          >
            This portfolio collects six live projects built and maintained by
            Mufaqar Islam: a Next.js POS platform, WordPress commercial and
            e-commerce sites, a Chrome extension for e-commerce, and two
            education platforms. Each case study lists the stack, the scope and
            the features delivered.
          </p>
          <p className="text-base md:text-lg font-normal text-title_color mb-4">
            Projects are grouped by sector — commercial, e-commerce, education
            and others — so you can compare work that matches your brief. Most
            of this work comes from repeat clients and referrals, and several
            sites are still supported on maintenance plans today.
          </p>
          <p className="text-sm font-normal text-title_color">
            Last updated:{' '}
            <time dateTime="2026-10-25">October 25, 2026</time>
          </p>
        </div>
      </section>
      <section className="bg-bs_info md:py-[12.5rem] py-20 relative">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap md:gap-8 gap-3 justify-center mb-10">
            {/* Filter buttons */}
            <li
              className={`text-lg font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300 cursor-pointer ${selectedCategory === 'All' && 'font-bold decoration-bs_link_color'
                }`}
              onClick={() => setSelectedCategory('All')}
            >
              All work
            </li>
            {Categories.map((item) => (
              <li
                key={item.id}
                className={`text-lg font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300 cursor-pointer ${selectedCategory === item.category && 'font-bold decoration-bs_link_color'
                  }`}
                onClick={() => setSelectedCategory(item.category)}>
                {item.category}
              </li>
            ))}
          </ul>

          <div className="">
            {/* Display All Works when "All work" is selected */}
            {selectedCategory === 'All' && (
              <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-start">
                {allWorks.map((work, idx) => (
                  <Workbox
                    key={idx}
                    data={work}
                    cstm_class={`${work.categoryId === 1
                      ? 'bg-bs_secondary'
                      : work.categoryId === 2
                        ? 'bg-bs_link_color'
                        : 'bg-bs_btn_bg'
                      }`}
                  />
                ))}
              </div>
            )}

            {/* Display Selected Category Works */}
            {selectedCategory !== 'All' && (
              <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-start">
                {selectedWorks.map((work, idx) => (
                  <Workbox
                    key={idx}
                    data={work}
                    cstm_class={`${work.categoryId === 1
                      ? 'bg-bs_secondary'
                      : work.categoryId === 2
                        ? 'bg-bs_link_color'
                        : 'bg-bs_btn_bg'
                      }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <Testimonial />
      <CTA />
    </main>
  );
}

