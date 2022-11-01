/*
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const { tabId } = activeInfo;
  const tab = await chrome.tabs.get(tabId);
});
*/

chrome.action.onClicked.addListener(async () => {
  const prevState = await chrome.storage.local.get("enabled");
  const { enabled } = prevState;
  await chrome.storage.local.set({ enabled: !enabled });
  await chrome.action.setBadgeText({
    text: enabled ? "OFF" : "ON",
  });
  console.log({ prevState });
});

chrome.runtime.onInstalled.addListener(async () => {
  await chrome.storage.local.set({ enabled: false });
  chrome.action.setBadgeText({
    text: "OFF",
  });
});
