import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const packageName = process.env.npm_package_name;
const projectName = repositoryName ?? packageName;
const productionBase = process.env.VITE_BASE_PATH ?? (projectName ? `/${projectName}/` : '/');

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? productionBase : '/',
  plugins: [react()],
});
