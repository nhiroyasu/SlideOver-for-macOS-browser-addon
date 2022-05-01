document.getElementById('open-button').addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: "open-current" })
})

document.getElementById('download-button').addEventListener('click', () => {
  let url =
    'https://apps.apple.com/us/app/fixture-in-picture/id1612993947'
  chrome.runtime.sendMessage({ type: 'open-download-page', url })
})
