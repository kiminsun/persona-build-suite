# 🚀 Portfolio Website

개인 포트폴리오 웹사이트입니다. React, TypeScript, Vite를 기반으로 구축되었으며, GitHub Actions를 통해 자동으로 배포됩니다.

## 🌟 주요 기능

- 반응형 디자인
- 다크/라이트 모드 지원
- 애니메이션 효과
- 모바일 최적화
- SEO 친화적

## 🛠️ 기술 스택

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **UI Library**: shadcn/ui, Radix UI
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Deployment**: GitHub Pages + GitHub Actions

## 🚀 로컬 개발 환경 설정

### 필수 요구사항

- Node.js 18 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/your-username/persona-build-suite.git

# 2. 프로젝트 디렉토리로 이동
cd persona-build-suite

# 3. 의존성 설치
npm install

# 4. 개발 서버 실행
npm run dev
```

### 사용 가능한 스크립트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build:prod

# 빌드 미리보기
npm run preview:build

# 린트 검사
npm run lint

# 린트 자동 수정
npm run lint:fix
```

## 🌐 배포 설정

이 프로젝트는 GitHub Actions를 사용하여 자동 배포됩니다.

### GitHub Pages 설정

1. **Repository Settings** → **Pages** 이동
2. **Source**를 "GitHub Actions"로 설정
3. main 브랜치에 푸시하면 자동으로 배포됩니다

### 배포 과정

1. 코드를 main 브랜치에 푸시
2. GitHub Actions가 자동으로 실행
3. TypeScript 타입 체크 및 린트 검사
4. 프로덕션 빌드 생성
5. GitHub Pages에 자동 배포

### 배포 URL

배포가 완료되면 다음 URL에서 확인할 수 있습니다:
`https://your-username.github.io/persona-build-suite/`

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── ui/             # shadcn/ui 컴포넌트
│   ├── Hero.tsx        # 메인 히어로 섹션
│   ├── About.tsx       # 소개 섹션
│   ├── Projects.tsx    # 프로젝트 섹션
│   └── ...
├── data/               # 정적 데이터
├── hooks/              # 커스텀 훅
├── lib/                # 유틸리티 함수
└── pages/              # 페이지 컴포넌트
```

## 🔧 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 필요한 환경 변수를 설정하세요:

```bash
# env.example 파일을 참고하여 설정
cp env.example .env.local
```

## 📝 커밋 규칙

- `feat:` 새로운 기능 추가
- `fix:` 버그 수정
- `docs:` 문서 수정
- `chore:` 빌드 과정 또는 보조 도구 변경

예시: `feat: 포트폴리오 섹션 추가`

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.
