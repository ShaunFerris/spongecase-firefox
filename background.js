const testNotif = {
  title: "test noftification",
  type: "basic",
  message: "This is a test of the notifications API",
  iconUrl: "/icons/icon128.png"
};

browser.commands.onCommand.addListener(async (command) => {
  if (command === "convert_selection") {
  }
});
