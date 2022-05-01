function openFixtureInPicture(url) {
  const opendUrl = `slideoverformacos://open.app?url=${encodeURIComponent(url)}`
  chrome.tabs.create({
    url: opendUrl,
  })
}

function openUrl(url) {
  chrome.tabs.create({ url: url })
}

chrome.contextMenus.create({
  id: 'open-slide-over-for-macos',
  title: 'Open Fixture in Picture',
})

chrome.contextMenus.onClicked.addListener(({ menuItemId }, tab) => {
  if (menuItemId == 'open-slide-over-for-macos') {
    openFixtureInPicture(tab.url)
  }
})

chrome.runtime.onMessage.addListener(notify)

async function notify(message) {
  switch (message.type) {
    case 'open-download-page':
      let url = message.url
      openUrl(url)
      break
    case 'open-current':
      let tabs = await chrome.tabs.query({ active: true, currentWindow: true })
      openFixtureInPicture(tabs[0].url)
      break
    default:
      break
  }
}
