import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",   // includes App.tsx
    "./components/**/*.{ts,tsx}",    // includes shadcn/ui components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
