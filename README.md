# Nuxt 3 Starter Kit

[![Build Status](https://img.shields.io/github/actions/workflow/status/wenwen357951/nuxt3-starter/ci.yml?branch=main&style=for-the-badge)](https://github.com/wenwen357951/nuxt3-starter/actions)
[![License](https://img.shields.io/github/license/wenwen357951/nuxt3-starter?style=for-the-badge)](LICENSE)
[![PNPM](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=fff)](https://pnpm.io/)
[![Nuxt](https://img.shields.io/badge/nuxt-00DC82?style=for-the-badge&logo=nuxt&logoColor=fff)](https://nuxt.com/)
[![Storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=fff)](https://storybook.js.org/)

A comprehensive and opinionated Nuxt 3 starter kit designed to help you kickstart your next great project. It comes with industry-standard tools pre-configured to provide an excellent developer experience.

---

## ✨ Features

- **[Nuxt 3](https://nuxt.com/)**: The latest Vue framework, offering Server-Side Rendering (SSR), Static Site Generation (SSG), and more.
- **[TypeScript](https://www.typescriptlang.org/)**: Full TypeScript support out of the box for type safety and an enhanced developer experience.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapidly building modern user interfaces.
- **[ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)**: Integrated code linting and auto-formatting to ensure a consistent codebase.
- **[Husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/okonet/lint-staged)**: Automatically run linting and formatting before Git commits to maintain code quality.
- **[Storybook](https://storybook.js.org/)**: A powerful tool for developing, testing, and documenting UI components in isolation.
- **VS Code Integration**: Includes recommended extensions and settings for a seamless development workflow.
- **Sensible Directory Structure**: Organized according to Nuxt 3 best practices.

## 🛠️ Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/)
- **UI**: [Vue 3](https://vuejs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Code Quality**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- **Git Hooks**: [Husky](https://typicode.github.io/husky/), [lint-staged](https://github.com/okonet/lint-staged)
- **Component-Driven Development**: [Storybook](https://storybook.js.org/)

## 🚀 Getting Started

Ensure you have [Node.js](https://nodejs.org/) (version >= 18 recommended) and [pnpm](https://pnpm.io/) installed.

### 1. Clone the Repository

```bash
git clone https://github.com/wenwen357951/nuxt3-starter.git
cd nuxt3-starter
```

### 2. Install Dependencies

This project uses `pnpm` as the package manager.

```bash
pnpm install
```

### 3. Start the Development Server

After running this command, your application will be available at `http://localhost:3000`.

```bash
pnpm dev
```

### 4. Launch Storybook

This command will open the Storybook component library at `http://localhost:6006`.

```bash
pnpm storybook:dev
```

## 📜 Available Scripts

This project includes the following scripts:

| Command                | Description                                     |
| :--------------------- | :---------------------------------------------- |
| `pnpm dev`             | Starts the Nuxt development server.             |
| `pnpm build`           | Builds the application for production.          |
| `pnpm generate`        | Pre-renders the application into a static site. |
| `pnpm preview`         | Previews the production build locally.          |
| `pnpm lint`            | Lints the codebase for style issues.            |
| `pnpm lint:fix`        | Automatically fixes fixable linting issues.     |
| `pnpm storybook:dev`   | Starts the Storybook development server.        |
| `pnpm storybook:build` | Builds Storybook as a static application.       |

## 📁 Directory Structure

```
.
├── .husky/         # Husky Git Hooks configuration
├── .storybook/     # Storybook configuration files
├── .vscode/        # Recommended VS Code settings
├── src/
│   ├── assets/       # Static assets (CSS, images)
│   ├── components/   # Global Vue components
│   ├── public/       # Public static assets (robots.txt, favicon.ico)
│   ├── server/       # Server-side API and middleware
│   └── stories/      # Storybook stories
├── app.vue         # Main application entry point
├── nuxt.config.ts  # Main Nuxt configuration file
├── package.json    # Project dependencies and scripts
└── tsconfig.json   # TypeScript configuration file
```

## 🤝 Contributing

Contributions are welcome! If you find a bug or have a feature suggestion, please open an [Issue](https://github.com/wenwen357951/nuxt3-starter/issues). If you'd like to contribute code, please fork the repository and submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m '''Add some AmazingFeature'''`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT](LICENSE) License.
