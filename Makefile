transpile:
	@./node_modules/.bin/babel --presets es2015 . --ignore node_modules -q -d es5
