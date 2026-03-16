import Link from "next/link";
import SubscribeForm from "./SubscribeForm";

export default function Footer() {
  return (
    <footer className="border-t border-[#e8d9c0]">
      {/* 브랜드 소개 + 구독 CTA */}
      <div id="subscribe" className="bg-[#2d2416] px-6 py-24 text-center">
        <p className="text-xs text-[#d97706] uppercase tracking-widest mb-6">
          매주 화요일 발행
        </p>
        <h2 className="font-serif text-4xl md:text-6xl text-[#fdf6ec] mb-4 tracking-tight leading-tight">
          komki
        </h2>
        <p className="text-lg md:text-xl text-[#b8a898] mb-4 leading-relaxed max-w-md mx-auto font-light">
          창업자가 놓치면 안 되는
          <br />
          비즈니스 인사이트
        </p>
        <p className="text-sm text-[#8b7355] mb-12 max-w-sm mx-auto leading-relaxed">
          복잡한 정보는 걷어내고,
          진짜 중요한 것들만 골라서 — 단 5분.
        </p>
        <div className="max-w-md mx-auto">
          <SubscribeForm source="footer" variant="dark" />
        </div>
        <p className="mt-5 text-xs text-[#5c4a2f]">
          무료 · 언제든 구독 취소 가능
        </p>
      </div>

      {/* 하단 정보 */}
      <div className="bg-[#fff8ef] border-t border-[#e8d9c0]">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="font-serif text-lg text-[#2d2416] hover:text-[#d97706] transition-colors"
          >
            komki
          </Link>

          <div className="flex items-center gap-6 text-xs text-[#b8a898]">
            <Link href="/privacy" className="hover:text-[#8b7355] transition-colors">
              개인정보처리방침
            </Link>
            <a
              href="mailto:hello@komki.co.kr"
              className="hover:text-[#8b7355] transition-colors"
            >
              hello@komki.co.kr
            </a>
          </div>

          <p className="text-xs text-[#b8a898]">
            © {new Date().getFullYear()} komki
          </p>
        </div>
      </div>
    </footer>
  );
}
