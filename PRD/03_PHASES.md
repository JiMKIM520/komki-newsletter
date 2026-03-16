# komki — Phase 분리 계획

> 한 번에 다 만들면 복잡해져서 품질이 떨어집니다.
> Phase별로 나눠서 각각 "진짜 동작하는 제품"을 만듭니다.

---

## Phase 1: MVP (1~2주)

### 목표
komki.co.kr에 접속하면 브랜딩에 맞는 커스텀 랜딩페이지가 뜨고, 이메일을 입력하면 Ghost 구독자로 등록된다.

### 기능
- [ ] 커스텀 랜딩페이지
  - Hero 섹션 (헤드라인 + 서브카피 + CTA 버튼)
  - 뉴스레터 소개 섹션
  - 최신 아티클 3개 카드 미리보기 (Ghost API)
  - Footer (SNS 링크 등)
- [ ] 뉴스레터 구독 CTA
  - 이메일 입력 폼 (Hero + Footer 2곳)
  - Ghost Members API 연동 (magic link)
  - 구독 성공/실패 피드백 메시지
- [ ] 반응형 디자인 (mobile-first, 375px ~ 1440px)
- [ ] Vercel 배포 + 도메인 연결

### 데이터
- Post (최신 3개만, title/slug/excerpt/feature_image)
- NewsletterSignup (클라이언트 상태)

### 인증
- 없음 (구독은 Ghost magic link 방식)

### "진짜 제품" 체크리스트
- [ ] Ghost Content API 실제 연결 (목업 데이터 X)
- [ ] Ghost Members API 실제 연동 (하드코딩 X)
- [ ] Vercel에 배포 (localhost X)
- [ ] 외부에서 URL로 접속하여 구독 완료까지 테스트

### Phase 1 시작 프롬프트
```
이 PRD를 읽고 Phase 1을 구현해주세요.
@PRD/01_PRD.md
@PRD/02_DATA_MODEL.md
@PRD/04_PROJECT_SPEC.md

Phase 1 범위:
- Next.js 15 + Tailwind CSS 프로젝트 초기 설정
- 커스텀 랜딩페이지 (Hero + 소개 + 최신 아티클 3개 + Footer)
- 뉴스레터 구독 폼 + Ghost Members API 연동
- Vercel 배포

반드시 지켜야 할 것:
- 04_PROJECT_SPEC.md의 "절대 하지 마" 목록 준수
- Ghost API 키는 .env.local에만 저장
- 목업/하드코딩 데이터 사용 금지
- 모바일 우선 반응형 디자인
```

---

## Phase 2: 콘텐츠 확장 (3~4주)

### 전제 조건
- Phase 1이 Vercel에 안정적으로 배포된 상태
- Ghost Content API 연결 검증 완료

### 목표
독자가 발행된 모든 뉴스레터 글을 탐색하고 읽을 수 있다.

### 기능
- [ ] 아티클 리스트 페이지 (`/articles`)
  - Ghost API 포스트 목록 (최신순)
  - 태그 필터 (카테고리)
  - 페이지네이션
- [ ] 아티클 상세 페이지 (`/articles/[slug]`)
  - Ghost HTML 본문 렌더링
  - OG 메타태그 (SNS 공유 미리보기)
  - 이전/다음 글 네비게이션
  - 인라인 구독 CTA
- [ ] 검색 기능 (제목/태그 기반)

### 추가 데이터
- Post 전체 필드 (html, tags, authors)
- Tag 목록

### 통합 테스트
- Phase 1 랜딩페이지 + 구독 기능 여전히 정상 동작하는지 확인

---

## Phase 3: 고도화 (미정)

### 전제 조건
- Phase 1 + 2가 안정적으로 운영 중
- 구독자 수 기반으로 수익화 검토 완료

### 목표
유료 구독자에게 프리미엄 콘텐츠를 제공하고 수익화한다.

### 기능
- [ ] 유료 멤버십 (Stripe 연동)
  - 월/연 구독 플랜
  - 프리미엄 콘텐츠 접근 제한
- [ ] 구독자 대시보드 (마이페이지)
- [ ] 애널리틱스 대시보드 (관리자용)
- [ ] 다크모드
- [ ] 뉴스레터 아카이브 페이지

### 주의사항
- Stripe 연동 시 Ghost Pro Creator 플랜 이상 필요
- 유료 멤버 데이터는 절대 클라이언트에 노출하지 않음

---

## Phase 로드맵 요약

| Phase | 핵심 기능 | 상태 |
|-------|----------|------|
| Phase 1 (MVP) | 커스텀 랜딩페이지 + 구독 CTA | 시작 전 |
| Phase 2 | 아티클 리스트/상세 + 검색 | Phase 1 완료 후 |
| Phase 3 | 유료 멤버십 + 대시보드 | Phase 2 완료 후 |
