# spongecase-firefox

![stoP-THAt-RiGHT-nOW](https://github.com/ShaunFerris/spongecase-firefox/assets/119541650/5dd9240a-a84b-4605-8d2e-d627617097e7)

A firefox port of my spongecase converter for chrome available here: https://github.com/ShaunFerris/spongecase-extension

This port gets around the incompatibility in how Chrome and Firefox handle background scripts in Manifest V3, details in this thread: https://stackoverflow.com/questions/75043889/manifest-v3-background-scripts-service-worker-on-firefox

### Installation

1. Navigate to `about:addons` in your firefox browser
2. Click the settings gear icon
3. Choose "install addon from file"
4. Select the .zip file from the web-ext-artifacts directory of this repo

### Usage

Highlight any text in your current chrome tab and hit the hotkey "Ctrl+Shift+Q", and the text as spongecase will be copied to your clipboard and ready to be pasted. You can change the assigned hotkey by editing the manifest file and reloading the extension.
