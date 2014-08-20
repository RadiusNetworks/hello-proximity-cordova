cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.radiusnetworks.cordova.proximitykit/www/proximitykit.js",
        "id": "com.radiusnetworks.cordova.proximitykit.proximitykit",
        "clobbers": [
            "radiusnetworks.plugins.proximitykit"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.console": "0.2.10",
    "com.radiusnetworks.cordova.proximitykit": "0.5.1"
}
// BOTTOM OF METADATA
});