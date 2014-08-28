/*\
title: $:/core/modules/upgraders/mark_existing.js
type: application/javascript
module-type: upgrader

Upgrader module that marks already existing tiddlers 

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

exports.upgrade = function(wiki,titles,tiddlers) {
	var self = this,
		messages = {};
	// Check for tiddlers on our list
	$tw.utils.each(titles,function(title) {
	var existingTiddler = wiki.getTiddler(title);
	if(existingTiddler && existingTiddler["plugin-type"] == undefined ) {
		messages[title] = "tiddler that already exists in this wiki";
	}
		
	});
	return messages;
};

})();