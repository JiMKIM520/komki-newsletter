export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 pt-36 pb-16 text-center">
      {/* 배지 */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e8d9c0] bg-[#fff8ef] text-xs text-[#8b7355] mb-8 tracking-wide">
        <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] animate-pulse" />
        매주 화요일 발행
      </div>

      {/* 로고 */}
      <h1 className="font-serif text-7xl md:text-9xl font-normal text-[#2d2416] tracking-tight mb-6 leading-none">
        komki
      </h1>

      {/* 헤드라인 */}
      <p className="text-xl md:text-2xl font-light text-[#8b7355] leading-relaxed max-w-lg tracking-tight">
        창업자가 놓치면 안 되는 비즈니스 인사이트
      </p>
    </section>
  );
}
