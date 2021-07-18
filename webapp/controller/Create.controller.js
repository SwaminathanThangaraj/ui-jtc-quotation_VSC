sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
	"use strict";
debugger
	return Controller.extend("sg.gov.jtc.JTC-QNApp.controller.Create", {
		onCreateOpenQNPress: function() {
			debugger
            var oRouter = UIComponent.getRouterFor(this);
            var oDoc = "OPENQN";
            oRouter.navTo("OpenQN", {
                    path: oDoc
                });
        }
	});
});