/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZSHN/COURSE_SAPUI5/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});