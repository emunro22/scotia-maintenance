import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { canonical, site } from '@/lib/site';

const title = 'Privacy Policy | Scotia Maintenance';
const description =
  'How Scotia Maintenance collects, uses and stores information from website enquiries and customers, and your rights under UK data protection law.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonical('/privacy-policy') },
  openGraph: {
    title,
    description,
    url: canonical('/privacy-policy'),
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: 'Scotia Maintenance' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [site.ogImage] },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Privacy policy', href: '/privacy-policy' },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: canonical(c.href) })))} />

      <div className="container-page pt-6">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="container-page py-8 lg:py-12">
        <h1 className="max-w-3xl text-[2.2rem] leading-[1.1] sm:text-[3rem]">Privacy policy</h1>
        <p className="mt-4 text-sm text-ink/60">Last updated: 1 September 2026</p>
      </section>

      <section className="container-page pb-16">
        <div className="copy max-w-prose">
          <p>
            This policy explains what Scotia Maintenance does with personal information collected
            through this website and in the course of providing landscaping and garden
            maintenance services. It is written to reflect the UK GDPR and the Data Protection
            Act 2018.
          </p>

          <h2 className="mt-12 text-2xl">Who is responsible for your information</h2>
          <p className="mt-4">
            Scotia Maintenance is the data controller for information collected through this
            website. Scotia Maintenance operates as a service-area business covering Glasgow and
            the surrounding towns and can be contacted by phone on{' '}
            <a href={site.phoneHref}>{site.phone}</a> or by email at{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2 className="mt-12 text-2xl">What information is collected</h2>
          <p className="mt-4">
            When you submit the enquiry form on this website, the following is collected: your
            name, your phone number, your email address, any message you write, and a short
            reference identifying which page the enquiry was sent from. That page reference is
            used only to understand which parts of the site generate enquiries.
          </p>
          <p>
            If you call or email instead, Scotia Maintenance holds whatever details you provide
            in that conversation, typically your name, contact number and the address of the
            property the work relates to.
          </p>
          <p>
            The website does not use advertising or analytics cookies. No account is created and
            no marketing profile is built.
          </p>

          <h2 className="mt-12 text-2xl">Why it is used, and the lawful basis</h2>
          <p className="mt-4">
            Enquiry details are used to respond to you, arrange a visit, provide a quote and
            carry out any work you go on to book. The lawful basis is legitimate interests,
            namely responding to a request you have made, and, once work is agreed, performance
            of a contract with you.
          </p>
          <p>
            Records relating to completed work may also be kept where necessary to comply with
            legal obligations, such as tax and accounting requirements.
          </p>
          <p>
            Your details are not used to send marketing unless you have asked to receive it, and
            they are never sold, rented or passed to third parties for their own marketing.
          </p>

          <h2 className="mt-12 text-2xl">Who processes your information</h2>
          <p className="mt-4">
            A small number of service providers handle data on behalf of Scotia Maintenance so
            the website and email can function:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              <strong>Resend</strong>: delivers enquiry form submissions to the Scotia
              Maintenance email inbox.
            </li>
            <li>
              <strong>Vercel</strong>: hosts this website and processes standard server request
              information such as IP addresses for security and reliability purposes.
            </li>
            <li>
              <strong>Google</strong>: the maps shown on area pages are embedded from Google
              Maps, so loading those pages involves a connection to Google&rsquo;s servers, which
              is subject to Google&rsquo;s own privacy policy.
            </li>
            <li>
              <strong>Email provider</strong>: enquiries are received and stored in a standard
              email inbox.
            </li>
          </ul>
          <p>
            Some of these providers operate outside the UK. Where information is transferred
            internationally, it is done under the safeguards those providers have in place, such
            as standard contractual clauses.
          </p>

          <h2 className="mt-12 text-2xl">How long information is kept</h2>
          <p className="mt-4">
            Enquiries that do not lead to work are kept only as long as is useful for following
            up, and are then deleted. Where work is carried out, contact and job records are kept
            for as long as needed to manage the work and to meet legal and tax obligations,
            typically six years.
          </p>

          <h2 className="mt-12 text-2xl">Security</h2>
          <p className="mt-4">
            This website is served over an encrypted HTTPS connection, and enquiry data is
            transmitted to the email inbox over encrypted connections. Access to enquiries is
            limited to Scotia Maintenance. No system can be guaranteed completely secure, but
            information is handled with reasonable care and is not stored in any public database
            or shared workspace.
          </p>

          <h2 className="mt-12 text-2xl">Your rights</h2>
          <p className="mt-4">
            Under UK data protection law you have the right to ask for a copy of the personal
            information held about you, to have inaccurate information corrected, to ask for
            information to be deleted, to object to or restrict how it is used, and to withdraw
            consent where consent is the basis for using it.
          </p>
          <p>
            To exercise any of these rights, contact Scotia Maintenance on{' '}
            <a href={site.phoneHref}>{site.phone}</a> or at{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>. Requests are responded to within
            one month.
          </p>
          <p>
            If you are unhappy with how your information has been handled, you can complain to
            the Information Commissioner&rsquo;s Office, the UK supervisory authority for data
            protection, at ico.org.uk.
          </p>

          <h2 className="mt-12 text-2xl">Children</h2>
          <p className="mt-4">
            This website is intended for adults arranging work at a property. Information is not
            knowingly collected from children.
          </p>

          <h2 className="mt-12 text-2xl">Changes to this policy</h2>
          <p className="mt-4">
            This policy may be updated if the way the website or the business handles information
            changes. The date at the top of the page shows when it was last revised.
          </p>

          <p className="mt-10">
            Questions about this policy can go to{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>, or see the{' '}
            <Link href="/contact">contact page</Link> for all the ways to get in touch.
          </p>
        </div>
      </section>
    </>
  );
}
