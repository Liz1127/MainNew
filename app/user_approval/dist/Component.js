sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","my/userapproval/model/models"],function(e,t,i){"use strict";return e.extend("my.userapproval.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
//# sourceMappingURL=Component.js.map