var path = require("path");
var webpack = require("webpack");
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

var libraryName = "Facetoo";
function DtsBundlePlugin() {}
DtsBundlePlugin.prototype.apply = function(compiler) {
  compiler.plugin("done", function() {
    var dts = require("dts-bundle");

    dts.bundle({
      name: libraryName,
      main: "dist/src/ts/main/Facet.d.ts",
      out: "../index.d.ts",
      baseDir: "dist",
      removeSource: true,
      outputAsModuleFolder: true // to use npm in-package typings
    });
  });
};

module.exports = {
  target: "web",
  entry: __dirname + "/src/ts/main/Facet.ts",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "facetoo-bundle.js",
    library: "Facetoo",
    libraryTarget: "umd"
  },
  externals: {
    jquery: "jQuery",
    handlebars: "Handlebars"
  },
  resolve: {
    modules: [path.resolve("./src"), "node_modules"], // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    // alias: {
    //   'handlebars' : 'handlebars/dist/handlebars.min.js'
    // }
  },
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      { test: /\.handlebars$/,
        loader: "handlebars-loader",
        options: {
            helperDirs: [
              __dirname + "/src/html/helpers",
            ]
        }
      },
      {
        test: /\.tsx?$/,
        enforce: "pre",
        loader: "tslint-loader",
        options: {
          emitErrors: true,
          failOnHint: true
        }
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: false,
            removeComments: true,
            collapseWhitespace: true
          }
        }
      }
    ]
  },
  plugins: [new DtsBundlePlugin()]
};
