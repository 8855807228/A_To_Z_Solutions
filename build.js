const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

// Build both applications
console.log('Building ArthaSaarthi Financial Services...');
execSync('cd "ArthaSaarthi Financial Services" && npm run build', {
  stdio: 'inherit',
});

console.log('Building BB Holidays...');
execSync('cd "BB Holidays" && npm run build', { stdio: 'inherit' });

// Create dist directory
const distDir = path.join(__dirname, 'dist');
fs.ensureDirSync(distDir);

// Copy builds to final location
fs.copySync(
  path.join(__dirname, 'ArthaSaarthi Financial Services/dist'),
  path.join(distDir, 'finance'),
);

fs.copySync(
  path.join(__dirname, 'BB Holidays/dist'),
  path.join(distDir, 'holidays'),
);

// Copy landing page
fs.copySync(
  path.join(__dirname, 'BB Holidays/src/pages/LandingPage.jsx'),
  path.join(distDir, 'index.html'),
);

console.log('Build complete!');
