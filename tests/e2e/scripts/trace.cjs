#!/usr/bin/env node

const { transformFile, __experimental_registerGlobalTraceConfig } = require("@swc/core");

__experimental_registerGlobalTraceConfig({
	type: "traceEvent",
	fileName: ".trace.json",
});

transformFile("main.test.jsx", {
	cwd: require.resolve(".."),
	jsc: {
		experimental: {
			plugins: [[require.resolve("swc-plugin-static-jsx"), {}]],
		},
	},
});
