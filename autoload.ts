import { getParameters } from "./";

const { SSM_PATH, SSM_PATHS } = process.env;
let paths = SSM_PATHS ? SSM_PATHS.split(",") : [SSM_PATH];
if (paths && paths.length) {
    paths.forEach((p) => {
        if (p && typeof p == "string") {
            let params = getParameters({ path: p });
            process.env = { ...process.env, ...params };
        }
    });
}
const DID_LOAD_ON_INIT = !!SSM_PATH;
export { DID_LOAD_ON_INIT };
