# Bible Study Assistant - MVP Setup & Testing Guide

## ✅ Pre-Flight Checklist

Before starting, make sure you have:
- [ ] Google Chrome browser installed
- [ ] A Google Account (free)
- [ ] Internet connection
- [ ] All extension files (check file list below)

## 📋 File Structure Verification

Your `biblexistance` folder should have these files:

```
biblexistance/
├── manifest.json              ✓ Extension config
├── popup.html                 ✓ Extension UI
├── popup.css                  ✓ Styling
├── popup.js                   ✓ Main script
├── content.js                 ✓ Content extraction
├── background.js              ✓ Service worker
├── test.html                  ✓ Testing page
├── README.md                  ✓ Documentation
├── INSTALLATION_GUIDE.md      ✓ Install steps
├── SETUP.md                   ✓ This file
└── images/
    └── icon.svg               ✓ Extension icon
```

If any files are missing, check the README or create them manually.

---

## 🚀 QUICK START (10 minutes)

### Step 1: Get Google Gemini API Key (3 min)

1. Go to: https://aistudio.google.com/apikey
2. Click "Create API Key"
3. Select "Create API key in new project"
4. **Copy the key** (it will look like: `AIzaSyXxx...`)
5. Keep it safe - you'll need it in Step 3

### Step 2: Load Extension in Chrome (4 min)

1. Open Chrome and type: `chrome://extensions/`
2. **Toggle "Developer mode"** ON (top-right corner)
3. Click "Load unpacked"
4. Navigate to your extension folder: `C:\Users\dishant.totade\Videos\biblexistance`
5. Click "Select Folder"
6. ✅ You should see "Bible Study Assistant" in your extensions list

### Step 3: Configure API Key (2 min)

1. Click the extension icon (📖 puzzle piece) in Chrome toolbar
2. Click **⚙️ Settings** button (top-right)
3. Paste your API key in the text field
4. Click **"Save API Key"**
5. You should see: "API key saved successfully!" (green message)
6. Close the settings panel (click ⚙️ again or outside)

### Step 4: Test the Extension (1 min)

**Option A: Quick Test (Recommended)**
1. Open this file in Chrome: `C:\Users\dishant.totade\Videos\biblexistance\test.html`
2. Click the extension icon
3. Click **"Summarize"** button
4. Wait 3-5 seconds for the AI response
5. You should see a summary of John 3:16 ✅

**Option B: Real Test (biblegateway.com)**
1. Go to: https://www.biblegateway.com
2. Search for a verse (e.g., "Psalm 23")
3. Click the extension icon
4. Try a quick action or ask a question
5. Verify you get an AI-powered response ✅

---

## 🐛 Troubleshooting

### Problem: Extension doesn't load
**Solution:**
- Make sure Developer mode is ON in `chrome://extensions/`
- Refresh the page (Ctrl+R)
- Try reloading the extension (reload button next to it)
- Check that all files exist in the folder

### Problem: "Invalid API key" error
**Solution:**
- Go to https://aistudio.google.com/apikey
- Check if the key is still valid
- Try deleting it and creating a new one
- Copy the key again (avoid typos)
- Save it in extension settings again

### Problem: "Could not extract page content"
**Solution:**
- Make sure you're on **biblegateway.com**
- Wait for the page to fully load
- Try a different Bible passage
- Refresh the page and try again

### Problem: No response from AI (blank/timeout)
**Solution:**
- Check your internet connection
- Verify API key is saved (go to settings)
- Wait up to 10 seconds for response
- Check that the passage is fully loaded on the page
- Try with less content (shorter passage)

### Problem: Extension icon doesn't appear in toolbar
**Solution:**
- Make sure extension loaded successfully (check `chrome://extensions/`)
- Click the puzzle-piece icon in Chrome toolbar
- Look for "Bible Study Assistant" in the list
- Click to pin it to your toolbar for easy access

### Problem: Nothing happens when I click the extension icon
**Solution:**
- Make sure you're on biblegateway.com or test.html
- Reload the page (Ctrl+R)
- Close and reopen the extension popup
- Try reloading the extension in `chrome://extensions/`

---

## 🔧 Testing Scenarios

### Test 1: Basic API Test
```
Page: test.html
Action: Click "Summarize"
Expected: AI responds with a summary of John 3:16
Status: ✓ PASS / ✗ FAIL
```

### Test 2: Custom Question
```
Page: test.html or biblegateway.com
Action: Type "What is the main message?" and submit
Expected: AI provides an answer based on the passage
Status: ✓ PASS / ✗ FAIL
```

### Test 3: All Quick Actions
```
Page: biblegateway.com (any passage)
Actions to test:
  - [ ] Summarize
  - [ ] Key Points
  - [ ] Cross Reference
  - [ ] Context & Meaning
Expected: All should return valid AI responses
Status: ✓ PASS / ✗ FAIL
```

### Test 4: Error Handling
```
Test: Submit without entering question
Expected: Error message appears
Status: ✓ PASS / ✗ FAIL

Test: Try without API key configured
Expected: Settings prompt appears
Status: ✓ PASS / ✗ FAIL

Test: Invalid API key
Expected: Clear error message
Status: ✓ PASS / ✗ FAIL
```

### Test 5: UI/UX
```
Test: Popup opens and closes smoothly
Expected: No lag or errors
Status: ✓ PASS / ✗ FAIL

Test: Text is readable in small popup (400px width)
Expected: No horizontal scroll needed
Status: ✓ PASS / ✗ FAIL

Test: Settings panel opens/closes
Expected: Smooth toggle, no overlap
Status: ✓ PASS / ✗ FAIL
```

---

## 📊 MVP Acceptance Criteria

Your extension is **MVP-ready** when:

- [ ] Extension loads in Chrome without errors
- [ ] API key can be saved and retrieved
- [ ] Content is extracted from biblegateway.com
- [ ] All 4 quick actions work and return responses
- [ ] Custom questions work
- [ ] Error messages are helpful and clear
- [ ] UI is responsive in the small popup
- [ ] API calls complete in under 10 seconds
- [ ] No console errors (press F12 to check)

---

## 🔍 Developer Tools (Debugging)

**To see error messages:**
1. Press `F12` in Chrome to open Developer Tools
2. Go to "Console" tab
3. You'll see any JavaScript errors
4. Look for messages from the extension

**To check extension logs:**
1. Go to `chrome://extensions/`
2. Find "Bible Study Assistant"
3. Click "Errors" (if any) to see detailed error logs

**To inspect the popup:**
1. Right-click anywhere in the popup
2. Select "Inspect"
3. Use Chrome DevTools to debug

---

## 📈 Performance Tips

- **Faster responses:** Use shorter Bible passages
- **Better summaries:** Use the Summarize action first, then ask follow-up questions
- **Avoid errors:** Make sure page is fully loaded before using extension
- **Save API quota:** Each request uses a small amount of your monthly quota

---

## ✨ What's Included in this MVP

✅ **Full-featured Bible extension**
- 4 quick study actions
- Custom question support
- Secure API key storage
- Beautiful, responsive UI

✅ **Production-ready code**
- Error handling
- Content security (prompt injection prevention)
- Optimized API calls
- Proper permissions

✅ **Complete documentation**
- Installation guide
- Testing procedures
- Troubleshooting
- User manual

---

## 🎯 Next Steps After MVP

Once you verify everything works, you can:

1. **Deploy to Chrome Web Store** - Make it available to others
2. **Add more features:**
   - Verse cross-references
   - Commentary lookup
   - Study note saving
   - Multiple language support
3. **Optimize performance:**
   - Cache responses
   - Faster content extraction
   - Better markdown rendering
4. **Expand to other sites:**
   - Bible.com
   - YouVersion
   - Other Bible platforms

---

## 📞 Support

If you get stuck:
1. Check the "Troubleshooting" section above
2. Review the error message carefully
3. Look at the console (F12) for technical details
4. Verify API key at https://aistudio.google.com/apikey

---

## ✅ Completion Checklist

- [ ] All files present and accounted for
- [ ] Google Gemini API key obtained
- [ ] Extension loaded in Chrome
- [ ] API key configured in extension
- [ ] Test on test.html successful
- [ ] Test on biblegateway.com successful
- [ ] All quick actions working
- [ ] Custom questions working
- [ ] No console errors
- [ ] MVP acceptance criteria met

**When all items are checked, you have a LIVE, WORKING MVP! 🎉**

---

**Congratulations on building your Bible Study Assistant!** 📖✨
