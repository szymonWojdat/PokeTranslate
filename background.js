let translated = false;

chrome.browserAction.onClicked.addListener(function() {
	if(translated) {
		chrome.tabs.executeScript({file: 'bundle.js'});
		translated = true;
	}
	else{
		// revert back to original - TODO
		translated = false;
	}
});