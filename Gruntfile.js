module.exports = function(grunt){

	["grunt-crx"].forEach(function(v){ grunt.loadNpmTasks(v) })

	grunt.initConfig({
		"crx": {
			"notifactory": {
				src: "crx",
				dest: "dist/crx",
				privateKey: "~/.ssh/chrome-apps.pem"
		}}
	})

	grunt.loadNpmTasks("grunt-crx")

	grunt.registerTask("default", ["crx:notifactory"])
}
