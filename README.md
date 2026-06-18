# Design System POC (Web Components + Design Tokens)

A framework-agnostic **design system proof of concept** built with native Web Components, Shadow DOM, and CSS design tokens.

This project demonstrates how a scalable, themeable UI system can be built without relying on a frontend framework.

---

## 🧠 Purpose

This POC was created to explore:

- Token-based design systems (CSS variables)
- Native Web Components (Shadow DOM encapsulation)
- Theme switching (light/dark mode)
- Component-driven architecture
- Accessibility basics (ARIA + validation patterns)
- Framework-agnostic UI design

The goal is to show how a design system can scale across teams while staying independent of frameworks like React or Vue.

---

## 🧩 Components

The system includes the following Web Components:

### `<rabo-button>`

- Primary / secondary variants
- Disabled state
- Emits custom events (`rabo-click`)

### `<rabo-input>`

- Label + placeholder support
- Required validation
- Error state handling
- Accessible (`aria-describedby`, `aria-invalid`)

### `<rabo-checkbox>`

- Checked / unchecked state
- Required validation support
- Error feedback
- Accessibility support

### `<rabo-card>`

- Simple surface container
- Uses slots for flexible composition
- No layout assumptions (pure container)

---

## 🎨 Design System

### Tokens (`tokens.css`)

Defines core design primitives:

- Colors
- Spacing scale
- Border radius
- Typography base

### Themes (`themes.css`)

Supports runtime theming via:

- `data-theme="light"`
- `data-theme="dark"`

All components react automatically through CSS variables.

---

## ⚙️ Tech Stack

- Vanilla JavaScript (ES Modules)
- Web Components API
- Shadow DOM
- CSS Custom Properties (Design Tokens)
- Vite (dev server only)

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Open in browser

http://localhost:5173

## 🏗️ Architecture Principles

### 1. Separation of concerns

Design tokens, components, and themes are fully decoupled.

### 2. Encapsulation

Shadow DOM prevents style leakage and ensures predictable component styling.

### 3. Token-driven theming

All components derive their styling from CSS variables, enabling runtime theme switching without rebuilding components.

### 4. Framework independence

Components are built using native browser APIs, making them reusable in any stack (React, Vue, Angular, or vanilla).

---

## ⚖️ Trade-offs

This POC intentionally avoids:

- Complex build pipelines
- TypeScript
- Framework dependencies
- Heavy abstraction layers

This keeps the system lightweight and easy to adopt, but shifts more responsibility to architecture discipline and conventions.
