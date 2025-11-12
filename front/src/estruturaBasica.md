meu-projeto/
├── public/
│   ├── logo.png              ← ✅ imagens estáticas (não importadas pelo JS)
│   └── favicon.ico
│
├── src/
│   ├── assets/               ← 🎨 imagens e ícones usados no código (importados)
│   │   ├── background.jpg
│   │   └── logo.svg
│   │
│   ├── components/           ← 🧩 componentes reutilizáveis (botões, cards, etc.)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Button.tsx
│   │
│   ├── pages/                ← 📄 páginas principais (Login, Dashboard, etc.)
│   │   ├── Login.tsx
│   │   ├── Dashboard.tsx
│   │   └── Register.tsx
│   │
│   ├── styles/               ← 🎨 arquivos de estilo (CSS, SCSS, etc.)
│   │   ├── global.css
│   │   └── login.css
│   │
│   ├── hooks/                ← ⚙️ custom hooks (opcional)
│   │   └── useAuth.ts
│   │
│   ├── services/             ← 🌐 chamadas API ou configs (axios, firebase, etc.)
│   │   └── api.ts
│   │
│   ├── App.tsx               ← 🚀 componente principal
│   ├── main.tsx              ← ponto de entrada do React
│   └── vite-env.d.ts
│
├── package.json
└── tsconfig.json
