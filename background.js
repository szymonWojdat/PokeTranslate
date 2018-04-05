chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.executeScript({file: 'bundle.js'});
});