module.exports = {
	  testEnvironment: "node",
	  testMatch: [
		      "**/test/**/*.[jt]s",
		      "**/__tests__/**/*.[jt]s?(x)",
		      "**/?(*.)+(spec|test).[tj]s?(x)"
		    ],
	  transform: { ".js": "jest-esm-transformer" },
	  verbose: true
}
