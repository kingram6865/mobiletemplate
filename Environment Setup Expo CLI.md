# React Native Development Environment Setup

If you are new to mobile development, the easiest way to get started is with Expo CLI. 

Expo is a set of tools built around React Native and, while it has many features, the most relevant feature for us right now is that it can get you writing a React Native app within minutes. You will only need a recent version of Node.js and a phone or emulator.

Expo [docs](https://docs.expo.io/)
Expo [CLI issues](https://github.com/expo/expo-cli/issues) (for issues related to Expo CLI),
Expo [issues](https://github.com/expo/expo/issues) (for issues about the Expo client or SDK).

## Install `expo-cli`

    npm install -g expo-cli

## Install the Expo client app on your phone
    https://expo.dev/
It can be installed on the phone through Google Play => [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent)

## Create a project

* executing `expo init HelloProject` results in a prompt asking what type of template to use.
Typically 'blank' is chosen for a beginning project
* `cd HelloProject`
* `npm start`

Once the project is created, use the Expo app to scan the QR code from the terminal to open the project.

Once the app is successfully running, edit `App.js` and the app will reload automatically when changes are saved.

Not that `expo init` also initializes the project directory with its own local git, so to integrate the app intothis repo, those items had to be removed and the following were added to this repo's `.gitignore`:

    npm-debug.*
    *.jks
    *.p8
    *.p12
    *.key
    *.mobileprovision
    *.orig.*
    web-build/

    # macOS
    .DS_Store