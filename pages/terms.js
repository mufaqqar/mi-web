import InnerPages_Banner from '../components/innerPages-banner';
import PageHead from '../components/pagesmeta';
import { breadcrumbSchema, SITE_URL } from '../const/schema';

const termsSchema = [
  breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Terms of Service', url: '/terms' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/terms#webpage`,
    url: `${SITE_URL}/terms`,
    name: 'Terms of Service | Mufaqar Islam',
    description:
      'Terms for web development projects and maintenance work provided by Mufaqar Islam.',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#professional-service` },
    dateModified: '2026-10-25',
    inLanguage: 'en-US',
  },
];

export default function Terms() {
  return (
    <main className="overflow-x-hidden">
      <PageHead
        title="Terms of Service | Mufaqar Islam"
        description="Terms for web development projects and maintenance work provided by Mufaqar Islam."
        url="https://www.mufaqar.com/terms"
        schema={termsSchema}
      />
      <InnerPages_Banner
        title="TERMS OF SERVICE"
        subtitle="The terms that apply to project and maintenance work."
      />
      <section className="bg-white md:py-[7.5rem] py-16">
        <div className="container max-w-[860px] mx-auto px-4 text-base md:text-lg font-normal text-title_color flex flex-col gap-6">
          <p>
            These terms apply to web development, maintenance and consulting
            work provided by Mufaqar Islam. A written quote or proposal can add
            project-specific terms, which take precedence over this page.
          </p>

          <h2 className="text-2xl font-semibold">Scope of work</h2>
          <p>
            Each project is defined by a written scope covering pages, features,
            integrations, timeline and price. Work outside that scope is quoted
            separately before it starts.
          </p>

          <h2 className="text-2xl font-semibold">Quotes and payment</h2>
          <p>
            Quotes are fixed for the agreed scope and valid for 30 days unless
            stated otherwise. Projects normally start with a deposit, with the
            balance due on delivery. Maintenance work is billed monthly in
            advance. Payments are made in the currency and through the method
            shown on the invoice.
          </p>

          <h2 className="text-2xl font-semibold">Client responsibilities</h2>
          <p>
            The client provides content, brand assets, hosting or account access
            and timely feedback. Delays in feedback or assets can move the
            delivery date.
          </p>

          <h2 className="text-2xl font-semibold">Revisions</h2>
          <p>
            Two rounds of revisions are included at the design and build stages
            unless the quote says otherwise. Additional changes are treated as
            new work and quoted separately.
          </p>

          <h2 className="text-2xl font-semibold">Intellectual property</h2>
          <p>
            On full payment the client owns the final deliverables created for
            the project. Mufaqar Islam keeps the right to show the work in a
            portfolio and case studies. Third-party software, fonts and assets
            remain under their own licences.
          </p>

          <h2 className="text-2xl font-semibold">Support and warranty</h2>
          <p>
            Bugs in delivered work are fixed free of charge for 30 days after
            launch. New features, content changes and issues caused by third
            parties or client edits are not covered by this warranty.
          </p>

          <h2 className="text-2xl font-semibold">Liability</h2>
          <p>
            Liability for any claim is limited to the fees paid for the work
            concerned. Mufaqar Islam is not liable for indirect or consequential
            losses, including lost revenue or data, except where the law does not
            allow this limit.
          </p>

          <h2 className="text-2xl font-semibold">Governing law</h2>
          <p>
            These terms are governed by the laws of Pakistan, and disputes are
            subject to the courts of Lahore.
          </p>

          <h2 className="text-2xl font-semibold">Contact</h2>
          <p>
            Questions about these terms can be sent to{' '}
            <a
              href="mailto:info@mufaqar.com"
              className="underline hover:decoration-bs_btn_bg transition-all duration-300"
            >
              info@mufaqar.com
            </a>
            .
          </p>

          <p className="text-sm">
            Last updated:{' '}
            <time dateTime="2026-10-25">October 25, 2026</time>
          </p>
        </div>
      </section>
    </main>
  );
}
