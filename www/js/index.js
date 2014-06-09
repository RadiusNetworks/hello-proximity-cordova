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
var beaconLogElement;

var logPKEvent = function(pkEvent, displayMessage) {
  logString = new Date().toString() + " ProximityKit event: " + pkEvent[cordova.plugins.proximitykit.constants.keys.eventType];
  region = pkEvent[cordova.plugins.proximitykit.constants.keys.region];
  if (region != null)
  {
    logString += " Region: " + JSON.stringify(region);
  }
  beacons = pkEvent[cordova.plugins.proximitykit.constants.keys.beacons];
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

var proximityKitSuccessHandler = function(message) {
  pkEventType = message[cordova.plugins.proximitykit.constants.keys.eventType];

  switch (pkEventType) {
    case cordova.plugins.proximitykit.constants.eventTypes.sync:
    case cordova.plugins.proximitykit.constants.eventTypes.enteredRegion:
    case cordova.plugins.proximitykit.constants.eventTypes.exitedRegion:
    case cordova.plugins.proximitykit.constants.eventTypes.determinedRegionState:
      logPKEvent(message, true);
      break;
      
   case cordova.plugins.proximitykit.constants.eventTypes.rangedBeacons:
      logPKEvent(message, false);
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
        watchId = cordova.plugins.proximitykit.watchProximity(proximityKitSuccessHandler,
        function(message){
            console.log("Failure: Response from plugin is " + message);
        });
    }
};
