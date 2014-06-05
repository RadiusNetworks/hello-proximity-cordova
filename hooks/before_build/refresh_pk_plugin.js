#!/usr/bin/env node
 
var sys = require('sys');
var sh = require('execSync');
var plug_id = 'com.radiusnetworks.cordova.proximity';
var plug_path = '../proximity-plugin-cordova';
 
var result = sh.exec("cordova plugin rm " + plug_id);
console.log(result.stdout);
result = sh.exec("cordova plugin add " + plug_path);
console.log(result.stdout);
