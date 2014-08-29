Hello ProximityKit Cordova/PhoneGap
========================================

Overview
--------
This Cordova app demonstrates how you can use the Radius Networks ProximityKit Cordova/PhoneGap plugin in your own project.

Setup
-----
This project contains everything you need to build a running version of the "Hello Beacon" Cordova app on iOS with one exception:

*You must install your own `ProximityKit.properties` file!*

Otherwise the app will not recognize any of your beacons.  Make sure you have
at least one of your beacons powered up before you run the sample app, or it
won't be very interesting!

### Installing your own ProximityKit configuration files

In order to see the demo app working with your own beacons, install the ProximityKit configuration file from your own kit into the iOS project directory here:

```
./platforms/ios/Hello Beacon/ProximityKit.plist
```

Adding the Plugins
------------------

In order to ensure that you're using the latest version of the ProximityKit
Cordova plugin, it is not included in this repository.  To add the plugin:

```
$ cordova plugin add https://github.com/RadiusNetworks/proximitykit-plugin-cordova
```

You also need to add the Cordova console plugin:

```
$ cordova plugin add org.apache.cordova.console
```

Add the ProximityKit.plist File to the Project in Xcode
-------------------------------------------------------

1. Open the following project in Xcode:
   
   ```
   platforms/ios/Hello Beacon.xcodeproj
   ```

2. Select the Hello Beacon target and select "Add Files to \"Hello Beacon\" from the File menu.

3. Locate your ProximityKit.plist file and click "Add"

Running the App
---------------
The app needs to be running on a Bluetooth LE-enabled device in order to be able to range beacons.  Your device should have already been setup as a developer device for iOS.

### Running from Xcode

1. Open the following project in Xcode if you have not already done so:
   
   ```
   platforms/ios/Hello Beacon.xcodeproj
   ```
   
2. Select the "Hello Beacon" scheme and your iOS device.
3. Run the app by choosing "Run" from the "Product" menu.

### Running from the Command Line

_Note that running the app from the command line is extremely slow for some
reason.  Running the app from Xcode is definitely recommended._

To build, install, and run the app on your iOS device, execute the following command in the project directory:

```
$ cordova run --device ios
```

