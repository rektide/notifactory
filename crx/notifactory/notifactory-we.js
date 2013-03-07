// insureListener, not addListener
console.log("installing")
chrome.runtime.onInstalled.addListener(function(e){
	var reason;
	["install","update","chrome_update"].forEach(function(v){if(e.reason == v) reason= v})
	if(reason == "install"){
		//chrome.events.addRules(function(e){
		//	debugger
		//	var worker= new SharedWorker("handler.js")
		//}, {schemes: ["application/notifactor+json",
		//              "application/atom+xml"]})
	}
})
console.log("installed",chrome.runtime.onInstalled)
