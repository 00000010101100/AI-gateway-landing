# AI Gateway Landing Page

AI Gateway 랜딩 페이지 프로젝트입니다.

## 로컬 개발 환경 설정

1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm run dev
```

3. 브라우저에서 `http://localhost:5173` 접속

## Vercel 배포 가이드

### 1. GitHub에 프로젝트 업로드

1. GitHub에서 새 저장소 생성
2. 로컬 프로젝트를 Git 저장소로 초기화:
```bash
git init
git add .
git commit -m "Initial commit"
```

3. GitHub 저장소와 연결:
```bash
git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main
```

### 2. Vercel 배포

1. [Vercel](https://vercel.com)에 접속하여 계정 생성/로그인
2. "New Project" 클릭
3. GitHub 저장소 선택
4. 프로젝트 설정:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. "Deploy" 클릭

### 3. 자동 배포 설정

- GitHub에 코드를 푸시할 때마다 자동으로 배포됩니다
- `main` 브랜치에 푸시하면 프로덕션 배포
- 다른 브랜치에 푸시하면 프리뷰 배포

## 프로젝트 구조

```
project/
├── components/          # React 컴포넌트
│   ├── ui/             # shadcn/ui 컴포넌트
│   └── figma/          # Figma 관련 컴포넌트
├── styles/             # CSS 스타일
├── imports/            # 아이콘 및 SVG
├── guidelines/         # 프로젝트 가이드라인
├── App.tsx             # 메인 앱 컴포넌트
├── main.tsx            # 앱 진입점
└── index.html          # HTML 템플릿
```

## 기술 스택

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Lucide React (아이콘)
