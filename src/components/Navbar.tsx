import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#fdf6ec] border-b border-[#e8d9c0] py-4">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl text-[#2d2416] tracking-tight hover:text-[#d97706] transition-colors duration-200"
        >
          komki
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#articles"
            className="text-sm text-[#8b7355] hover:text-[#2d2416] transition-colors duration-200"
          >
            아티클
          </Link>
          <Link
            href="#about"
            className="text-sm text-[#8b7355] hover:text-[#2d2416] transition-colors duration-200"
          >
            소개
          </Link>
        </nav>

        <Link
          href="#subscribe"
          className="text-sm font-medium px-4 py-2 rounded-full bg-[#2d2416] text-[#fdf6ec] hover:bg-[#d97706] transition-colors duration-200"
        >
          무료 구독
        </Link>
      </div>
    </header>
  );
}
