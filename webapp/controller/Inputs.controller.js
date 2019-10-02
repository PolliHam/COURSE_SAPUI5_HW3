sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("ZSHN.COURSE_SAPUI5.controller.Inputs", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZSHN.COURSE_SAPUI5.view.Inputs
		 */
		onInit: function () {},

		onNavigate: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
			if (oEvent.getParameter("id").includes("btnBack")) {
				oRouter.navTo("Form");
			}
			else{
				oRouter.navTo("Table");
			}
		}
	});
});