const path = require('path')                                    
const HtmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {                                    
  entry: './src/index.js',                            
  output: {                                           
    path: path.join(__dirname, '/dist'),           
    filename: 'index_bundle.js'
  },
  module: {                                           
    rules: [
      {
        test: /\.js$/,                       
        exclude: /node_module/,   
        use:{
          loader: 'babel-loader'				
        }
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]},
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'               
    })
  ]
}