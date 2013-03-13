module.exports = function(grunt){

	["grunt-crx"].forEach(function(v){ grunt.loadNpmTasks(v) })
	grunt.initConfig({
		manifest: grunt.file.readJSON("crx/manifest.json"),
		pkg: grunt.file.readJSON("package.json"),
		crx: {
			notifactory: {
				src: "crx",
				dest: "dist",
				privateKey: "/home/rektide/.ssh/chrome-apps.pem",
				baseURL: "http://gk.xn--theric.oua.net/notifactory/"
		}}
	})

	grunt.loadNpmTasks("grunt-crx")

	grunt.registerTask("default", ["crx:notifactory"])
}
