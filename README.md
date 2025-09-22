# 🐾 PetCare Tips – Dicas de Cuidados

Aplicação web desenvolvida como parte do **Projeto 1 da disciplina Programação Web Fullstack (ES47B-ES71)**.  
O objetivo é fornecer dicas básicas de cuidados, expectativa de vida e informações sobre raças de cães e gatos, utilizando uma **SPA (Single Page Application)** em React.js.

---

## 🚀 Funcionalidades
- Seleção da espécie (**cachorro** ou **gato**)
- Busca por raças disponíveis via **API pública** (The Dog API / The Cat API)
- Exibição de informações básicas: expectativa de vida, temperamento e cuidados gerais
- Interface com **cards responsivos** (React-Bootstrap)
- Validação de **campos obrigatórios** (não é possível buscar sem selecionar a espécie/raça)
- Uso do hook **useMemo** para cachear descrições e evitar recomputações desnecessárias

---

## 🛠️ Tecnologias Utilizadas
- [React.js](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [The Dog API](https://thedogapi.com/) / [The Cat API](https://thecatapi.com/)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
