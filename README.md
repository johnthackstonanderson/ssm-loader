# CLI and node tool for synchronously loading AWS Parameter store values

## Getting started - Typescript / Javascript
Add ssm-sync to your project
```sh
$ npm install ssm-sync
#or
$ yarn add ssm-sync
```
<br/>

## Getting started
Globally install ssm-sync
```sh
$ npm install ssm-sync -g
#or
$ yarn global add ssm-sync
```

Load Parameter store values at path=PARAMETER_PATH
```sh
$ ssm-sync --path "/<PARAMETER_PATH>"
```


Load Parameter store values at path in javascript
```node.js
import {getParameters} from "ssm-sync";
let ssmParams = getParameters({
    path: "/dev"
    key?: <AWS_ACCESS_KEY_ID>,
    secret?:  <AWS_SECRET_ACCESS_KEY>,
    region?:  <AWS_DEFAULT_REGION>
})
```
<br/>


Load Parameter Store values at path with env vars and autoload into process.env
```bash
SSM_PATH='/path/to/ssm/params'
#or
SSM_PATHS='/path/to/ssm/params,/path/to/other/params,...'
```
Note the parameters will be loaded in order, so each path in SSM_PATHS will override previously loaded paths
## CLI arguments
* ```npx ssm-sync --help``` - Get possible arguments
* ```npx ssm-sync --path "/dev" ``` - get all parameters under the /dev path (*path* is required)
* ```npx ssm-sync --path "/dev" --secret <AWS_SECRET_ACCESS_KEY> --key <AWS_ACCESS_KEY_ID> --region <AWS_DEFAULT_REGION>``` - use custom aws credentials, otherwise, the tool will use whatever is configured in your env (profiles, env variables, etc.)
