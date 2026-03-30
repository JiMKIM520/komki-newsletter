export default function MarqueeHeader() {
  const text =
    "KOMKI BUSINESS LETTER \u00B7 창업자를 위한 비즈니스 인사이트 \u00B7 매주 화요일 발행";

  return (
    <div className="bg-[#2d2416] overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-flex py-1.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="text-[9px] font-extrabold text-[#d97706] tracking-[0.25em] uppercase mx-8"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
