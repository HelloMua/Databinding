sap.ui.require([
    "sap/m/Text",
    "sap/ui/model/json/JSONModel"
], function (Text, JSONModel) {
	"use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    // this.getView().getModel()
	sap.ui.getCore().attachInit(function () {
        // Create a JSON Model from an object literal
        var oModel = new JSONModel({
            greetingText: "Hi, my name is Jeong Mua"
        });

        // Assign the model object to the SAPUI5 core
        sap.ui.getCore().setModel(oModel);
        // this.getView().setModel(oModel);

		// Create a text UI element that displays a hardcoded text string
		new Text({
            text: "Hi, my name is Jeong Mua"
        }).placeAt("content");      // index.html에 있는 body의 id와 연결
    });
});