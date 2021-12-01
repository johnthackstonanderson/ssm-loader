import { execSync } from "child_process";

const getParameters = function (options: SSMLoaderGetParamtersOptions): SSMParameters {
    if (options.path && options.path != "/") {
        let flagStr = Object.keys(options)
            .map((k) => "--" + k.toLowerCase() + ' "' + options[k] + '"')
            .join(" ");
        try {
            let result = execSync(`ssm-loader ` + flagStr).toString("utf-8");
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
interface SSMLoaderGetParamtersOptions {
    path: string;
    key?: string;
    secret?: string;
    region?: string;
}
interface SSMParameters {
    [key: string]: string;
}
