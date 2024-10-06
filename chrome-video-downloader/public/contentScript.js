const downloadButton = document.createElement("button");
downloadButton.innerText = "Download";
downloadButton.style.position = "fixed";
downloadButton.style.bottom = "10px";
downloadButton.style.right = "10px";
downloadButton.style.zIndex = "1000";
document.body.appendChild(downloadButton);

downloadButton.addEventListener("click", () => {
  const url = window.location.href;
  chrome.runtime.sendMessage({ url });
});
