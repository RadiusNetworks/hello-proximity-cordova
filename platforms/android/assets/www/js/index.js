/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function clock(){
  var now = new Date();
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.save();
  ctx.clearRect(0,0,150,150);
  ctx.translate(75,75);
  ctx.scale(0.4,0.4);
  ctx.rotate(-Math.PI/2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  // Hour marks
  ctx.save();
  for (var i=0;i<12;i++){
    ctx.beginPath();
    ctx.rotate(Math.PI/6);
    ctx.moveTo(100,0);
    ctx.lineTo(120,0);
    ctx.stroke();
  }
  ctx.restore();

  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  for (i=0;i<60;i++){
    if (i%5!=0) {
      ctx.beginPath();
      ctx.moveTo(117,0);
      ctx.lineTo(120,0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI/30);
  }
  ctx.restore();
  
  var msec = now.getMilliseconds();
  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr  = now.getHours();
  hr = hr>=12 ? hr-12 : hr;

  ctx.fillStyle = "black";

  // write Hours
  ctx.save();
  ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20,0);
  ctx.lineTo(80,0);
  ctx.stroke();
  ctx.restore();

  // write Minutes
  ctx.save();
  ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28,0);
  ctx.lineTo(112,0);
  ctx.stroke();
  ctx.restore();
  
  // Write seconds
  ctx.save();
  ctx.rotate(sec * Math.PI/30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30,0);
  ctx.lineTo(83,0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0,0,10,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95,0,10,0,Math.PI*2,true);
  ctx.stroke();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.arc(0,0,3,0,Math.PI*2,true);
  ctx.fill();
  ctx.restore();
  
  // Write milliseconds
  ctx.save();
  ctx.rotate(msec * Math.PI/500);
  //ctx.strokeStyle = "#D40000";
  //ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30,0);
  ctx.lineTo(83,0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0,0,10,0,Math.PI*2,true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#325FA2';
  ctx.arc(0,0,142,0,Math.PI*2,true);
  ctx.stroke();

  ctx.restore();
}
 
var beaconLogElement;
var beaconRangeLogElement;

var logPKEvent = function(pkEvent, displayMessage) {
  logString = new Date().toString() + " ProximityKit event: " + pkEvent[radiusnetworks.plugins.proximitykit.constants.keys.eventType];
  region = pkEvent[radiusnetworks.plugins.proximitykit.constants.keys.region];
  if (region != null)
  {
    logString += " Region: " + JSON.stringify(region);
  }
  beacons = pkEvent[radiusnetworks.plugins.proximitykit.constants.keys.beacons];
  if (beacons != null)
  {
    logString += " Beacons: " + JSON.stringify(beacons);
  }
  console.log(logString);
  
  if (displayMessage)
  {
    beaconLogElement.innerHTML = beaconLogElement.innerHTML + '<p>' + logString + '</p>';
  }
}

var logPKRangeEvent = function(pkEvent) {
  logString = new Date().toString();
  beacon = pkEvent[radiusnetworks.plugins.proximitykit.constants.keys.beacon];
  if (beacon != null)
  {
    logString += " Beacon: " + JSON.stringify(beacon);
  }
  
  console.log(logString);
  beaconRangeLogElement.innerHTML = '<p>' + logString + '</p>';
}

var proximityKitSuccessHandler = function(message) {
  pkEventType = message[radiusnetworks.plugins.proximitykit.constants.keys.eventType];

  switch (pkEventType) {
    case radiusnetworks.plugins.proximitykit.constants.eventTypes.sync:
    case radiusnetworks.plugins.proximitykit.constants.eventTypes.enteredRegion:
    case radiusnetworks.plugins.proximitykit.constants.eventTypes.exitedRegion:
    case radiusnetworks.plugins.proximitykit.constants.eventTypes.determinedRegionState:
    case radiusnetworks.plugins.proximitykit.constants.eventTypes.rangedBeacon:
      logPKEvent(message, true);
      break;
      
   case radiusnetworks.plugins.proximitykit.constants.eventTypes.rangedBeacon:
      logPKRangeEvent(message, false);
      break;
      
    default:
      console.log("Unexpected ProximityKit event type " + pkEventType);
      break;
  }
};

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    	clock();
  		setInterval(clock,10);
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        console.log('Binding events');
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // deviceready Event Handler
    onDeviceReady: function() {
      app.handleDeviceReady();
    },

    handleDeviceReady: function() {
        beaconLogElement = document.getElementById('beacon-log');
        beaconRangeLogElement = document.getElementById('beacon-range-log');
        watchId = radiusnetworks.plugins.proximitykit.watchProximity(proximityKitSuccessHandler,
        function(message){
            console.log("Failure: Response from plugin is " + message);
        });
    }
};
