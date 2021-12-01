#!/usr/bin/env node

import { GetParametersByPathCommand, GetParametersByPathResult, SSMClient } from "@aws-sdk/client-ssm";
import yargs from "yargs";

async function initCli(): Promise<ssmLoaderCliArgs> {
    return yargs(process.argv.slice(2))
        .options({
            path: { type: "string", describe: "AWS Parameter store path", alias: "p" },
            key: { type: "string", describe: "AWS access key id", alias: "k" },
            secret: { type: "string", describe: "AWS access key secret", alias: "s" },
            region: { type: "string", describe: "AWS Region", alias: "r" }
        })
        .demandOption("path", "Missing paramter path.")
        .implies({ key: ["secret"], secret: ["key"] })
        .version(false).argv;
}

let getAllParamters = async (opts: ssmLoaderCliArgs) => {
    let config = null;
    if (opts.key && opts.secret && opts.region) {
        config = {
            region: opts.region,
            credentials: { accessKeyId: opts.key, secretAccessKey: opts.secret }
        };
    }
    const client: SSMClient = new SSMClient(config);
    let Path = "/" + opts.path.replace(/^\//, "");

    let cmd: GetParametersByPathCommand,
        next: string = null,
        params: any = {};
    do {
        cmd = new GetParametersByPathCommand({ Path: Path, NextToken: next, WithDecryption: true, Recursive: true });
        let res: GetParametersByPathResult = await client.send(cmd);
        if (res && res.Parameters) {
            res.Parameters.forEach((param) => {
                params[param.Name.split("/").pop()] = param.Value;
            });
        }
        next = res.NextToken;
    } while (next);
    return params;
};
initCli().then((opts) =>
    getAllParamters(opts)
        .then((newEnv) => {
            console.log(JSON.stringify(newEnv));
            process.exit(0);
        })
        .catch((e) => {
            console.log(JSON.stringify({ error: e }));
            process.exit(1);
        })
);
interface ssmLoaderCliArgs {
    path: string;
    key?: string;
    secret?: string;
    region?: string;
}
