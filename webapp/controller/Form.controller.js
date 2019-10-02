sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";
	return Controller.extend("ZSHN.COURSE_SAPUI5.controller.Form", {
		onInit: function () {
			var OModel = new JSONModel();
			this.getView().setModel(OModel);
		},
		onFormSend: function () {
			var oModel = this.getView().getModel();
			var data = JSON.parse(oModel.getJSON());
			data.pin = String(Math.floor(Math.random() * (10000 - 1000) + 1000));
            data.dateCreate = String(new Date().toLocaleDateString());
            data.typeUser= data.typeUser ? data.typeUser = "Saving": data.typeUser = "Curren";
			var xhr = new XMLHttpRequest();
			xhr.addEventListener("readystatechange", function () {
				if (this.readyState === 4) {
						MessageToast.show("JSON data that will be send: " + JSON.stringify(data));
				}
			});
			xhr.open("POST", "http://localhost:2403/account");
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(JSON.stringify(data));
		},
		onNavigate: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Inputs");
		}
	});
});