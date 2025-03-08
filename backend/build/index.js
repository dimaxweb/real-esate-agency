import esbuild from 'esbuild';
import chokidar from 'chokidar';
import { exec } from 'child_process';
import { builtinModules } from 'module';

const build = async () => {
  try {
    await esbuild.build({
      entryPoints: ['src/server.ts'], // Change this to your main entry file
      outdir: 'dist', // Output directory
      format: 'esm', // Compile to CommonJS  modules
      target: 'esnext', // Ensure ESNext output
      bundle: true,
      platform: 'node',
      sourcemap: true,
      minify: false, // Keep it readable for debugging
      logLevel: 'info',
      external: [...builtinModules]
    });
    console.log('[esbuild] Build completed');
  } catch (error) {
    console.error('[esbuild] Build failed:', error);
  }
};

// Function to restart the Node.js server
let server;
const restartServer = () => {
  if (server) {
    server.kill(); // Kill the existing server process
  }
  server = exec('node dist/server.js'); // Restart the server
  server.stdout.pipe(process.stdout);
  server.stderr.pipe(process.stderr);
};

// Function to run Mocha tests
const runTests = () => {
  console.log('[mocha] Running tests...');
  exec('npx mocha --recursive', (error, stdout, stderr) => {
    if (error) {
      console.error(`[mocha] Test run failed:\n${stderr}`);
    } else {
      console.log(`[mocha] Test results:\n${stdout}`);
    }
  });
};

// Initial build and server start
build().then(() => {
  restartServer();
  //runTests();
});

// Watch `src/` and `test/` directories for changes
chokidar.watch(['src/**/*.{ts,js,json}', 'test/**/*.{ts,js}']).on('change', async (filePath) => {
  console.log(`[watcher] File changed: ${filePath}, rebuilding...`);
  await build();
  restartServer();
  //runTests();
});
