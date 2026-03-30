import Link from "next/link";
import { GhostTag } from "@/lib/ghost";

export default function Navbar({ tags }: { tags?: GhostTag[] }) {
  return (
    <header className="bg-[#fdf6ec] border-b border-[#e8d9c0] py-4">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl text-[#2d2416] tracking-tight hover:text-[#d97706] transition-colors duration-200"
        >
          komki
        </Link>

        {/* 카테고리 태그 */}
        {tags && tags.length > 0 && (
          <nav className="hidden md:flex items-center gap-2">
            {tags.slice(0, 6).map((tag) => (
              <span
                key={tag.id}
                className="text-xs border border-[#e8d9c0] rounded-full px-3 py-1 text-[#8b7355] hover:border-[#d97706] hover:text-[#2d2416] transition-colors duration-200 cursor-default"
              >
                {tag.name}
              </span>
            ))}
          </nav>
        )}

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
