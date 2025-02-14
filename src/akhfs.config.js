import { cwd } from 'process';
import { homedir } from 'os';

export default {
    srcDir: cwd() + '/src',
    distDir: cwd() + '/dist',
    BuildDir: cwd() + '/build',
    targetDirRoot: homedir() + '/AppData/Local/Packages/Microsoft.MinecraftUWP_8wekyb3d8bbwe/LocalState/games/com.mojang',
};
