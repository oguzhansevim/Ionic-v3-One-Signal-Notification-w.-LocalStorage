# NotificationWithLocalStorage Example App 
 * Official One Signal documentation for [Ionic SDK Setup](https://documentation.onesignal.com/docs/ionic-sdk-setup)

## NotificationWithLocalStorage Example App Plugin List


### [1- Native Storage](https://ionicframework.com/docs/v3/native/native-storage/)<br />
```sh
  $ ionic cordova plugin add cordova-plugin-nativestorage
  $ npm uninstall --save @ionic-native/native-storage@4
```

### [2- OneSignal](https://ionicframework.com/docs/v3/native/onesignal/)<br />
```sh
  $ ionic cordova plugin add onesignal-cordova-plugin
  $ npm install --save @ionic-native/onesignal@4
```

## Customize Android Notification Icons
 * Official One Signal documentation for [How to customize your Android Notification Icons](https://documentation.onesignal.com/docs/customize-notification-icons)
 
  * Android Asset Studio for [Creating custom Android notification icons](https://romannurik.github.io/AndroidAssetStudio/icons-notification.html)
  
  ### How do I change notification file name for custom Android notification icons?
  If you don't want to use standart file name for Android notification icons which is *"ic_stat_onesignal_default"* you need to edit file name in **hooks.js** like below;
  
```sh

var filestocopy = [{
    "resources/android/notification/drawable-hdpi/%YOUR_CUSTOM_FILE_NAME%.png":
        "platforms/android/app/src/main/res/drawable-hdpi/%YOUR_CUSTOM_FILE_NAME%.png"
}, {
    "resources/android/notification/drawable-mdpi/%YOUR_CUSTOM_FILE_NAME%.png":
        "platforms/android/app/src/main/res/drawable-mdpi/%YOUR_CUSTOM_FILE_NAME%.png"
}, {
    "resources/android/notification/drawable-xhdpi/%YOUR_CUSTOM_FILE_NAME%.png":
        "platforms/android/app/src/main/res/drawable-xhdpi/%YOUR_CUSTOM_FILE_NAME%.png"
}, {
    "resources/android/notification/drawable-xxhdpi/%YOUR_CUSTOM_FILE_NAME%.png":
        "platforms/android/app/src/main/res/drawable-xxhdpi/%YOUR_CUSTOM_FILE_NAME%.png"
}, {
    "resources/android/notification/drawable-xxxhdpi/%YOUR_CUSTOM_FILE_NAME%.png":
        "platforms/android/app/src/main/res/drawable-xxxhdpi/%YOUR_CUSTOM_FILE_NAME%.png"
} ];

```
