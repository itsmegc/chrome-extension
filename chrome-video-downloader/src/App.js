import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState("");

  const handleDownload = () => {
    chrome.runtime.sendMessage({ url }, (response) => {
      if (response.success) {
        console.log("Download initiated!");
      } else {
        console.log("Error downloading");
      }
    });
  };

  return (
    <div>
      <h1>Video Downloader</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default App;
