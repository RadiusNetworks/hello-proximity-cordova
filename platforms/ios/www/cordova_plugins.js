cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.radiusnetworks.cordova.proximitykit/www/proximitykit.js",
        "id": "com.radiusnetworks.cordova.proximitykit.proximitykit",
        "clobbers": [
            "radiusnetworks.plugins.proximitykit"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/console-via-logger.js",
        "id": "org.apache.cordova.console.console",
        "clobbers": [
            "console"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/logger.js",
        "id": "org.apache.cordova.console.logger",
        "clobbers": [
            "cordova.logger"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.radiusnetworks.cordova.proximitykit": "0.5.1",
    "org.apache.cordova.console": "0.2.10"
}
// BOTTOM OF METADATA
});