# komki — 데이터 모델

> 이 문서는 앱에서 다루는 핵심 데이터의 구조를 정의합니다.
> Ghost Content API가 데이터 소스이므로 DB를 직접 만들지 않습니다.

---

## 전체 구조

```
[Ghost CMS]
    │
    ├── Post (아티클) ──N:M──> Tag
    │       └──N:1──> Author
    │
    ├── Tag
    │
    ├── Author
    │
    └── Member (구독자) ── Ghost Members API

[Next.js 프론트엔드 전용]
    └── NewsletterSignup (클라이언트 상태 — DB 없음)
```

---

## 엔티티 상세

### Post (아티클)
Ghost가 관리하는 뉴스레터/블로그 글

| 필드 | 설명 | 예시 | 필수 |
|------|------|------|------|
| id | Ghost 고유 식별자 | 6478abc1f3... | O |
| title | 글 제목 | "도쿄에서 찾은 느린 삶" | O |
| slug | URL 경로 | tokyo-slow-life | O |
| excerpt | 요약 (카드에 표시) | "골목 안쪽 카페에서..." | X |
| html | 본문 HTML (Ghost 에디터 출력) | `<p>...</p>` | O |
| feature_image | 대표 이미지 URL | https://... | X |
| published_at | 발행 일시 | 2026-03-10T09:00:00Z | O |
| tags | 태그 배열 | [{id, name, slug}] | X |
| authors | 저자 배열 | [{id, name, slug}] | O |
| visibility | 공개 범위 | public \| members \| paid | O |

### Tag
콘텐츠 분류 레이블

| 필드 | 설명 | 예시 | 필수 |
|------|------|------|------|
| id | Ghost 고유 식별자 | 64abc... | O |
| name | 태그 이름 | 여행 | O |
| slug | URL 경로 | travel | O |
| description | 태그 설명 | "세계 곳곳의 여행기" | X |

### Author
뉴스레터 작성자

| 필드 | 설명 | 예시 | 필수 |
|------|------|------|------|
| id | Ghost 고유 식별자 | 64def... | O |
| name | 이름 | 김민지 | O |
| slug | URL 경로 | minji | O |
| profile_image | 프로필 이미지 URL | https://... | X |
| bio | 소개글 | "라이프스타일 큐레이터" | X |

### Member (구독자)
Ghost Members API로 관리 — 프론트에서 직접 읽지 않음

| 필드 | 설명 | 예시 | 필수 |
|------|------|------|------|
| email | 이메일 주소 | hello@komki.co.kr | O |
| name | 이름 (선택) | 이지수 | X |
| subscribed_at | 구독 일시 | 2026-03-16T... | O |
| status | 구독 상태 | free \| paid | O |

### NewsletterSignup (프론트엔드 전용)
구독 폼 UI 상태 — 서버에 저장되지 않음

| 필드 | 설명 | 예시 |
|------|------|------|
| email | 입력된 이메일 | user@gmail.com |
| source | 폼 위치 추적 | 'hero' \| 'footer' \| 'inline' |

---

## 관계

- Post 1개는 여러 Tag를 가질 수 있음 (N:M)
- Post 1개는 여러 Author를 가질 수 있음 (N:M, 보통 1명)
- Member는 Ghost가 직접 관리, 프론트는 이메일만 POST로 전달

---

## API 연동 방식

```
GET  /ghost/api/content/posts/?key={KEY}&include=tags,authors
     → 포스트 목록 (랜딩 최신 3개, Phase 2 목록 페이지)

GET  /ghost/api/content/posts/slug/{slug}/?key={KEY}&include=tags,authors
     → 포스트 상세 (Phase 2)

GET  /ghost/api/content/tags/?key={KEY}
     → 태그 목록 (Phase 2 필터)

POST /ghost/api/members/api/send-magic-link/
     → 구독 등록 (이메일 입력 → Ghost 환영 메일 자동 발송)
```

---

## 왜 이 구조인가

- Ghost가 이미 운영 중이므로 별도 DB 불필요 — 운영 복잡도 최소화
- Content API는 읽기 전용 → 보안 리스크 없음
- Members API magic link 방식으로 비밀번호 없이 구독 처리

---

## [NEEDS CLARIFICATION]

- [ ] Ghost 멤버십 visibility 설정 — `public` 글만 노출할지, `members` 전용 글 티저도 보여줄지
- [ ] Phase 2에서 검색 구현 시 Ghost Search API 사용 vs 클라이언트사이드 필터링 결정 필요
