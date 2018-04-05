const constants = require('./constants');
let dict = constants.dictionary();

let elements = document.getElementsByTagName('*');

let pattern = Object.keys(dict);
pattern = "(?:" + pattern.join(")|(?:") + ")";
pattern = new RegExp(pattern, "g");
for (let i = 0; i < elements.length; i++) {
	let element = elements[i];
	for (let j = 0; j < element.childNodes.length; j++) {
		let node = element.childNodes[j];
		if (node.nodeType === 3) {
			let text = node.nodeValue;
			let replacedText = text.replace(pattern, function (full_match) {
				return dict[full_match];
			});

			if (replacedText !== text) {
				element.replaceChild(document.createTextNode(replacedText), node);
			}
		}
	}
}