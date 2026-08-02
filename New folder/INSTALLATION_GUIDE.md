# Bible Study Assistant - Installation Guide

## Quick Start (5 minutes)

### Step 1: Get Your Google Gemini API Key (2 min)

1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Sign in with your Google account
3. Click the blue **"Create API Key"** button
4. Click **"Create API key in new project"**
5. Copy the generated API key (looks like: `AIzaSy...`)
6. Keep it safe - you'll need it in Step 3

### Step 2: Load the Extension (2 min)

1. Open Chrome and type in the address bar: `chrome://extensions/`
2. In the **top-right corner**, toggle on **"Developer mode"**
3. Click the blue **"Load unpacked"** button
4. Navigate to your extension folder (`C:\Users\dishant.totade\Videos\biblexistance`)
5. Click **"Select Folder"**
6. ✅ Extension loaded! You should see it in your extensions list

### Step 3: Configure API Key (1 min)

1. Click the **extension icon** in your Chrome toolbar (puzzle piece icon)
2. Look for the **⚙️ Settings button** in the top-right
3. Paste your API key in the text field
4. Click **"Save API Key"**
5. You should see a green success message

## You're Ready! 🎉

Now go to [biblegateway.com](https://www.biblegateway.com), select a passage, and click the extension icon to start studying.

---

## Detailed Walkthrough

### Getting the API Key - In Detail

**Don't have a Google account?**
- Create one at [accounts.google.com](https://accounts.google.com)

**At Google AI Studio:**
- The "Create API key" button is on the left sidebar
- You might see a popup asking where to save the key
- Choose "Create API key in new project" (simplest option)
- Your key will appear in a popup - copy it immediately

**Keep your key private!**
- Don't share it in public forums
- It's like a password to your Google API account
- If you accidentally share it, regenerate a new one at the same page

### Loading the Extension - In Detail

**Developer mode:**
- You should see a toggle switch in the top-right of `chrome://extensions/`
- It should turn blue/colorful when enabled
- This allows you to load unpacked (unpackaged) extensions

**Load unpacked:**
- After clicking "Load unpacked", a folder browser opens
- Navigate to: `C:\Users\dishant.totade\Videos\biblexistance`
- Make sure you select the folder that contains `manifest.json`
- Click "Select Folder"

**If you see errors:**
- Check that `manifest.json` exists in the folder
- Try refreshing the page or reloading the extension
- Make sure all files are present (check the file list below)

### Extension Files Required

Make sure your `biblexistance` folder contains:
- ✅ `manifest.json` - Extension config
- ✅ `popup.html` - The UI interface
- ✅ `popup.css` - The styling
- ✅ `popup.js` - The main script
- ✅ `content.js` - Content extraction
- ✅ `background.js` - Background service worker
- ✅ `README.md` - Documentation

## First Use

1. **Navigate to biblegateway.com**
   - Go to [www.biblegateway.com](https://www.biblegateway.com)
   - Search for a Bible passage (e.g., "John 3:16")
   - Wait for it to load

2. **Click the extension icon**
   - Look in the top-right of Chrome, near the search bar
   - Click the puzzle-piece icon or the Bible Study Assistant icon
   - The popup will open

3. **Try a quick action**
   - Click "Summarize" to get a summary of the passage
   - Wait for the AI response (usually 2-5 seconds)

4. **Ask a custom question**
   - Type a question in the text area
   - Click "Ask Assistant"
   - Get an AI-powered answer about the passage

## Troubleshooting

### Extension doesn't appear in toolbar?
- Make sure you clicked "Load unpacked" on `chrome://extensions/`
- Refresh the page
- Try pinning the extension: click the puzzle-piece icon, then pin the extension

### "Invalid API key" error?
- Go back to [Google AI Studio](https://aistudio.google.com/apikey)
- Make sure your key is still valid (you can delete and create new ones)
- Copy the key again (maybe there's a typo)
- Paste it in settings and save

### No response from AI?
- Check that the API key is set (go to settings)
- Make sure you're on biblegateway.com and a passage is loaded
- Check your internet connection
- Wait a moment - API calls take 2-5 seconds

### Extension icon doesn't respond when clicked?
- Refresh the biblegateway.com page
- Reload the extension on `chrome://extensions/`
- Close and reopen the popup
- Check your browser console for errors (F12)

### "Could not extract page content" error?
- Make sure the Bible passage has fully loaded
- Try a different passage
- Refresh the page
- Try a different Bible version

## Need Help?

1. **Check the README.md** - Has more detailed usage tips
2. **Review this guide again** - Most issues are covered above
3. **Check error messages** - The extension shows helpful error text
4. **Verify each step** - Go back through Quick Start and verify each part worked

## Next Steps

- ✅ Installation complete!
- 📖 Go to [biblegateway.com](https://www.biblegateway.com) and start studying
- 🎯 Use quick actions or ask custom questions
- 📚 Explore different Bible passages and versions

---

**Happy Bible studying!** 📖✨
