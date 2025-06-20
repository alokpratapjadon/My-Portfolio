# 3D Portfolio

<!-- GitHub badges -->

[![Latest release](https://img.shields.io/github/v/release/ladunjexa/reactjs18-3d-portfolio?label=Latest%20release&style=social)](https://github.com/ladunjexa/reactjs18-3d-portfolio/releases/tag/v0.1.0)
[![Stars](https://img.shields.io/github/stars/ladunjexa/reactjs18-3d-portfolio?style=social)](https://github.com/ladunjexa/reactjs18-3d-portfolio/stargazers)
[![Fork](https://img.shields.io/github/forks/ladunjexa/reactjs18-3d-portfolio?style=social)](https://github.com/ladunjexa/reactjs18-3d-portfolio/forks)
[![GitHub commits](https://img.shields.io/github/commit-activity/t/ladunjexa/reactjs18-3d-portfolio?style=social&logo=github)](https://github.com/ladunjexa/reactjs18-3d-portfolio/commits)
[![Pull requests](https://img.shields.io/github/issues-pr/ladunjexa/reactjs18-3d-portfolio?style=social&logo=github)](https://github.com/ladunjexa/reactjs18-3d-portfolio/pulls)

![demo](.github/README_ASSETS/3d-portfolio.png)

[![ladunjexa](https://custom-icon-badges.demolab.com/badge/made%20by%20-ladunjexa-556bf2?logo=github&logoColor=white&labelColor=101827)](https://github.com/luadnjexa)
[![License](https://img.shields.io/github/license/ladunjexa/reactjs18-3d-portfolio?color=dddddd&labelColor=000000)](https://github.com/ladunjexa/reactjs18-3d-portfolio/blob/main/LICENSE)
[![Top Language](https://img.shields.io/github/languages/top/ladunjexa/reactjs18-3d-portfolio?logo=github&logoColor=%23007ACC&label=TypeScript)](https://www.typescriptlang.org/)
![Release](https://img.shields.io/github/release/ladunjexa/reactjs18-3d-portfolio.svg)
![PRs](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=shields)
![deployment](https://img.shields.io/github/deployments/ladunjexa/reactjs18-3d-portfolio/Production?logo=vercel&label=Website)
[![Known Vulnerabilities](https://snyk.io/test/github/ladunjexa/reactjs18-3d-portfolio/badge.svg)](https://snyk.io/test/github/ladunjexa/reactjs18-3d-portfolio)

## 🌐 Live Demo

Explore the live demonstration of the project:
[reactjs18-3d-portfolio](https://reactjs18-3-d-portfolio.vercel.app/)

## 📝 Description

**3D Portfolio** is a well-designed and fully functional portfolio website that is built with
React.js and Three.js. It is a fully responsive website that works well on all devices.

<details><summary><b>Folder Structure</b></summary>

```bash
reactjs18-3d-portfolio/
├── src/
├   ├── App.tsx
├   ├── globals.css
├   ├── main.tsx
├   ├── vite.env.d.ts
├   ├── components/
├   ├   ├── atoms/
├   ├   ├   └── Header.tsx
├   ├   ├── canvas/
├   ├   ├   ├── Ball.tsx
├   ├   ├   ├── Computers.tsx
├   ├   ├   ├── Earth.tsx
├   ├   ├   ├── Stars.tsx
├   ├   ├   └── index.ts
├   ├   ├── layout/
├   ├   ├   ├── Loader.tsx
├   ├   ├   └── Navbar.tsx
├   ├   ├── sections/
├   ├   ├   ├── About.tsx
├   ├   ├   ├── Contact.tsx
├   ├   ├   ├── Experience.tsx
├   ├   ├   ├── Feedbacks.tsx
├   ├   ├   ├── Hero.tsx
├   ├   ├   ├── Tech.tsx
├   ├   ├   ├── Works.tsx
├   ├   ├   └── page.tsx
├   ├   └── index.ts
├   ├── constants/
├   ├   ├── config.ts
├   ├   ├── styles.ts
├   ├   └── index.ts
├   ├── hoc/
├   ├   ├── SectionWrapper.tsx
├   ├   └── index.ts
├   ├── utils/
├   ├   └── motion.ts
├   ├── types/
├   ├   └── index.d.ts
├   └── assets/
├       ├── company/
├       ├   └── [[...]].{svg,png}
├       ├── tech/
├       ├   └── [[...]].{svg,png}
├       ├── [[...]].{svg,png}
├       └── index.ts
├── public/
├   ├── desktop_pc
├   ├   ├── textures/[[...]].png
├   ├   ├── license.txt
├   ├   ├── scene.bin
├   ├   └── scene.gltf
├   ├── planet
├   ├   ├── textures/[[...]].png
├   ├   ├── license.txt
├   ├   ├── scene.bin
├   ├   └── scene.gltf
├   ├── logo.png
├   └── logo.svg
├── .env
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── .prettierignore
├── .prettierrc.cjs
├── index.html
├── LICENSE
├── README.md
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.js
```

</details>

## 📖 Table of Contents

<details><summary>Table of Contents</summary>

- [Live Demo](#-live-demo)
- [Description](#-description)
- [Technologies Used](#-technologies-used)
- [Get Started](#-get-started)
  - [Prerequisites](#-prerequisites)
  - [Installation and Run Locally](#-installation-and-run-locally)
  - [Scripts](#-scripts)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
  - [Deploy to production (manual)](#-deploy-to-production-manual)
  - [Deploy on Vercel (recommended)](#-deploy-on-vercel-recommended)
  - [Deploy on Netlify](#-deploy-on-netlify)
- [Acknowledgements](#-acknowledgements)
- [References](#-references)
- [Contact Us](#-contact-us)
- [License](#-license)
