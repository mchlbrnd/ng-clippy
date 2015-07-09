var argv = require('yargs').argv;

// --release flag when executing a task
global.release = argv.release;
global.BASE_MODULE = 'ngClippy';

// Build directories
global.BUILD_FOLDER = './dist';
global.RELEASE_FOLDER = './dist';
global.EXAMPLE_FOLDER = './example';

global.config = {
	paths: {
		src: {
			scripts: ['./src/**/*.js'],
			modules: './src/index.js',
			livereload: [BUILD_FOLDER + '/**/*.*', EXAMPLE_FOLDER + '/**/*.*']
		},
		dest: {
			scripts: BUILD_FOLDER
		}
	},
	filenames: {
		build: {
			scripts: 'ng-clippy.js'
		},
		release: {
			scripts: 'ng-clippy.min.js'
		}
	},
	ports: {
		serverPort: 8888,
		livereloadPort: 9999
	}
};
