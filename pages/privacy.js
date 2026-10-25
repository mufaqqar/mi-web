import InnerPages_Banner from '../components/innerPages-banner';
import PageHead from '../components/pagesmeta';
import { breadcrumbSchema, SITE_URL } from '../const/schema';

const privacySchema = [
  breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/privacy#webpage`,
    url: `${SITE_URL}/privacy`,
    name: 'Privacy Policy | Mufaqar Islam',
    description:
      'How Mufaqar Islam collects, uses and protects personal information submitted through mufaqar.com.',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#person` },
    dateModified: '2026-10-25',
    inLanguage: 'en-US',
  },
];

export default function Privacy() {
  return (
    <main className="overflow-x-hidden">
      <PageHead
        title="Privacy Policy | Mufaqar Islam"
        description="How Mufaqar Islam collects, uses and protects personal information submitted through mufaqar.com."
        url="https://www.mufaqar.com/privacy"
        schema={privacySchema}
      />
      <InnerPages_Banner
        title="PRIVACY POLICY"
        subtitle="How your information is handled on mufaqar.com."
      />
      <section className="bg-white md:py-[7.5rem] py-16">
        <div className="container max-w-[860px] mx-auto px-4 text-base md:text-lg font-normal text-title_color flex flex-col gap-6">
          <p>
            This policy explains what information mufaqar.com collects, why it
            is collected and how it is used. The site is operated by Mufaqar
            Islam, a full stack web developer based in Lahore, Pakistan.
          </p>

          <h2 className="text-2xl font-semibold">Information collected</h2>
          <p>
            When you use the contact form, the site collects the name, email
            address, project details and message you submit. If you email or
            call directly, the contact details and message you send are stored so
            the enquiry can be answered.
          </p>

          <h2 className="text-2xl font-semibold">How information is used</h2>
          <p>
            Information is used only to reply to enquiries, prepare quotes and
            deliver agreed work. It is not sold, rented or shared for
            advertising.
          </p>

          <h2 className="text-2xl font-semibold">Cookies and analytics</h2>
          <p>
            The site does not set advertising or tracking cookies. The hosting
            provider may process technical data such as IP addresses and page
            requests to deliver the site and protect it from abuse.
          </p>

          <h2 className="text-2xl font-semibold">Service providers</h2>
          <p>
            Email delivery and hosting providers process data on behalf of the
            site so enquiries can be received and answered. These providers are
            bound by their own privacy and security terms.
          </p>

          <h2 className="text-2xl font-semibold">Retention</h2>
          <p>
            Enquiry data is kept only as long as needed to answer the enquiry or
            deliver a project. Project and accounting records may be kept longer
            where required by law.
          </p>

          <h2 className="text-2xl font-semibold">Your rights</h2>
          <p>
            You can request access to, correction of, or deletion of the
            information you submitted by emailing{' '}
            <a
              href="mailto:info@mufaqar.com"
              className="underline hover:decoration-bs_btn_bg transition-all duration-300"
            >
              info@mufaqar.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold">External links</h2>
          <p>
            Pages on this site link to external websites. Those websites have
            their own privacy policies and this policy does not cover them.
          </p>

          <h2 className="text-2xl font-semibold">Changes</h2>
          <p>
            This policy may be updated when the site or its tools change. The
            date below shows the latest revision.
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
