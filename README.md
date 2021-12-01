# CLI and node tool for synchronously loading AWS Parameter store values

## Getting started - Typescript / Javascript
Add ssm-loader to your project
```sh
$ npm install ssm-loader
```
<br/>

## Getting started
Globally install ssm-loader
```sh
$ npm install ssm-loader -g
```

Load Parameter store values at path
```sh
$ ssm-loader
```


Load Parameter store values at path in javascript
```node.js
import {getParameters} from "ssm-loader";
let ssmParams = getParameters({
    path: "/dev"
    key?: <AWS_ACCESS_KEY_ID>,
    secret?:  <AWS_SECRET_ACCESS_KEY>,
    region?:  <AWS_DEFAULT_REGION>
})
```
<br/>

## CLI arguments
* ```npx ssm-loader --help``` - Get possible arguments
* ```npx ssm-loader --path "/dev" ``` - get all parameters under the /dev path (*path* is required)
* ```npx ssm-loader --path "/dev" --secret <AWS_SECRET_ACCESS_KEY> --key <AWS_ACCESS_KEY_ID> --region <AWS_DEFAULT_REGION>``` - use custom aws credentials, otherwise, the tool will use whatever is configured in your env (profiles, env variables, etc.)
