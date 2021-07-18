sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
	"use strict";

	return Controller.extend("sg.gov.jtc.JTC-QNApp.controller.Master", {
		
		onCreatePress: function() {
			debugger
            var oRouter = UIComponent.getRouterFor(this);
            var oDoc = "CREATE";
            oRouter.navTo("Create", {
                    path: oDoc
                });
        },
        onCreatePress1: function() {
			debugger
            var oRouter = UIComponent.getRouterFor(this);
            var oDoc = "OpenQN";
            oRouter.navTo("OpenQN", {
                    path: oDoc
                });
        }
	});

});