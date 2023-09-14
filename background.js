const testNotif = {
  title: "test noftification",
  type: "basic",
  message: "This is a test of the notifications API",
  iconUrl: "/icons/icon128.png"
};

browser.commands.onCommand.addListener(async (command) => {
  console.log("listener is running");
  if (command === "convert_selection") {
    console.log("Hotkey pressed");
    browser.notifications.create(testNotif);
  }
});
