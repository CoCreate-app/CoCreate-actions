let cdnUrl = "https://server.cocreate.app/";



let glob = require("glob");
let fs = require('fs');
const prettier = require("prettier");
const path = require("path")

function globUpdater(er, files) {
  if (er)
    console.log(files, 'glob resolving issue')
  else
    files.forEach(filename => update(filename))
}




function update(webpackPath) {



  let dir = path.dirname(webpackPath);

  // component name
  let name = path.basename(dir);
  // component entry
  
  
  let entry;
  
  if(fs.existsSync( path.resolve(dir, './src/index.js') ))
  entry = "./src/index.js";
  else
  entry = './src/' + name + '.js';

  // get component name in came case "cocreate" less
  let componentName = toCamelCase(name);
  if (componentName.startsWith('CoCreate'))
    componentName = componentName.substr(8);

  if (componentName === componentName.toUpperCase())
    componentName = componentName.toLowerCase();
  else
    componentName = lowerCaseFirstChar(componentName)


  // has template to inject script and styles on dev compile
  let hasTemplate = false;
  if (fs.existsSync(path.resolve(dir, './src/index.html')))
    hasTemplate = true;
  let fileContent = `const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let isProduction = process.env.NODE_ENV === "production";
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
${ hasTemplate ? "const HtmlWebpackPlugin = require('html-webpack-plugin');" : ''}




module.exports = {
  entry: {
    '${name}': '${entry}'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProduction ? '[name].min.js' : '[name]${hasTemplate ? '[hash]': ''}.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: ${ componentName ? `['CoCreate', '${componentName}']` : 'CoCreate'},
    globalObject: "this",
    // publicPath: 'https://server.cocreate.app/CoCreateJS/dist/'
  },
  
  
  plugins: [new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    ${ hasTemplate ? `
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ` : ''}
    ],
  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript
  // minifying and other thing so let's set mode to development
  mode: isProduction ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-transform-modules-commonjs"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader", options: { injectType: "linkTag" } },
          "file-loader",
        ],
      },
    ],
  },


  // add source map
  ...(isProduction ? {} : { devtool: 'eval-source-map' }),

optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        // cache: true,
        parallel: true,
        // sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          // extractComments: 'all',
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
      splitChunks: {
        chunks: 'all',
        minSize: 200,
        // maxSize: 99999,
        //minChunks: 1,
        ${ !hasTemplate ? `    
        cacheGroups: {
          defaultVendors: false
        },
        ` : ''}
    
      }
  },
}
`;
  let formated = prettier.format(fileContent, { semi: false, parser: "babel" });

  if (fs.existsSync(webpackPath))
    fs.unlinkSync(webpackPath)
  fs.writeFileSync(webpackPath, formated)
  // console.log(fileContent)
  // process.exit()

}



glob("../CoCreate-components/*/webpack.config.js", globUpdater)
glob("../CoCreate-modules/*/webpack.config.js", globUpdater)
glob("../CoCreate-plugins/*/webpack.config.js", globUpdater)
glob("../CoCreateCSS/webpack.config.js", globUpdater)





function toCamelCase(str) {
  let index = 0;
  do {
    index = str.indexOf("-", index);
    if (index !== -1) {
      let t = str.substring(0, index);
      t += String.fromCharCode(str.charCodeAt(index + 1) - 32);
      t += str.substr(index + 2);
      str = t;
    }
    else break;
  } while (true);
  return str;
}

function lowerCaseFirstChar(str) {
  return String.fromCharCode(str.charCodeAt(0) + 32) + str.substr(1);
}


//
