# React Native Development Environment Setup
  If you are already familiar with mobile development, you may want to use React Native CLI. It requires Xcode or Android Studio to get started. If you already have one of these tools installed, you should be able to get up and running within a few minutes. If they are not installed, you should expect to spend about an hour installing and configuring them.

  Instructions condensed and summarized from https://reactnative.dev/docs/environment-setup

## Node

Install Node 12 or newer

## Java Development Kit

React Native requires Java SE Development kit at least version 8

## Android Development Environment

    1. Install Android Studio and include

        - Android SDK
        - Android SDK Platform
        - Android Virtual Device

    2. Install the Android SDK

        Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 10 (Q) SDK in particular.

        - Open Android Studio, click on "Configure" button and select "SDK Manager"
        - Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner.
        - Look for and expand the Android 10 (Q) entry, then make sure the following items are checked:
            - Android SDK Platform 29
            - Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
        - select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 29.0.2 is selected.
        - click "Apply" to download and install the Android SDK and related build tools.

    3. Configure the ANDROID_HOME environment variable

      Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc (if you are using zsh then ~/.zprofile or ~/.zshrc) config file:

        - export ANDROID_HOME=$HOME/Android/Sdk
        - export PATH=$PATH:$ANDROID_HOME/emulator
        - export PATH=$PATH:$ANDROID_HOME/tools
        - export PATH=$PATH:$ANDROID_HOME/tools/bin
        - export PATH=$PATH:$ANDROID_HOME/platform-tools

## Create a new app

Execute `npx react-native init Hello`
If react-native is not already installed it will prompt user to allow install

## Running the React Native App

1. Start Metro
    run `npx react-native start`, which starts Metro Bundler
    Allow it to run in its own terminal

2. Start the Application
    In a new terminal execute `npx react-native run-android`