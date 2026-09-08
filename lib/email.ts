import { site } from './site';

/**
 * Branded HTML email templates.
 *
 * Email clients strip modern CSS and ignore layout primitives, so these are
 * table-based with inline styles. Colours and type mirror the site: navy and
 * cyan from tailwind.config.ts, Archivo for headings and IBM Plex Sans for body
 * copy. Web fonts load in the clients that support them (Apple Mail, iOS Mail)
 * and fall back to the same stacks the site uses everywhere else.
 */

const brand = {
  navy: '#0e2a52',
  navyDeep: '#0a1e3c',
  blue: '#1b6fb2',
  cyan: '#29a6c9',
  cyanLight: '#5fc3de',
  mist: '#f4f6f8',
  stone: '#e4e9ef',
  ink: '#14181d',
  muted: '#5b6470',
  white: '#ffffff',
} as const;

const displayFont = "'Archivo','Helvetica Neue',Helvetica,Arial,sans-serif";
const bodyFont =
  "'IBM Plex Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

/** Absolute base for images: email clients cannot resolve relative paths. */
const assetBase = site.url;
const displayDomain = assetBase.replace(/^https?:\/\//, '');

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Keeps the line breaks a customer typed, without letting any markup through. */
function escapeMultiline(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, '<br />');
}

function formatTimestamp(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/London',
  }).format(date);
}

/** A pill button built from a table, the only shape that survives Outlook. */
function button(label: string, href: string, background: string): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" bgcolor="${background}" style="border-radius:10px">
          <a href="${href}" style="display:inline-block;padding:14px 26px;font-family:${bodyFont};font-size:15px;font-weight:600;line-height:1;color:${brand.white};text-decoration:none;border-radius:10px">${label}</a>
        </td>
      </tr>
    </table>`;
}

/** One label/value pair inside a details panel. */
function detailRow(label: string, valueHtml: string, isLast = false): string {
  const border = isLast ? '' : `border-bottom:1px solid ${brand.stone};`;
  return `
    <tr>
      <td style="padding:13px 0;${border}font-family:${bodyFont};font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${brand.muted};white-space:nowrap;vertical-align:top;width:80px">${label}</td>
      <td style="padding:13px 0 13px 16px;${border}font-family:${bodyFont};font-size:16px;line-height:1.6;color:${brand.ink};vertical-align:top">${valueHtml}</td>
    </tr>`;
}

type LayoutOptions = {
  /** Inbox preview line, hidden inside the message itself. */
  preheader: string;
  eyebrow: string;
  heading: string;
  /** Already-escaped HTML for the body of the card. */
  content: string;
};

function layout({ preheader, eyebrow, heading, content }: LayoutOptions): string {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="x-apple-disable-message-reformatting" />
<meta name="color-scheme" content="light" />
<meta name="supported-color-schemes" content="light" />
<title>${escapeHtml(heading)}</title>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700&amp;family=IBM+Plex+Sans:wght@400;500;600&amp;display=swap" rel="stylesheet" />
<style>
  body { margin:0; padding:0; width:100% !important; background-color:${brand.mist}; }
  table { border-collapse:collapse; }
  img { border:0; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; }
  @media only screen and (max-width:620px) {
    .sm-px { padding-left:24px !important; padding-right:24px !important; }
    .sm-py { padding-top:30px !important; padding-bottom:30px !important; }
    .sm-h1 { font-size:26px !important; }
    .sm-block { display:block !important; width:100% !important; padding:0 0 12px 0 !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background-color:${brand.mist}">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all">${escapeHtml(preheader)}</div>
<div style="display:none;max-height:0;overflow:hidden">&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;</div>

<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${brand.mist}">
  <tr>
    <td align="center" style="padding:32px 16px">

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px;max-width:600px;background-color:${brand.white};border-radius:14px;overflow:hidden">

        <tr>
          <td bgcolor="${brand.navy}" class="sm-px" style="background-color:${brand.navy};padding:30px 40px">
            <a href="${assetBase}" style="text-decoration:none">
              <img src="${assetBase}/scotia-maintenance-logo-white.png" width="196" alt="${escapeHtml(site.name)}" style="display:block;width:196px;max-width:196px;height:auto" />
            </a>
          </td>
        </tr>

        <tr>
          <td style="font-size:0;line-height:0">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td bgcolor="${brand.blue}" width="40%" height="4" style="height:4px;font-size:0;line-height:0">&nbsp;</td>
                <td bgcolor="${brand.cyan}" width="35%" height="4" style="height:4px;font-size:0;line-height:0">&nbsp;</td>
                <td bgcolor="${brand.cyanLight}" width="25%" height="4" style="height:4px;font-size:0;line-height:0">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td class="sm-px sm-py" style="padding:40px">
            <p style="margin:0 0 10px;font-family:${bodyFont};font-size:12px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:${brand.cyan}">${escapeHtml(eyebrow)}</p>
            <h1 class="sm-h1" style="margin:0 0 22px;font-family:${displayFont};font-size:30px;line-height:1.15;letter-spacing:-0.021em;font-weight:700;color:${brand.navy}">${escapeHtml(heading)}</h1>
            ${content}
          </td>
        </tr>

        <tr>
          <td bgcolor="${brand.navyDeep}" class="sm-px" style="background-color:${brand.navyDeep};padding:32px 40px">
            <p style="margin:0 0 6px;font-family:${displayFont};font-size:17px;font-weight:700;color:${brand.white}">${escapeHtml(site.name)}</p>
            <p style="margin:0 0 18px;font-family:${bodyFont};font-size:14px;line-height:1.6;color:#aebbcd">
              Landscaping and garden maintenance across Glasgow, Renfrewshire,<br />West Dunbartonshire and East Renfrewshire.
            </p>
            <p style="margin:0;font-family:${bodyFont};font-size:14px;line-height:1.9;color:#aebbcd">
              <a href="${site.phoneHref}" style="color:${brand.cyanLight};text-decoration:none;font-weight:600">${escapeHtml(site.phone)}</a>
              &nbsp;&#183;&nbsp;
              <a href="${assetBase}" style="color:${brand.cyanLight};text-decoration:none;font-weight:600">${escapeHtml(displayDomain)}</a>
              <br />${escapeHtml(site.openingHours)}
            </p>
          </td>
        </tr>
      </table>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px;max-width:600px">
        <tr>
          <td style="padding:20px 8px 0;font-family:${bodyFont};font-size:12px;line-height:1.6;color:${brand.muted}">
            &#169; ${new Date().getFullYear()} ${escapeHtml(site.name)}. Sent from the enquiry form at ${escapeHtml(displayDomain)}.
          </td>
        </tr>
      </table>

    </td>
  </tr>
</table>
</body>
</html>`;
}

export type Enquiry = {
  name: string;
  phone: string;
  email: string;
  message: string;
  source: string;
  receivedAt: Date;
};

function firstNameOf(name: string): string {
  return name.trim().split(/\s+/)[0] || name;
}

/* ------------------------------------------------------------------ *
 * Notification to Scotia Maintenance
 * ------------------------------------------------------------------ */

export function ownerNotificationHtml(enquiry: Enquiry): string {
  const { name, phone, email, message, source, receivedAt } = enquiry;
  const telHref = `tel:${phone.replace(/[^0-9+]/g, '')}`;

  const content = `
    <p style="margin:0 0 28px;font-family:${bodyFont};font-size:16px;line-height:1.7;color:${brand.ink}">
      A new enquiry came through the website on ${escapeHtml(formatTimestamp(receivedAt))}. Replying to this email goes straight back to ${escapeHtml(name)}.
    </p>

    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${brand.mist};border:1px solid ${brand.stone};border-radius:12px">
      <tr>
        <td style="padding:6px 24px">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
            ${detailRow('Name', `<strong style="font-weight:600">${escapeHtml(name)}</strong>`)}
            ${detailRow('Phone', `<a href="${escapeHtml(telHref)}" style="color:${brand.blue};text-decoration:none;font-weight:600">${escapeHtml(phone)}</a>`)}
            ${detailRow('Email', `<a href="mailto:${escapeHtml(email)}" style="color:${brand.blue};text-decoration:none;font-weight:600">${escapeHtml(email)}</a>`)}
            ${detailRow('Page', escapeHtml(source), true)}
          </table>
        </td>
      </tr>
    </table>

    <h2 style="margin:34px 0 14px;font-family:${displayFont};font-size:19px;font-weight:700;letter-spacing:-0.015em;color:${brand.navy}">What they need done</h2>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td style="padding:2px 0 2px 18px;border-left:3px solid ${brand.cyan};font-family:${bodyFont};font-size:16px;line-height:1.7;color:${brand.ink}">
          ${message ? escapeMultiline(message) : `<span style="color:${brand.muted};font-style:italic">No message provided.</span>`}
        </td>
      </tr>
    </table>

    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:34px">
      <tr>
        <td class="sm-block" style="padding-right:12px">${button(`Call ${escapeHtml(firstNameOf(name))}`, telHref, brand.cyan)}</td>
        <td class="sm-block">${button('Reply by email', `mailto:${escapeHtml(email)}`, brand.navy)}</td>
      </tr>
    </table>`;

  return layout({
    preheader: `${name} - ${phone}${message ? ` - ${message.slice(0, 90)}` : ''}`,
    eyebrow: 'New website enquiry',
    heading: `${firstNameOf(name)} would like a quote`,
    content,
  });
}

export function ownerNotificationText(enquiry: Enquiry): string {
  const { name, phone, email, message, source, receivedAt } = enquiry;
  return [
    'NEW WEBSITE ENQUIRY',
    formatTimestamp(receivedAt),
    '',
    `Name:   ${name}`,
    `Phone:  ${phone}`,
    `Email:  ${email}`,
    `Page:   ${source}`,
    '',
    'What they need done:',
    message || '(no message provided)',
    '',
    '--',
    `${site.name} - ${site.phone}`,
    assetBase,
  ].join('\n');
}

/* ------------------------------------------------------------------ *
 * Confirmation to the customer
 * ------------------------------------------------------------------ */

const steps = [
  {
    title: 'We read your enquiry',
    body: 'Enquiries are picked up personally, between jobs and at the end of the day.',
  },
  {
    title: 'We get in touch',
    body: 'Usually a quick call or email to understand the garden and arrange a time to come and see it.',
  },
  {
    title: 'You get a free quote',
    body: 'Given after seeing the garden, so the price is the real one, with no obligation to go ahead.',
  },
] as const;

function stepList(): string {
  return steps
    .map(
      (step, index) => `
      <tr>
        <td style="padding:0 16px 0 0;vertical-align:top;width:34px">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td align="center" bgcolor="${brand.navy}" width="34" height="34" style="width:34px;height:34px;border-radius:17px;font-family:${displayFont};font-size:15px;font-weight:700;line-height:34px;color:${brand.white}">${index + 1}</td>
            </tr>
          </table>
        </td>
        <td style="padding:0 0 ${index === steps.length - 1 ? '0' : '22px'};vertical-align:top">
          <p style="margin:0 0 3px;font-family:${displayFont};font-size:16px;font-weight:700;line-height:1.5;color:${brand.navy}">${escapeHtml(step.title)}</p>
          <p style="margin:0;font-family:${bodyFont};font-size:15px;line-height:1.65;color:${brand.muted}">${escapeHtml(step.body)}</p>
        </td>
      </tr>`,
    )
    .join('');
}

export function customerConfirmationHtml(enquiry: Enquiry): string {
  const { name, phone, email, message, receivedAt } = enquiry;
  const firstName = firstNameOf(name);

  const content = `
    <p style="margin:0 0 18px;font-family:${bodyFont};font-size:16px;line-height:1.7;color:${brand.ink}">
      Hi ${escapeHtml(firstName)}, thanks for getting in touch with ${escapeHtml(site.name)}. Your enquiry arrived safely on ${escapeHtml(formatTimestamp(receivedAt))}, and we will come back to you to arrange a visit and a free quote.
    </p>
    <p style="margin:0 0 30px;font-family:${bodyFont};font-size:16px;line-height:1.7;color:${brand.ink}">
      Enquiries are answered during working hours, ${escapeHtml(site.openingHours)}. If it is easier to talk it through, give us a call.
    </p>

    ${button(`Call ${escapeHtml(site.phone)}`, site.phoneHref, brand.cyan)}

    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:36px 0">
      <tr><td height="1" style="height:1px;background-color:${brand.stone};font-size:0;line-height:0">&nbsp;</td></tr>
    </table>

    <h2 style="margin:0 0 20px;font-family:${displayFont};font-size:19px;font-weight:700;letter-spacing:-0.015em;color:${brand.navy}">What happens next</h2>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      ${stepList()}
    </table>

    <h2 style="margin:38px 0 14px;font-family:${displayFont};font-size:19px;font-weight:700;letter-spacing:-0.015em;color:${brand.navy}">What you sent us</h2>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${brand.mist};border:1px solid ${brand.stone};border-radius:12px">
      <tr>
        <td style="padding:6px 24px">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
            ${detailRow('Name', escapeHtml(name))}
            ${detailRow('Phone', escapeHtml(phone))}
            ${detailRow('Email', escapeHtml(email))}
            ${detailRow(
              'Details',
              message
                ? escapeMultiline(message)
                : `<span style="color:${brand.muted};font-style:italic">No further details given.</span>`,
              true,
            )}
          </table>
        </td>
      </tr>
    </table>

    <p style="margin:28px 0 0;font-family:${bodyFont};font-size:14px;line-height:1.65;color:${brand.muted}">
      Something not right there? Reply to this email and we will correct it.
    </p>`;

  return layout({
    preheader: `Thanks ${firstName}, your enquiry has reached ${site.name}. We will be in touch shortly.`,
    eyebrow: 'Enquiry received',
    heading: 'Thanks, we have got your enquiry',
    content,
  });
}

export function customerConfirmationText(enquiry: Enquiry): string {
  const { name, phone, email, message, receivedAt } = enquiry;
  return [
    `Hi ${firstNameOf(name)},`,
    '',
    `Thanks for getting in touch with ${site.name}. Your enquiry arrived safely on ${formatTimestamp(receivedAt)}, and we will come back to you to arrange a visit and a free quote.`,
    '',
    `Enquiries are answered during working hours, ${site.openingHours}. If it is easier to talk it through, call ${site.phone}.`,
    '',
    'WHAT HAPPENS NEXT',
    ...steps.map((step, index) => `${index + 1}. ${step.title} - ${step.body}`),
    '',
    'WHAT YOU SENT US',
    `Name:    ${name}`,
    `Phone:   ${phone}`,
    `Email:   ${email}`,
    `Details: ${message || '(none given)'}`,
    '',
    'Something not right there? Reply to this email and we will correct it.',
    '',
    '--',
    `${site.name} - ${site.phone}`,
    site.openingHours,
    assetBase,
  ].join('\n');
}
