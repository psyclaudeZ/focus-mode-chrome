(async () => {
  const { enabled } = await chrome.storage.local.get("enabled");
  if (enabled) {
    const html = `
      <html>
        <head>
         <style>.center {text-align: center;font-size:40px;}</style>
        </head><body>
        <div class="center"><p>FOCUS!</p></div>
      </html>
    `;
    document.open();
    document.write(html);
    document.close();
  }
})();
