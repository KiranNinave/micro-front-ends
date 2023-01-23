# Requirements of microfrontend architecture for large apps

1. zero coupling between child projects except share libraries using Module frederation system
2. zero coupling between container and child apps (we can have tiny bit of communicaition but be can also avoid it)
3. CSS from one project shouldn't affect another
4. Version control (monorepo vs seperate) shouldn't have any impact on the overall project
5. container should be able to decide to always use the latest version of a microfrontend or specify a specific version
