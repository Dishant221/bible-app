// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  try {
    if (request.action === 'getPageContent') {
      const content = extractPageContent();
      sendResponse({ content });
    }
  } catch (error) {
    console.error('Error in content script:', error);
    sendResponse({ content: 'Error extracting content: ' + error.message });
  }
});

// Extract page content from biblegateway.com
function extractPageContent() {
  try {
    let passageText = '';
    let passageTitle = '';

    console.log('Starting content extraction...');

    // Strategy 1: Bible Gateway specific selectors
    let mainContent = document.querySelector('.bibletext, .passage-text, .result-text, [role="main"]');

    // Strategy 2: Try more specific BG selectors
    if (!mainContent) {
      mainContent = document.querySelector('[class*="passage"], [class*="bible"], [class*="verse"]');
    }

    // Strategy 3: Try article tag
    if (!mainContent) {
      mainContent = document.querySelector('article');
    }

    console.log('Main content found:', !!mainContent);

    if (mainContent) {
      // Get title/reference
      const titleEl = document.querySelector('h1, [class*="title"], [class*="reference"], .passage-display-bcv');
      if (titleEl) {
        passageTitle = titleEl.textContent.trim();
        console.log('Title found:', passageTitle);
      }

      // Get all text from the container
      passageText = mainContent.innerText || mainContent.textContent;
      console.log('Content found, length:', passageText.length);
    }

    // Fallback: Get all readable text from body if still empty
    if (!passageText || passageText.length < 50) {
      console.log('Using fallback - extracting from body');
      passageText = extractReadableText(document.body);
    }

    const fullContent = passageTitle ? passageTitle + '\n\n' + passageText : passageText;
    const cleanedContent = cleanContent(fullContent);
    console.log('Final content length:', cleanedContent.length);
    return cleanedContent;
  } catch (error) {
    console.error('Error extracting content:', error);
    return '';
  }
}

// Extract readable text and filter out nav/ads
function extractReadableText(element) {
  // Clone to avoid modifying the page
  const clone = element.cloneNode(true);

  // Remove script, style, nav, footer elements
  const toRemove = clone.querySelectorAll('script, style, nav, footer, .navbar, .ads, [class*="ad"], [id*="ad"]');
  toRemove.forEach(el => el.remove());

  return clone.innerText || clone.textContent;
}

// Clean up extracted content
function cleanContent(content) {
  if (!content) return '';

  const cleaned = content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !isNavOrJunk(line))
    .join('\n');

  // Limit to 15k characters for better API results
  return cleaned.substring(0, 15000);
}

// Filter out common nav/junk text
function isNavOrJunk(line) {
  const junkPatterns = [
    /^(search|menu|home|about|contact|login|sign\s?up)/i,
    /^(search by.*|advanced search)/i,
    /^(bible|gateway|biblegateway)/i,
    /^[0-9]{1,3}$/
  ];

  return junkPatterns.some(pattern => pattern.test(line));
}
