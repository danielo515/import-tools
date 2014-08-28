/*\
title: $:/plugins/danielo515/import-tools/uncheck.js
type: application/javascript
module-type: widget

Uncheck widget

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var Widget = require("$:/core/modules/widgets/widget.js").widget;

var UncheckWidget = function(parseTreeNode,options) {
	this.initialise(parseTreeNode,options);
	this.addEventListeners([
		{type: "tw-uncheck-existing", handler: "handleUncheckExistingEvent"}
	]);
};

/*
Inherit from the base widget class
*/
UncheckWidget.prototype = new Widget();

/*
Render this widget into the DOM
*/
UncheckWidget.prototype.render = function(parent,nextSibling) {
	this.parentDomNode = parent;
	this.computeAttributes();
	this.execute();
	this.renderChildren(parent,nextSibling);
};

/*
Compute the internal state of the widget
*/
UncheckWidget.prototype.execute = function() {
	// Get our parameters
	//this.storyTitle = this.getAttribute("story");
	// Construct the child widgets
	this.makeChildWidgets();
};

/*
Selectively refreshes the widget if needed. Returns true if the widget or any of its children needed re-rendering
*/
UncheckWidget.prototype.refresh = function(changedTiddlers) {
	return false;
};

UncheckWidget.prototype.handleUncheckExistingEvent = function(event){
	var self = this, newFields = {},
	importTiddler = this.wiki.getTiddler(event.param),
		importData = this.wiki.getTiddlerData(event.param,{tiddlers: {}});
		
		$tw.utils.each(importData.tiddlers,function(tiddlerFields) {
			var title = tiddlerFields.title, 
			existingTiddler = self.wiki.getTiddler(title);
			if(existingTiddler && existingTiddler["plugin-type"] == undefined ) {
				newFields["selection-" + title] = "unchecked";
				}
				});

		this.wiki.addTiddler(new $tw.Tiddler(importTiddler,newFields));
		};

exports.uncheck = UncheckWidget;

})();