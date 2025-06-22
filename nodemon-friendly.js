const { exec } = require('child_process');

console.log('Running prerender...');
exec('npm run prerender', (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Prerender failed:\n${stderr}`);
    return;
  }

  console.log(stdout);
  console.log('✅ Prerender successful. Starting server...');

  const serve = exec('npx serve dist/safevig-website/browser  -s -l 4000');

  // Pipe output to terminal so we see logs
  serve.stdout.pipe(process.stdout);
  serve.stderr.pipe(process.stderr);
});
