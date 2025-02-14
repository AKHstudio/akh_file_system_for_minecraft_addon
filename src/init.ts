import fs from 'fs';
import { get } from 'https';
import { resolve } from 'path';
import { cwd } from 'process';

export function init() {
    const url = 'https://raw.githubusercontent.com/AKHstudio/akh_file_system_for_minecraft_addon/refs/heads/cleate-app/src/akhfs.config.js';
    const destinationPath = resolve(cwd(), 'akhfs.config.js');

    if (!fs.existsSync(destinationPath)) {
        const file = fs.createWriteStream(destinationPath);
        get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
            });
        }).on('error', (err) => {
            fs.unlink(destinationPath, () => {}); // Delete the file async. (But we don't check the result)
            console.error('Error downloading file:', err.message);
        });
    }
}
