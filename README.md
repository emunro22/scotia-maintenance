# Scotia Maintenance

Marketing website for Scotia Maintenance — landscaping and garden maintenance across Glasgow
and the surrounding towns.

Built with Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion, with contact form
delivery through Resend. Deploys to Vercel with no extra configuration.

---

## Running locally

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY
npm run dev
```

Open http://localhost:3000

Other scripts:

```bash
npm run build       # production build
npm run start       # serve the production build
npm run typecheck   # tsc --noEmit
```

## Environment variables

| Variable               | Required | Notes                                                        |
| ---------------------- | -------- | ------------------------------------------------------------ |
| `RESEND_API_KEY`       | Yes      | From https://resend.com/api-keys. Without it the form returns a clear error and tells the visitor to phone instead. |
| `CONTACT_TO_EMAIL`     | No       | Defaults to `scottyboi1981@gmail.com`.                        |
| `CONTACT_FROM_EMAIL`   | No       | Must be an address on a domain verified in Resend. Falls back to `onboarding@resend.dev`, which only delivers to the Resend account owner — set this properly before launch. |
| `NEXT_PUBLIC_SITE_URL` | Yes      | `https://scotiamaintenance.co.uk`, no trailing slash. Used for canonicals, Open Graph URLs, sitemap and JSON-LD. |

## Deploying to Vercel

1. Push the repository to GitHub and import it in Vercel. The framework is detected
   automatically — no `vercel.json` is needed, so none is included.
2. Add the environment variables above under Settings → Environment Variables.
3. Add `scotiamaintenance.co.uk` as a custom domain.
4. In Resend, verify the sending domain and set `CONTACT_FROM_EMAIL` to an address on it.
5. Submit `https://scotiamaintenance.co.uk/sitemap.xml` in Google Search Console.

---

## Before launch — action list

**1. Replace the placeholder imagery.** `/public/images/*.jpg` currently holds on-brand generated
illustrations, not photographs. Replace them with real photos of completed work, keeping the same
filenames so no code changes are needed. Before/after shots will do more for enquiries than
anything else on the site. Update the `imageAlt` strings in `lib/areas.ts` and `lib/services.ts`
so the alt text describes the real photo.

**2. Add reviews once they exist.** The homepage reviews section is a deliberate placeholder — no
review content, ratings or counts have been invented, and no `AggregateRating` or `Review` schema
is emitted. Once genuine reviews are collected, add them and the corresponding schema together.

**3. Check the legal pages.** `/privacy-policy` and `/terms` are written specifically for this
business and this stack, but they are a starting point, not legal advice. Review them and add ICO
registration details if the business registers.

**4. Claims deliberately not made.** Nothing on the site asserts years trading, insurance,
qualifications, accreditations, family-run status, employee numbers, awards or past projects in
specific areas, because none of that was supplied. If any of it is confirmed later, the natural
places to add it are `app/about/page.tsx` and the "Why choose" block in `app/page.tsx`.

---

## Content structure

Nearly all the copy lives in two data files, so pages can be edited without touching layout code:

- `lib/areas.ts` — the 20 service areas. Each has its own intro, three or four body paragraphs,
  landmarks, travel note, related services, nearby areas and three to four local FAQs. Content is
  written per town — garden types, ground conditions and local geography differ on every page.
- `lib/services.ts` — the six services, each with intro, body copy, benefits, expectations and FAQs.
- `lib/site.ts` — business details, phone, email, hours, canonical URL helper.
- `lib/schema.ts` — JSON-LD builders.

**Adding an area:** add an entry to `lib/areas.ts`. The page, sitemap entry, footer link,
coverage band entry and schema all follow automatically.

**Adding a service:** add an entry to `lib/services.ts`. Same — everything else picks it up.

## SEO implementation

- `<html lang="en-GB">`, unique title, meta description and self-referencing canonical on every page.
- Open Graph and Twitter card metadata sitewide, with a generated OG image.
- `HomeAndConstructionBusiness` schema sitewide. No address or lat/long is asserted, because
  Scotia Maintenance is a service-area business and none was supplied.
- `Service` + `BreadcrumbList` + `FAQPage` schema on service pages.
- `BreadcrumbList` + area-scoped business info + `FAQPage` on every area page. FAQ answers lead
  with a direct first sentence so they work as answer-engine snippets.
- `app/sitemap.ts` generates 33 URLs: 7 static pages, 6 services, 20 areas. `/thank-you` is
  excluded and set to `noindex` — it has no search value.
- `public/robots.txt` and `public/llms.txt`.
- `not-found.tsx` returns a genuine HTTP 404 with no canonical and no redirect to the homepage.

## Contact form

`components/ContactForm.tsx` → `POST /api/contact` → Resend → `/thank-you`.

- Required name, phone and email with client-side and server-side validation, accessible labels,
  `aria-invalid` and linked error messages.
- Hidden `source` field identifying the originating page: `homepage`, `area-paisley`,
  `service-landscaping`, `contact-page`, `areas-hub`, `services-hub`.
- Spam handling: hidden honeypot field, a submission-timing check, and a per-IP rate limit.
  Honeypot hits return success without sending, so bots get no signal.
- Failures show a real error with the phone number rather than failing silently.

## Assets

`tools/generate-assets.py` regenerates the favicon, apple-touch icon, PWA icons, OG image and
placeholder imagery from the source logo. It is a build-time convenience, not part of the app —
it does not need to run on deploy.

The logo files in `/public` were extracted from the supplied JPEG with the white background
removed. The site palette is taken directly from the logo: navy `#0E2A52`, mid blue `#1B6FB2`,
cyan `#29A6C9`, with a muted moss green used sparingly.

## Accessibility

Skip link, visible focus rings, semantic landmarks and headings, labelled form controls, keyboard
accessible navigation and FAQ disclosures, descriptive alt text on every image, and
`prefers-reduced-motion` respected — all Framer Motion animation is disabled when it is set.
