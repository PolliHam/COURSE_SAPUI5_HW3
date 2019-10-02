/*global QUnit*/

sap.ui.define([
	"ZSHN/COURSE_SAPUI5/controller/Form.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Form Controller");

	QUnit.test("I should test the Form controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});