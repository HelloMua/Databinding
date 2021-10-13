sap.ui.require([
    "sap/m/Text",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/BindingMode",
    "sap/ui/model/resource/ResourceModel"
], function (Text, JSONModel, XMLView, BindingMode, ResourceModel) {
	"use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    // this.getView().getModel()
	sap.ui.getCore().attachInit(function () {

        var oProductModel = new JSONModel();
        oProductModel.loadData("./model/Products.json");
        sap.ui.getCore().setModel(oProductModel, "products");

        // Create a JSON Model from an object literal
        var oModel = new JSONModel({
            firstName: "Mua",
            lastName: "Jeong",
            enabled: true,
            address: {
                street: "1 Any Lane",
                city: "Walldorf",
                zip: "69190",
                country: "Germany"
            },
            salesAmount: 12345.6789,
            priceThreshold: 20,
            currencyCode: "EUR",
            panelHeaderText: "Data Binding Basics"
        });

        var oResourceModel = new ResourceModel({
            bundleName: "sap.ui.demo.db.i18n.i18n",
            supportedLocales: ["", "de"],
            fallbackLocale: ""
        })

        sap.ui.getCore().setModel(oResourceModel, "i18n");

        // oModel.setDefaultBindingMode(BindingMode.OneWay);

        // Assign the model object to the SAPUI5 core
        sap.ui.getCore().setModel(oModel);
        // this.getView().setModel(oModel);와 같은 의미

        // Display the XML view called "App"
        var oView = new XMLView({
            viewName: "sap.ui.demo.db.view.App"
        })

        // Register the view with the message manager
        sap.ui.getCore().getMessageManager().registerObject(oView, true);

        oView.placeAt("content");
    });
});