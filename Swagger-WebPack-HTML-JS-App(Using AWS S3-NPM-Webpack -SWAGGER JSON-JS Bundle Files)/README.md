## Swagger-HTML-App(Using AWS S3-NPM-Webpack -SWAGGER JSON-JS Bunddle FIles).zip

- comment loaded according to swagger file type, if yaml swagger file is used then in webpack.config.js use yaml loaded else json loader(this json loader is not required it is work as default).

## How to run application

1. Install node packages using
- **$ npm install**

2. Run project 
- package.json script is configured already, so here we will make build using webpack
- webpack merge and minified all the js and related file in bundle
- entry point is mentioned in dist folder as index.html
- all webpack related configuration mentioned in webpack.config.js
- **$ npm run build**

## Packages Used

- assert
- buffer
- crypto-browserify
- css-loader
- html-webpack-plugin
- https-browserify
- json-loader
- os-browserify
- process
- react-app-rewired
- stream-browserify
- stream-http
- style-loader
- url
- webpack
- webpack-cli
- yaml-loader

## Reference

1. Node app with bundler/webpack
 **https://robertbulmer.medium.com/api-documentation-using-aws-s3-and-swagger-ui-dabb834540e5**

