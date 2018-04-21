"use strict"

// Credit: https://stackoverflow.com/questions/33078967/node-js-call-a-local-function-within-module-exports
var self = module.exports = {
    writeToOptionsDatabase : function() {
		console.log("TASKS: Going to write from the instruments file again dude! v5.0");
	},
    refreshOptionsDatabase : function (url) {
		console.log("Going to curl the url from terminal: " + url);
	}
}