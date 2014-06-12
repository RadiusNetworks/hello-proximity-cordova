cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.radiusnetworks.cordova.proximity/www/proximitykit.js",
        "id": "com.radiusnetworks.cordova.proximity.proximitykit",
        "clobbers": [
            "cordova.plugins.proximitykit"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.console": "0.2.8",
    "com.radiusnetworks.cordova.proximity": "0.5"
}
// BOTTOM OF METADATA
});