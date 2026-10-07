# Portfólio pessoal

Site de uma página que apresenta meus serviços de criação de sites e sistemas web, meus projetos e meus contatos. Feito para negócios locais que precisam de um site e para recrutadores que querem ver o que eu construo.

**Site no ar:** em breve (deploy na Vercel).

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Deploy na Vercel, automático a cada push na `main`

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build     # checa tipos e gera a pasta dist/
npm run preview   # serve a pasta dist/ em http://localhost:4173
```

A pasta `dist/` é o site inteiro: HTML, CSS e JS estáticos. Deploy é só servir essa pasta.

## Editar conteúdo

Todo texto, link, serviço e projeto fica em [`src/data.ts`](src/data.ts). Os prints dos projetos ficam em [`public/projects/`](public/projects/).
