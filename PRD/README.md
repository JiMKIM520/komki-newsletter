# komki — 디자인 문서

> Show Me The PRD로 생성됨 (2026-03-16)

## 문서 구성

| 문서 | 내용 | 언제 읽나 |
|------|------|----------|
| [01_PRD.md](./01_PRD.md) | 뭘 만드는지, 누가 쓰는지, 성공 기준 | 프로젝트 시작 전 |
| [02_DATA_MODEL.md](./02_DATA_MODEL.md) | Ghost API 데이터 구조 | API 연동할 때 |
| [03_PHASES.md](./03_PHASES.md) | Phase 1~3 단계별 계획 | 개발 순서 정할 때 |
| [04_PROJECT_SPEC.md](./04_PROJECT_SPEC.md) | 기술 스택, 절대 하지 마, 환경변수 | AI에게 코드 시킬 때마다 |

## 다음 단계

Phase 1을 시작하려면 [03_PHASES.md](./03_PHASES.md)의 **"Phase 1 시작 프롬프트"** 를 복사해서 Claude에게 붙여넣으세요.

## 미결 사항 종합

- [ ] Ghost 인스턴스 URL 확인 (자체 호스팅 vs Ghost Pro)
- [ ] Ghost Content API 키 발급 (Settings → Integrations)
- [ ] 구독 폼 — Ghost 외 Mailchimp/Stibee 병행 여부
- [ ] komki.co.kr DNS → Vercel 전환 시점
- [ ] 아티클 visibility 설정 (`public`만 노출 vs `members` 티저 노출)
