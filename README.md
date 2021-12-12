# CLI and node tool for synchronously loading AWS Parameter store values

## Getting started - Typescript / Javascript
Add ssm-sync to your project
```sh
$ npm install @scnr/ssm-sync
#or
$ yarn add @scnr/ssm-sync
```
<br/>

## Getting started
Globally install ssm-sync
```sh
$ npm install @scnr/ssm-sync -g
#or
$ yarn global add @scnr/ssm-sync
```

Load Parameter store values at path=PARAMETER_PATH
```sh
$ ssm-sync --path "/<PARAMETER_PATH>"
```


Load Parameter store values at path in javascript
```node.js
import {getParameters} from "@scnr/ssm-sync";
let ssmParams = getParameters({
    path: "/dev"
    key?: <AWS_ACCESS_KEY_ID>,
    secret?:  <AWS_SECRET_ACCESS_KEY>,
    region?:  <AWS_DEFAULT_REGION>
})
```
<br/>

## CLI arguments
* ```npx ssm-sync --help``` - Get possible arguments
* ```npx ssm-sync --path "/dev" ``` - get all parameters under the /dev path (*path* is required)
* ```npx ssm-sync --path "/dev" --secret <AWS_SECRET_ACCESS_KEY> --key <AWS_ACCESS_KEY_ID> --region <AWS_DEFAULT_REGION>``` - use custom aws credentials, otherwise, the tool will use whatever is configured in your env (profiles, env variables, etc.)
