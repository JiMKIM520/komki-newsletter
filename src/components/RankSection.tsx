"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GhostPost } from "@/lib/ghost";

export default function RankSection({ posts }: { posts: GhostPost[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ranked = posts.slice(0, 5);

  if (ranked.length === 0) return null;

  return (
    <section className="py-6" onMouseLeave={() => setHoveredIndex(null)}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* 섹션 헤더 */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-extrabold text-[#2d2416] tracking-[0.2em] uppercase">
            Rank Top 5
          </span>
          <span className="text-[7px] font-bold bg-[#d97706] text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Hot
          </span>
        </div>

        {/* 랭킹 리스트 */}
        <div className="flex flex-col gap-[2px] bg-[#2d2416]">
          {ranked.map((post, i) => {
            const tag = post.tags?.[0];
            const isHovered = hoveredIndex === i;

            return (
              <Link
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(i)}
                className="flex items-center gap-3 px-3 py-2.5 transition-colors duration-200"
                style={{ backgroundColor: isHovered ? "#fde68a" : "#fdf6ec" }}
              >
                {/* 순위 */}
                <span
                  className="font-mono text-lg font-black w-6 text-center shrink-0"
                  style={{ color: i === 0 ? "#d97706" : "#2d2416" }}
                >
                  {i + 1}
                </span>

                {/* 썸네일 */}
                <div className="relative w-8 h-8 rounded-md overflow-hidden shrink-0 bg-[#e8d9c0]">
                  {post.feature_image ? (
                    <Image
                      src={post.feature_image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-[10px] font-bold text-[#d9c9b0]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                </div>

                {/* 제목 + 메타 */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#2d2416] truncate">
                    {post.title}
                  </p>
                  <p className="text-[10px] text-[#b8a898] mt-0.5">
                    {post.reading_time > 0 && `${post.reading_time}min`}
                    {post.reading_time > 0 && tag && " · "}
                    {tag && tag.name.toUpperCase()}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
