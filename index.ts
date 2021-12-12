import { execSync } from "child_process";
const getCliPath = function () {
    if (process.env.NODE_ENV == "test") {
        return "node " + process.env.PWD + "/dist/bin/cli.js";
    } else {
        return process.env.PWD + "/node_modules/.bin/ssm-loader";
    }
};

const getParameters = function (options: SSMLoaderGetParametersOptions): SSMParameters {
    if (options.path && options.path != "/") {
        let flagStr = Object.keys(options)
            .map((k) => "--" + k.toLowerCase() + ' "' + options[k] + '"')
            .join(" ");
        try {
            let result = execSync(`${getCliPath()} ` + flagStr).toString("utf-8");
            let resultObj: any = JSON.parse(result);
            if (resultObj && !resultObj.error) {
                return resultObj;
            }
        } catch (e) {
            if (e.output) {
                console.error(e.output.toString("utf-8"));
            }
            return {};
        }
    } else {
        throw new Error("No param path specified");
    }
};
export { getParameters };
export default getParameters;
export interface SSMLoaderGetParametersOptions {
    path: string;
    key?: string;
    secret?: string;
    region?: string;
}
export interface SSMParameters {
    [key: string]: string;
}
