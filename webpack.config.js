const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/app.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	},
	module: {
		rules: [{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
		  	},{
				test: /\.(scss)$/,
				use: [{
						// Adds CSS to the DOM by injecting a `<style>` tag
						loader: 'style-loader'
					},
					{
						// Interprets `@import` and `url()` like `import/require()` and will resolve them
						loader: 'css-loader'
					},
					{
						// Loader for webpack to process CSS with PostCSS
						loader: 'postcss-loader',
						options: {
							plugins: function () {
								return [
									require('autoprefixer')
								];
							}
						}
					},
					{
						// Loads a SASS/SCSS file and compiles it to CSS
						loader: 'sass-loader'
					}
				]
		}]
	}
};