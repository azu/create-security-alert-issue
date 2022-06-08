#!/usr/bin/env node
const cli = require("../lib/cli");
cli.run()
    .then((result) => {
        console.log(result);
        process.exit(0);
    })
    .catch((error) => {
        console.error(error.stack || error);
        process.exit(1);
    });
