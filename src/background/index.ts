// A basic example how you can use background scripts in your Chrome extension.
// More on: https://developer.chrome.com/docs/extensions/mv2/background_pages/.

//  TODO: add typescript type / interfaces to chrome messages
window.chrome.runtime.onInstalled.addListener(() => {
  // eslint-disable-next-line no-console
  console.log(
    "'Create React Chrome Extension - TypeScript' installed/updated...",
  );
});

//  TODO: add typescript type / interfaces to chrome messages

// Called when the user clicks on the browser action
// eslint-disable-next-line @typescript-eslint/no-unused-vars
chrome.browserAction.onClicked.addListener((tab: chrome.tabs.Tab) => {
  // eslint-disable-next-line no-console
  console.log('activate tuck note sidebar sent @ ' + new Date());
  // Send a message to the active tab
  const targetTab = { active: true, currentWindow: true };
  chrome.tabs.query(targetTab, (tabs) => {
    var activeTab = tabs[0];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    activeTab?.id &&
      chrome.tabs.sendMessage(activeTab.id, {
        message: 'activate_tuck_note_side_bar',
      });
  });
});

export default {};
