# komki — 프로젝트 스펙

> AI가 코드를 짤 때 지켜야 할 규칙과 절대 하면 안 되는 것.
> 이 문서를 AI에게 항상 함께 공유하세요.

---

## 기술 스택

| 영역 | 선택 | 이유 |
|------|------|------|
| 프레임워크 | Next.js 15 (App Router) | React 생태계, ISR로 콘텐츠 자동 갱신, Phase 3 확장성 |
| 백엔드/CMS | Ghost (헤드리스) | 기존 운영 중, 뉴스레터 발송·멤버십 내장 |
| 스타일링 | Tailwind CSS 4 | 빠른 커스텀 UI, 디자인 시스템 구축 용이 |
| 배포 | Vercel | Ghost 공식 지원, 무료 티어, GitHub 연동 자동 배포 |
| Ghost SDK | @tryghost/content-api | Ghost 공식 JavaScript SDK |
| 언어 | TypeScript | 타입 안전성, Ghost API 응답 타입 정의 |

---

## 프로젝트 구조

```
komki/
├── src/
│   ├── app/                  # Next.js App Router 페이지
│   │   ├── page.tsx          # 랜딩페이지 (/)
│   │   ├── articles/
│   │   │   ├── page.tsx      # 아티클 목록 (Phase 2)
│   │   │   └── [slug]/
│   │   │       └── page.tsx  # 아티클 상세 (Phase 2)
│   │   └── api/
│   │       └── subscribe/
│   │           └── route.ts  # 구독 API 엔드포인트
│   ├── components/           # 재사용 가능한 UI 컴포넌트
│   │   ├── Hero.tsx
│   │   ├── SubscribeForm.tsx
│   │   ├── ArticleCard.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   └── ghost.ts          # Ghost API 클라이언트 초기화
│   └── types/
│       └── ghost.ts          # Ghost API 응답 타입 정의
├── public/                   # 정적 파일 (이미지, 아이콘)
├── .env.local                # 환경변수 (절대 Git에 올리지 말 것)
├── .gitignore                # .env.local 반드시 포함
└── package.json
```

---

## 절대 하지 마 (DO NOT)

> AI에게 코드를 시킬 때 이 목록을 반드시 함께 공유하세요.

- [ ] API 키나 Ghost URL을 코드에 직접 쓰지 마 (반드시 `.env.local` 사용)
- [ ] Ghost 데이터베이스에 직접 접근하지 마 (Content API만 사용)
- [ ] Ghost 멤버 이메일/개인정보를 클라이언트 사이드에 노출하지 마
- [ ] 목업/하드코딩 데이터로 완성이라고 하지 마 (실제 Ghost API 연결 필수)
- [ ] `package.json`의 기존 의존성 버전을 임의로 변경하지 마
- [ ] Ghost 관리자 페이지(`/ghost`) 구조나 테마를 건드리지 마
- [ ] `.env.local`을 `.gitignore` 없이 Git에 커밋하지 마
- [ ] Phase 1 완료 전에 Phase 2/3 기능을 미리 구현하지 마

---

## 항상 해 (ALWAYS DO)

- [ ] 변경하기 전에 계획을 먼저 보여줘
- [ ] 환경변수는 `.env.local`에 저장하고 `.env.example`에 키 이름만 공개
- [ ] 구독 폼 에러(이미 구독됨, 잘못된 이메일 등)는 사용자에게 한국어로 안내
- [ ] 모바일 375px ~ 데스크톱 1440px 반응형 디자인
- [ ] Ghost API 호출은 서버 사이드에서만 (API 키 보호)
- [ ] Next.js Image 컴포넌트로 Ghost 이미지 최적화

---

## 테스트 방법

```bash
# 로컬 실행
npm run dev

# 타입 체크
npx tsc --noEmit

# 빌드 확인
npm run build

# Ghost API 연결 확인 (브라우저)
# http://localhost:3000 접속 후 최신 글 3개 노출 확인
# 이메일 입력 → Ghost 관리자에서 구독자 등록 확인
```

---

## 배포 방법

1. GitHub 저장소에 푸시
2. [vercel.com](https://vercel.com) → Import Repository
3. 환경변수 설정 (아래 표 참고)
4. Deploy → 자동 빌드 & 배포
5. Settings → Domains → `komki.co.kr` 연결

---

## 환경변수

| 변수명 | 설명 | 어디서 발급 |
|--------|------|------------|
| `GHOST_URL` | Ghost 인스턴스 주소 | `https://komki.ghost.io` (Ghost Pro) |
| `GHOST_CONTENT_API_KEY` | Content API 읽기 키 | Ghost 관리자 → Settings → Integrations → komki-newsletter-bot |
| `GHOST_ADMIN_API_KEY` | Admin API 키 (구독 등록용) | 동일 Integration 페이지 |

> `.env.local` 파일에 저장. 절대 GitHub에 올리지 마세요.

```bash
# .env.local 예시
GHOST_URL=https://your-ghost-instance.com
GHOST_CONTENT_API_KEY=your_content_api_key_here
```

---

## [NEEDS CLARIFICATION]

- [x] Ghost 인스턴스 URL — `https://komki.ghost.io` (Ghost Pro) 확인 완료
- [ ] Vercel 도메인 전환 시점 — 기존 `komki.co.kr` → Vercel로 DNS 변경 시기
- [ ] Ghost 구독 magic link 방식 vs Members API 직접 호출 방식 선택
