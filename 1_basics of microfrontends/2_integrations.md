# integrations

1. The process of combining two microfrontends using once container is called integration
2. there are many type of integrations and none of them is perfect each one has it's own up and downside

# type of integrations

1. buid time integration (Before container gets loaded in the browser, it gets access to ProductList source code)
2. runtime integration (After container gets loaded in the browser, it gets access to Productlist source code)
3. Server Integration (While sending down Js to load up container, a server decides on whether or not to include ProductsList source)

# Build - Time Integration

1. Engineering team develops ProductList
2. Time to deploy
3. Publish ProductList as an Npm Package to Npm Registry
4. Team in charge of container installs ProductList as a dependancy
5. Container team builds their app
6. Output bundle that includes all the code for ProductList

## Pros

1. Easy to setup and understand

## Cons

1. Container has to be re-deployed every time ProductList is updated
2. Tempting to tightyly couple the Container + ProductList together

# Run - Time Integration

1. Engineering team developes ProductList
2. Time To deploye
3. ProductList code deployed at https://my-app.com/productlist.js
4. User navigaties to my-app.co, Container app is loaded
5. Container app fetches productlist.js and executes its in runtime only when request made

## Pros

1. ProductList can be deployed independently at any time
2. Diffrent versions of ProductList can be deployed and Container can decide which one to use

## Cons

1. Tooling + setup is far more complicated

### Runtime integration is Hardest to setup + understand

### Most flexible and performat solution around right now

### Be aware - we will spend a lot of time focusing on Webpack and how it works
