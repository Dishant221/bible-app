// Service Worker for Bible Study Assistant Extension

// Initialize extension on install
chrome.runtime.onInstalled.addListener(() => {
  console.log('Bible Study Assistant extension installed');
  // Set default storage values
  chrome.storage.local.get('geminiApiKey', (result) => {
    if (!result.geminiApiKey) {
      console.log('Please configure your Gemini API key in extension settings');
    }
  });
});

// Handle messages from content scripts and popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'checkApiKey') {
    chrome.storage.local.get('geminiApiKey', (result) => {
      sendResponse({ hasApiKey: !!result.geminiApiKey });
    });
  }
});

// Handle tab changes - inject content script
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && tab.url.includes('biblegateway.com')) {
    chrome.scripting.executeScript({
      target: { tabId },
      files: ['content.js']
    }).catch((err) => {
      console.log('Content script already injected or error:', err);
    });
  }
});
