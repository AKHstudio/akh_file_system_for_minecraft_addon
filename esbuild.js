import * as esbuild from 'esbuild';
import chokidar from 'chokidar';
import { execSync } from 'child_process';
import { argv, exit, on } from 'process';
const arg = argv[2];

const buildOptions = {
    entryPoints: ['src/**/*.ts'],
    bundle: true,
    outdir: 'dist',
    minify: false,
    platform: 'node',
    target: 'ES6',
    tsconfig: './src/tsconfig.json',
    format: 'esm',
    packages: 'external',
};

if (arg === '--watch') {
    console.log('Watching for changes...');

    chokidar
        .watch('./src', {
            interval: 100,
            awaitWriteFinish: true,
        })
        .on('change', async (path) => {
            console.log('File changed:', path);

            try {
                await esbuild.build(buildOptions);
                execSync('tsc -p ./src/tsconfig.json --noEmit', { stdio: 'inherit' });
                console.log('Build complete!');
            } catch (error) {
                console.error(error);
            }
        });

    on('SIGINT', () => {
        console.log('Goodbye!');
        exit(0);
    });
} else {
    await esbuild.build(buildOptions);
    execSync('tsc -p ./src/tsconfig.json --noEmit', { stdio: 'inherit' });
    console.log('Build complete!');
}
