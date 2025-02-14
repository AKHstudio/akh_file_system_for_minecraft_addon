#!/usr/bin/env node

import { init } from '@/init.js';
import { Command, Option } from 'commander';
import { argv } from 'process';
const program = new Command();

program.option('--init', 'Initialize the project').action(() => {
    init();
});

program
    .command('build [addons...]')
    .description('Build the project')
    .option('-d, --development', 'Build for development mode')
    .addOption(new Option('-o, --only <type>', 'Build only the specified addons').choices(['bp', 'rp']))
    .action((addons, options) => {
        console.log({ addons, options });
    });

program.parse(argv);

// prettier-ignore
// yargs(hideBin(process.argv))
//     .command(
//         "build [addons...]",
//         "Build the project",
//         (yargs) => {
//             yargs
//             .positional("addons", {
//                 type: "string",
//                 description: "Addons to build",
//             })
//             .option("development", {
//                 alias: "d",
//                 type: "boolean",
//                 description: "Build for development mode",
//             })
//             .option("only", {
//                 alias: "o",
//                 type: "string",
//                 description: "Build only the specified addons",
//                 choices: ["bp" , "rp"],
//             })
//         },
//         async (argv) => {
//             console.log(argv);
//         }
//     )
//     .locale("en")
//     .help()
//     .version()
//     .argv;
