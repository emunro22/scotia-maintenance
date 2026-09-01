import type { Faq } from '@/lib/services';

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-stone border-y border-stone">
      {faqs.map((faq) => (
        <details key={faq.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-[1.05rem] font-semibold text-navy marker:hidden [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span
              aria-hidden="true"
              className="mt-1 shrink-0 text-blue-brand transition-transform duration-200 group-open:rotate-45"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3v10M3 8h10" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="copy mt-3 max-w-prose">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
