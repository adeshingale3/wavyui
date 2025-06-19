# Wavy UI

A quick library starter for React with Tailwind CSS, Vite, TypeScript and Shadcn-ui components.

## Installation

```bash
npm install wavy-ui
```

## Usage

1. Import the CSS in your app's entry file (e.g., `src/index.tsx` or `src/App.tsx`):

```tsx
import 'wavy-ui/dist/style.css';
```

2. Import and use components:

```tsx
import { Button } from 'wavy-ui';

function App() {
  return (
    <Button>Click me</Button>
  );
}
```

## Requirements

Make sure you have Tailwind CSS installed and configured in your project. Add the following to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/wavy-ui/**/*.{js,jsx,ts,tsx}'
  ],
  // ... rest of your config
}
```
