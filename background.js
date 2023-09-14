browser.commands.onCommand.addListener(async (command) => {
  if (command === "convert_selection") {
    const activeTab = await getTab();
    const response = await browser.scripting.executeScript({
      target: { tabId: activeTab.id },
      func: convertAndCopy
    });
    const notifMsg = responseNotifications[response[0].result];
    browser.notifications.create(notifMsg);
  }
});

async function getTab() {
  return;
}

async function convertAndCopy() {
  return;
}

const responseNotifications = {
  success: {
    title: "Successful spOnGEcAsE conversion!",
    type: "basic",
    message:
      "The text you highlighted has been converted and copied to the clipboard, go ahead and paste it somewhere",
    iconUrl: "icons/icon128.png"
  },
  fail: {
    title: "Failed spOnGEcAsE conversion.",
    type: "basic",
    message:
      "There was an error converting selected text, try reloading the extension, or check the developer console for more information.",
    iconUrl: "icons/icon128.png"
  },
  noInput: {
    title: "No text selected",
    type: "basic",
    message:
      "You pushed the hotkey for the spongecase converter extension but had not text selected to convert!",
    iconUrl: "/icons/icon128.png"
  }
};
