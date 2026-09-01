type Props = {
  query: string;
  title: string;
};

/** Google Maps embed centred on a service-area town. No API key required. */
export default function AreaMap({ query, title }: Props) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=12&output=embed`;
  return (
    <div className="overflow-hidden rounded-card border border-stone">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-[320px] w-full sm:h-[380px]"
      />
    </div>
  );
}
