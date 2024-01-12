module.exports = {
    module: {
        rules: [
            {
                // this means that whenever we import in a file 
                // that ends with an extension of .mjs or .js 
                // we want it to be processed by babel
                test: /\.m?js$/,
                // this means don't try to run this babel thing 
                // on any file in our node mod file
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // preset-react = babel is going to be processing all the jsx code inside the react
                        // preset-env = transform our code in variety of ways which means its going to take 
                        // es6 code and covert it to es5 so that it can be easily understood by the browser
                        presets: ['@babel/preset-react' , '@babel/preset-env'],
                        // add in additional code to enable different features like async await syntax
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            }
        ]
    }
}