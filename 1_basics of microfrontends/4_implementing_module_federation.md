# steps for microfrontends

1. Designate one app as the host and one as the remote
2. In the remote, decide which module(files) you want to make available to other project
3. set up module federation plugin to expose those files
4. In the host, decide which files you want to get from the remote
5. Set up Module federation plugin to fetch those files
6. In the host, refactor the entry point to load asynchronously
7. In the host, import whatever files you need from the remote
