# posthog-react-playground

A lightweight Vite + React + TypeScript application for testing and evaluating [PostHog](https://posthog.com/) as a product analytics and monitoring solution. This repository is intended for research purposes before integrating PostHog into a production environment or team-wide stack.

## 📌 Objectives

- Experiment with PostHog SDK in a React environment
- Evaluate session tracking, event tracking, heatmaps, and feature flags
- Assess performance and privacy implications
- Test integration ease and developer experience

## 🧱 Stack

- [Vite](https://vitejs.dev/) – lightning-fast frontend tooling
- [React](https://reactjs.org/) – component-based UI framework
- [TypeScript](https://www.typescriptlang.org/) – typed JavaScript
- [PostHog JS SDK](https://posthog.com/docs/libraries/js)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/posthog-react-playground.git
cd posthog-react-playground
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure PostHog

Create a `.env` file based on `.env.example` and add your PostHog project key:

```env
VITE_PUBLIC_POSTHOG_KEY=your_project_api_key
VITE_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

### 4. Start Development Server

```bash
npm run dev
```

## 🧪 Features Under Evaluation

- `posthog.capture()`: Event tracking
- Feature flags & experimentation
- Heatmaps and session recordings
- React hooks and custom event tracking
- Page view analytics

## 📂 Project Structure

```
src/
│
├── components/     # UI components
├── hooks/          # Custom React hooks
├── posthog/        # PostHog integration logic
├── pages/          # Application views
└── main.tsx        # Entry point
```

## 🛡️ Notes

- **This repo is not production-ready.**
- Designed strictly for research, demo, and experimentation.
- Please validate tracking consent and privacy compliance before use.
