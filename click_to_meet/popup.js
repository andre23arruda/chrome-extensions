document.addEventListener('DOMContentLoaded', function () {
  const url = 'YOUR PERMANENT LINK HERE';
  var textArea = document.createElement('textarea');
  textArea.value = url
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand('copy');
  chrome.tabs.create({url});
});