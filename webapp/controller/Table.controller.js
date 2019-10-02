sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("ZSHN.COURSE_SAPUI5.controller.Table", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZSHN.COURSE_SAPUI5.view.Table
		 */
		onInit: function () {
			//var data = {};
			var OModel = new JSONModel();
			var xhr = new XMLHttpRequest();
			xhr.addEventListener("readystatechange", function () {
				if (this.readyState === 4) {
					var result=JSON.parse(this.response);
					//data.accounts=result;
            	    //console.log(data);
            	    OModel.setData(result);
				}
			});
			xhr.open("GET", "http://localhost:2403/account");
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send();
			this.getView().setModel(OModel, 'accounts');
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZSHN.COURSE_SAPUI5.view.Table
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZSHN.COURSE_SAPUI5.view.Table
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZSHN.COURSE_SAPUI5.view.Table
		 */
		//	onExit: function() {
		//
		//	}

	});

});