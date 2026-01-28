import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // blue-600
        success: '#16a34a', // green-600
        warning: '#f59e0b', // amber-500
        danger: '#dc2626'   // red-600
      }
    }
  },
  plugins: []
};

export default config;
