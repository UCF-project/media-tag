#Configurations

* development-es6 : no-source-map, es6 builds, clear
* development-es5 : no-source-map, babel es5 builds, clear
* production-cjs : source-map, es6 builds, uglyfied
* production-umd : no-source-map, es5 builds, clear, single file compatible requirejs

## Setup a node environnement

Example :

```
	export NODE_ENV=development-es6
```

:warning: Without node environnement the build fails
