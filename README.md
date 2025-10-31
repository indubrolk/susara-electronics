Updated `README.md` with a concise, project-specific overview, quick start, structure, environment notes, and contributing/license sections.

```markdown
# Susara Electronics — React + Vite

A minimal React frontend scaffolded with Vite for Susara Electronics. Fast development with HMR, basic ESLint, and simple build scripts.

## Features
- React with Vite for fast dev server and builds
- ESLint preconfigured for consistent style
- Easy migration path to TypeScript and React Compiler

## Requirements
- Node.js 18+ (LTS recommended)
- npm 9+

## Quick start

Install dependencies:
```bash
npm install
```

Start development server with HMR:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

Run linter:
```bash
npm run lint
```

Run tests (if configured):
```bash
npm test
```

## Project structure
- `index.html` — App entry
- `src/` — React application source
    - `main.jsx` — App bootstrap
    - `App.jsx` — Root component
    - `components/` — UI components
- `public/` — Static assets
- `vite.config.js` — Vite configuration
- `package.json` — Scripts and dependencies

## Environment
Place environment variables in `.env` or `.env.local`. Vite only exposes variables prefixed with `VITE_`.

## Notes
- The React Compiler is not enabled by default due to potential dev/build impacts. See React Compiler docs for installation and testing.
- For production, consider migrating to TypeScript and enabling type-aware ESLint rules (see `typescript-eslint`).

## Contributing
- Fork, create a feature branch, run `npm run lint`, and open a pull request.
- Keep PRs small and focused.

## License
Add your project license here (e.g., MIT).
```