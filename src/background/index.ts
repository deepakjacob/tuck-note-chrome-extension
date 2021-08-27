// A basic example how you can use background scripts in your Chrome extension.
// More on: https://developer.chrome.com/docs/extensions/mv2/background_pages/.

import { MessageType } from '../types';

window.chrome?.runtime.onInstalled.addListener(() => {
  // eslint-disable-next-line no-console
  console.log("'Tuck Note Chrome Extension' installed/updated...");
});

window.chrome?.browserAction.onClicked.addListener(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (tab: chrome.tabs.Tab) => {
    // Send a message to the active tab
    const targetTab = { active: true, currentWindow: true };
    chrome.tabs.query(targetTab, (tabs) => {
      var activeTab = tabs[0];
      if (activeTab && activeTab.id) {
        chrome.tabs.sendMessage(activeTab.id, {
          message: MessageType.ACTIVATE_SIDE_BAR,
        });
      }
    });
  },
);

export default {};
