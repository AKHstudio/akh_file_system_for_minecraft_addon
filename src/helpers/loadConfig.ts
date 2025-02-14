import { akhConfig } from '@/types/type.js';
import * as fs from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import { pathToFileURL } from 'url';

declare global {
    // eslint-disable-next-line
    var config: akhConfig;
}

async function loadConfig() {
    const configPath = resolve(cwd(), 'akhfs.config.js');
    if (!fs.existsSync(configPath)) {
        throw new Error('Config file not found. "akhfs --init" to create one');
    }

    const configUrl = pathToFileURL(configPath).href;
    const configModule = await import(configUrl);
    const config = configModule.default as akhConfig;
    globalThis.config = config;
}

export { loadConfig };
