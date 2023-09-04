# THIS PROJECT IS A FORK OF [nordnet/cordova-hot-code-push-cli](https://github.com/nordnet/cordova-hot-code-push-cli)

The initial project uses outdated dependencies since it has been deprecated for a long time. We had to fork it to update deps.
In addition, we've removed almost all functionality except building chcp config file because we don't need it.

## Documentation

### Installation

```sh
npm install -g https://github.com/Saritasa/cordova-hot-code-push-cli.git
```

### Usage

```sh
cordova-hcp build [www_directory]
```

where:
- `[www_directory]` - path to the directory with your web project. If not specified - `www` is used.

Command is used to prepare project for deployment and to generate plugin specific configuration files inside `www` folder:
- `chcp.json` - holds release related information.
- `chcp.manifest` - holds information about web project files: their names (relative paths) and hashes.

When executed - you will see in the terminal window:
```
Running build
Build 2015.09.07-11.20.55 created in /Cordova/TestProject/www
```

As a result, `chcp.json` and `chcp.manifest` files are generated in the `www` folder and project is ready for deployment.

More information about those configs can be found on [Cordova Hot Code Push plugin](https://github.com/nordnet/cordova-hot-code-push) documentation page.


### Contribution

If you need to update the package, make sure you build it before you push it to github. Our projects refer to github repo, specifically dist folder. The workflow is following:

- Do some work in `src` folder
- Run `npm run transpile` to prepare dist folder
- Push to github
