chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const url = message.url;
    if (url) {
      chrome.downloads.download({ url }, (downloadId) => {
        if (chrome.runtime.lastError) {
          sendResponse({ success: false });
        } else {
          sendResponse({ success: true });
        }
      });
      return true;
    }
  });
  