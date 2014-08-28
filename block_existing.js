/*\
title: $:/core/modules/upgraders/block_existing.js
type: application/javascript
module-type: upgrader

Upgrader module that suppresses existing tiddlers 

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
	if(existingTiddler && incomingTiddler["plugin-type"] == undefined ) {
		//tiddlers[title] = Object.create(null);
		messages[title] = "tiddler that already exists in this wiki";
	}
		
	});
	return messages;
};

})();