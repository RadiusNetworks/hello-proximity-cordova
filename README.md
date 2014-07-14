Hello ProximityKit Cordova/PhoneGap
========================================

Last Updated 25-June-2014

Michael Harper (michael@radiusnetworks.com)

Overview
--------
This Cordova app demonstrates how you can use the Radius Networks ProximityKit Cordova/PhoneGap plugin in your own project.

Setup
-----
This project contains everything you need to build a running version of the "Hello Beacon" Cordova app with one exception:

*You must install your own `ProximityKit.properties` and `ProximityKit.plist` files!*

Otherwise the app will not recognize any of your beacons.

### Installing your own ProximityKit configuration files

In order to see the demo app working with your own beacons, install the ProximityKit configuration file from your own kit into the project directory as follows:

| Platform | Directory Location |
|:---------|:-------------------|
| iOS      | `./platforms/ios/Hello Beacon/ProximityKit.plist` |
| Android  | `./platforms/android/src/ProximityKit.properties` |

#### iOS only

In addition to placing the `ProximityKit.plist` file inside the iOS project's directory structure, you need to add the file to the Xcode project and to the `Hello Beacon` target.

Running the App
---------------
The app needs to be running on a Bluetooth LE-enabled device in order to be able to range beacons.  Your device should have already been setup as a developer device either for iOS or for Android.

### iOS

To build, install, and run the app on your iOS device, execute the following command in the project directory:

```
$ cordova run --device ios
```

Note that it is _extremely slow_ to get started for some reason.  Running the app directly from the device is much quicker once the app is installed.

### Android

To build, install, and run the app on your Android device, execute the following command in the project directory:

```
$ cordova run --device android
```

