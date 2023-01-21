# module sharing

1. two project can have same dependancy
2. to load it once using webpack use ^ or ~ in package.json to match them by version
3. shared: ['faker'] loades multiple versions of faker diffrentiated py ^ or ~ in package.json
4. shared: { faker: { singleton: true } } load only one version of faker irrespective of diffrent versions and throws warning
