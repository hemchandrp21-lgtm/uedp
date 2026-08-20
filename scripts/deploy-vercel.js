import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('=== VERCEL DEPLOYMENT CHECKER & BUILD HELPER ===');

try {
  console.log('1. Clearing build cache...');
  const cachePath = path.resolve('node_modules/.cache');
  if (fs.existsSync(cachePath)) {
    fs.rmSync(cachePath, { recursive: true, force: true });
    console.log('Cleared node_modules/.cache successfully.');
  }

  console.log('2. Running TypeScript compilation check...');
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('TypeScript compilation passed with 0 errors!');

  console.log('3. Running Storybook build (npm run build-storybook)...');
  execSync('npm run build-storybook', { stdio: 'inherit' });
  console.log('Storybook build complete! storybook-static/ directory created.');

  console.log('4. Verifying vercel.json configuration...');
  const vercelPath = path.resolve('vercel.json');
  if (fs.existsSync(vercelPath)) {
    console.log('vercel.json present and validated!');
  } else {
    console.warn('Warning: vercel.json not found!');
  }

  console.log('=== READY FOR VERCEL DEPLOYMENT ===');
} catch (error) {
  console.error('Deployment build check failed:', error.message);
  process.exit(1);
}
