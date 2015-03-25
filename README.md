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

Installing your own ProximityKit configuration files
-------

In order to see the demo app working with your own beacons, download the `ProximityKit.plist` (for iOS) and/or `ProximityKit.properties` (for Android) for your kit.  These files need to be in the following location within your project depending on the platform being built:

| Platform | Location of ProximityKit configuration file         |
|:---------|:----------------------------------------------------|
| iOS      | `./platforms/ios/Hello Beacon/ProximityKit.plist` |
| Android  | `./platforms/android/src/ProximityKit.properties`   |

### iOS only

In addition to placing the `ProximityKit.plist` file inside the iOS project's directory structure, you need to add the file to the Xcode project and to the appropriate target:

1. Open the project in Xcode

   ```
   platforms/ios/Hello Beacon.xcodeproj
   ```
   
2. Select the Hello Beacon target and select "Add Files to 'Hello Beacon'" from the File menu.
3. Locate your ProximityKit.plist file and click "Add"

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

### iOS only

For iOS, Proximity Kit uses SQLite internally but just needs the default library included on iOS. So you need to link to it in the project in Xcode manually after the app is built in Cordova/PhoneGap.  To do this, open the generated Xcode project found under `platforms`/`ios` and follow these steps:

1. Select the App's target in Xcode
1. Choose "Build Phases"
1. Under the "Link Binary With Libraries" section click the '+' to add another library
1. Choose libsqlite3.dylib and click "Add"

### Android only

To properly implement the custom application subclass that initiates the beacon monitoring, edit the `AndroidManifest.xml` file (`platforms/android/AndroidManifest.xml`) to include the proper `android:name` tag under `application` for the `ProximityKitCordovaAppication` class.  The application header should look like this:

    <application android:name="com.radiusnetworks.cordova.proximitykit.ProximityKitCordovaApplication" android:hardwareAccelerated="true" android:icon="@drawable/icon" android:label="@string/app_name">

Adding the plugin will also modify other parts of your `AndroidManifest.xml` automatically.  Please do not remove the `<service>`, `<receiver>`, and `<uses-permission>` elements that are added to this file or the plugin will not work properly.




Running the App
---------------
The app needs to be running on a Bluetooth LE-enabled device in order to be able to range beacons.  Your device should have already been setup as a developer device for iOS.

### Running from the Command Line

_Note that running the app from the command line for iOS is extremely slow for some
reason.  Running the app from Xcode is definitely recommended._

To build, install, and run the app on your iOS device, execute the following command in the project directory:

```
$ cordova run --device ios
```

Similarly for Android:

```
$ cordova run --device android
```


### Running from Xcode

1. Open the following project in Xcode if you have not already done so:
   
   ```
   platforms/ios/Hello Beacon.xcodeproj
   ```
   
2. Select the "Hello Beacon" scheme and your iOS device.
3. Run the app by choosing "Run" from the "Product" menu.


