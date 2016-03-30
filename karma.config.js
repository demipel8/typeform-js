
var webpack = require('karma-webpack');

module.exports = function (config) {
	config.set({
		frameworks: [ 'jasmine' ],
		files: [
			'./node_modules/babel-polyfill/browser.js',
			'./node_modules/phantomjs-polyfill/bind-polyfill.js',
			'./spec/**/*.js'
		],
		plugins: [
			webpack,
			'karma-jasmine',
			'karma-phantomjs-launcher',
			'karma-coverage',
			'karma-mocha-reporter'
		],
		browsers: [ 'PhantomJS' ],
		preprocessors: {
			'./spec/**/*.js': ['webpack'],
			'./src/**/*.js': ['webpack']
		},
		reporters: [ 'mocha', 'coverage' ],
		mochaReporter: {
			output: 'minimal'
		},

		coverageReporter: {
			dir: 'reports/coverage',
			reporters: [
				{ type: 'html', subdir: 'report-html' },
				{ type: 'lcov', subdir: 'report-lcov' },
				{ type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
			]
		},
		webpack: {
			module: {
				loaders: [{
					test: /\.(js|jsx)$/, exclude: /(bower_components|node_modules)/,
					loader: 'babel-loader'
				}],
				postLoaders: [{
					test: /\.(js|jsx)$/, exclude: /(node_modules|bower_components|tests)/,
					loader: 'istanbul-instrumenter'
				}]
			}
		},
		webpackMiddleware: { noInfo: true }
	});
};