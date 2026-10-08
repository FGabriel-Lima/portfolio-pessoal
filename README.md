# Portfólio pessoal

Site de uma página que apresenta meus serviços de criação de sites e sistemas web, meus projetos e meus contatos. Feito para negócios locais que precisam de um site e para recrutadores que querem ver o que eu construo.

**Site no ar:** [gabriellima.vercel.app](https://gabriellima.vercel.app)

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4 (fontes Space Grotesk e Inter)
- Deploy na Vercel, automático a cada push na `main`

## Rodar localmente

```bash
npm install
npm run dev -- --port 4173
```

Abre em `http://localhost:4173`. A porta padrão do Vite (5173) pode estar reservada pelo Windows; por isso a porta fixa.

## Build de produção

```bash
npm run build     # checa tipos e gera a pasta dist/
npm run preview   # serve a pasta dist/ localmente
```

A pasta `dist/` é o site inteiro: HTML, CSS e JS estáticos. Deploy é só servir essa pasta.

## Editar conteúdo

Todo texto, link, serviço e projeto fica em [`src/data.ts`](src/data.ts). Os prints dos projetos ficam em [`public/projects/`](public/projects/).
