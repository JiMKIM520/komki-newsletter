"use client";

import { useState } from "react";

type SubscribeFormProps = {
  source?: "hero" | "footer" | "inline";
  variant?: "default" | "compact" | "dark";
};

export default function SubscribeForm({
  source = "hero",
  variant = "default",
}: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json();
        setStatus("error");
        setErrorMsg(data.message || "오류가 발생했습니다. 다시 시도해주세요.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  if (status === "success") {
    const isDark = variant === "dark";
    return (
      <div className="text-center py-4">
        <div className={`inline-flex items-center gap-2 font-medium ${isDark ? "text-[#f59e0b]" : "text-[#d97706]"}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 10l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          구독 신청 완료!
        </div>
        <p className={`text-sm mt-2 ${isDark ? "text-[#b8a898]" : "text-[#8b7355]"}`}>
          확인 메일을 보내드렸어요. 받은 편지함을 확인해주세요.
        </p>
      </div>
    );
  }

  if (variant === "dark") {
    return (
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일 주소를 입력하세요"
            required
            className="flex-1 px-5 py-3.5 text-sm rounded-full border border-[#5c4a2f] bg-[#3d2e1a] text-[#fdf6ec] placeholder-[#8b7355] focus:outline-none focus:border-[#d97706] focus:ring-2 focus:ring-[#d97706]/30 transition-all"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-7 py-3.5 text-sm font-semibold rounded-full bg-[#d97706] text-white hover:bg-[#f59e0b] disabled:opacity-60 transition-colors duration-200 whitespace-nowrap"
          >
            {status === "loading" ? "처리 중..." : "무료 구독하기 →"}
          </button>
        </form>
        {status === "error" && (
          <p className="mt-3 text-sm text-red-400 text-center">{errorMsg}</p>
        )}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 주소"
          required
          className="flex-1 px-4 py-2.5 text-sm rounded-full border border-[#e8d9c0] bg-white text-[#2d2416] placeholder-[#b8a898] focus:outline-none focus:border-[#d97706] transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-5 py-2.5 text-sm font-medium rounded-full bg-[#2d2416] text-[#fdf6ec] hover:bg-[#d97706] disabled:opacity-60 transition-colors whitespace-nowrap"
        >
          {status === "loading" ? "..." : "구독"}
        </button>
      </form>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 주소를 입력하세요"
          required
          className="flex-1 px-5 py-3.5 text-sm rounded-full border border-[#e8d9c0] bg-white text-[#2d2416] placeholder-[#b8a898] focus:outline-none focus:border-[#d97706] focus:ring-2 focus:ring-[#d97706]/20 transition-all"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-7 py-3.5 text-sm font-semibold rounded-full bg-[#2d2416] text-[#fdf6ec] hover:bg-[#d97706] disabled:opacity-60 transition-colors duration-200 whitespace-nowrap"
        >
          {status === "loading" ? "처리 중..." : "무료 구독하기 →"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-3 text-sm text-red-500 text-center">{errorMsg}</p>
      )}
    </div>
  );
}
