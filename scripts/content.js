(async () => {
  const { enabled } = await chrome.storage.local.get("enabled");
  if (enabled) {
    document.open();
    document.write(
      '<html><head><style>.center {text-align: center;font-size:40px;}</style></head><body><div class="center"><p>FOCUS!</p></div>'
    );
    document.close();
  }
})();
