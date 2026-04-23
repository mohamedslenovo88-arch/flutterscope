import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  // Cloudflare Workers serve this app from the origin root by default.
  // Do not infer a repo-based base path from CI environment variables such as
  // GITHUB_REPOSITORY, because that rewrites asset URLs to /<repo>/... and
  // breaks workers.dev deployments. Use BASE_PATH only when deploying under an
  // intentional subpath.
  const productionBase = env.BASE_PATH || '/';

  return {
    base: mode === 'production' ? productionBase : '/',
    plugins: [react(), tailwindcss(), cloudflare()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      allowedHosts: true,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
