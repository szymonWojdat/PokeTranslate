chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript({file: 'translate.js'});
})

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "poketranslate",
    title: "To Pokepaste",
    contexts: ["image"]
  })
})

chrome.contextMenus.onClicked.addListener(function(clickData, tab) {
  const imgURL = clickData["srcUrl"]
  const url = `https://poketranslate.com/ocr/to_pokepaste/?img=${encodeURIComponent(imgURL)}`
  window.open(url, '_blank').focus();
})
