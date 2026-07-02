import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    forceRerunTriggers: [
      '**/package.json/**',
      '**/vitest.config.*/**',
      '**/fixtures/**',
    ],
  },
});
