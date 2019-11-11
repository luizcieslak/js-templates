module.exports = {
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
	moduleNameMapper: {
		'.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
		'.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testPathIgnorePatterns: [`node_modules`, `.cache`],
	transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
	globals: {
		__PATH_PREFIX__: ``
	},
	setupFiles: [`<rootDir>/loadershim.js`],
	projects: [
		{
			displayName: 'test'
		},
		{
			runner: 'jest-runner-eslint',
			displayName: 'lint',
			testMatch: ['<rootDir>/src/*.js', '<rootDir>/src/**/*.tsx']
		}
	],
	watchPlugins: ['jest-runner-eslint/watch-fix']
}
