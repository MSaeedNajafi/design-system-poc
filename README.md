# Design System POC (Web Components + Design Tokens)

A small design system prototype built with native Web Components, Shadow DOM, and CSS variables.

It shows how a reusable and themeable UI system can be built without a framework.

This project shows how a simple design system can be structured using:

- CSS variables for design tokens
- Web Components for reusable UI elements
- Shadow DOM for style isolation
- Light/dark theme switching
- Basic accessibility patterns

The focus is on structure and scalability, not completeness.

## Components

The system includes a few basic components:

### rabo-button
- Primary and secondary styles
- Disabled state
- Emits a custom click event

### rabo-input
- Label and placeholder support
- Required validation
- Error state handling
- Basic accessibility attributes

### rabo-checkbox
- Checked state
- Optional required validation
- Error feedback

### rabo-card
- Simple container component
- Uses slots for flexible content
- No layout rules applied

## Design System

### Tokens (tokens.css)
Defines base values like:
- colors
- spacing
- border radius
- font family

### Themes (themes.css)
Supports light and dark mode using:
- data-theme="light"
- data-theme="dark"

All components use CSS variables so they update automatically.

## Tech Stack

- Vanilla JS (ES modules)
- Web Components
- Shadow DOM
- CSS variables
- Vite (for development only)

## Getting Started

```bash
npm install
npm run dev
