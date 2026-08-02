# Google Gemini API Testing Guide

This guide helps you test and verify your Google Gemini API key works correctly.

---

## ✅ Quick API Health Check

### Test 1: Verify API Key Format

Your API key should:
- ✅ Start with `AIzaSy`
- ✅ Be about 39 characters long
- ✅ Contain only letters and underscores
- ✅ Be from https://aistudio.google.com/apikey

**Example:** `AIzaSyXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

If your key doesn't match this format, you have the wrong key.

---

## 🔧 Test API with Simple HTML

Use this HTML file to test your API directly in your browser:

**Create file: `api-test.html`** (in the biblexistance folder)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Gemini API Test</title>
  <style>
    body { font-family: Arial; max-width: 800px; margin: 20px auto; }
    .form-group { margin: 15px 0; }
    input, textarea { width: 100%; padding: 8px; }
    button { padding: 10px 20px; background: #667eea; color: white; border: none; cursor: pointer; }
    .result { background: #f0f0f0; padding: 15px; margin: 15px 0; border-radius: 5px; }
    .success { background: #d4edda; color: #155724; }
    .error { background: #f8d7da; color: #721c24; }
  </style>
</head>
<body>
  <h1>Google Gemini API Test</h1>
  
  <div class="form-group">
    <label>API Key:</label>
    <input type="password" id="apiKey" placeholder="Paste your API key here">
  </div>

  <div class="form-group">
    <label>Test Query:</label>
    <textarea id="query" rows="4" placeholder="Enter a test message">Summarize this Bible verse: John 3:16 - For God so loved the world...</textarea>
  </div>

  <button onclick="testAPI()">Test API</button>

  <div id="result" class="result" style="display:none;"></div>

  <script>
    async function testAPI() {
      const apiKey = document.getElementById('apiKey').value.trim();
      const query = document.getElementById('query').value.trim();
      const resultDiv = document.getElementById('result');

      if (!apiKey) {
        showResult('Please paste your API key', 'error');
        return;
      }

      if (!query) {
        showResult('Please enter a test query', 'error');
        return;
      }

      showResult('Testing API... Please wait...', '');

      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: query }] }]
            })
          }
        );

        if (!response.ok) {
          const error = await response.json();
          if (response.status === 401) {
            showResult('❌ Invalid API Key - Check your key at https://aistudio.google.com/apikey', 'error');
          } else {
            showResult(`❌ API Error: ${error.error?.message || response.statusText}`, 'error');
          }
          return;
        }

        const data = await response.json();
        if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
          showResult('❌ Unexpected API response format', 'error');
          return;
        }

        const responseText = data.candidates[0].content.parts[0].text;
        showResult(`✅ API Working!\n\nResponse:\n${responseText}`, 'success');
      } catch (error) {
        showResult(`❌ Error: ${error.message}`, 'error');
      }
    }

    function showResult(message, type) {
      const resultDiv = document.getElementById('result');
      resultDiv.textContent = message;
      resultDiv.className = `result ${type}`;
      resultDiv.style.display = 'block';
    }
  </script>
</body>
</html>
```

**How to use:**
1. Save the file as `api-test.html` in your biblexistance folder
2. Open it in Chrome
3. Paste your API key
4. Click "Test API"
5. Check the result

**Expected output:**
```
✅ API Working!

Response:
[AI-generated response about John 3:16]
```

---

## 🔍 Common API Errors & Fixes

### Error: "Invalid API key"
**Cause:** Wrong API key format or revoked key

**Fix:**
1. Go to https://aistudio.google.com/apikey
2. Look at the key format - should start with `AIzaSy`
3. Delete the old key and create a new one
4. Copy carefully (no extra spaces)
5. Paste into api-test.html and test again

---

### Error: "API quota exceeded"
**Cause:** Used up free tier quota

**Status page:** https://aistudio.google.com/apikey
- Check "Active quota"
- If at limit, wait until next month or enable billing

---

### Error: "Permission denied"
**Cause:** API key doesn't have access to this model

**Fix:**
1. Go to https://aistudio.google.com/apikey
2. Verify "Generative Language API" is enabled
3. Try creating a new key

---

### Error: "Network error" or "Failed to fetch"
**Cause:** Internet connection issue or CORS error

**Fix:**
1. Check internet connection
2. Try reloading the page
3. Check if Google API is accessible (not blocked by firewall)

---

## 📊 Detailed API Testing Steps

### Step 1: Verify API Key Validity

```
Go to: https://aistudio.google.com/apikey
Look for: Your generated key
Check: Format starts with AIzaSy
```

### Step 2: Check API Quota

```
Visit: https://aistudio.google.com/apikey
Find: Quota section
Look for: "Requests per minute" (free = 60 RPM)
Check: Monthly usage graph
```

### Step 3: Test in Browser Console

1. Open any webpage
2. Press `F12` to open Developer Tools
3. Go to "Console" tab
4. Paste this code (replace YOUR_KEY):

```javascript
const apiKey = 'YOUR_API_KEY';
fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contents: [{ parts: [{ text: 'Say hello!' }] }]
  })
})
.then(r => r.json())
.then(d => console.log(d.candidates?.[0]?.content?.parts?.[0]?.text || 'Error'))
.catch(e => console.error(e))
```

5. Press Enter
6. Check the console for response or error

---

## 🎯 Full Extension API Test

**Inside the extension popup:**

1. Go to Settings (⚙️)
2. Paste your API key
3. Save
4. On biblegateway.com (or test.html)
5. Click a quick action button
6. Monitor the Console (F12) for:
   - API call being made
   - Response received
   - Any errors

**Check:**
- [ ] No errors in console
- [ ] Response appears in popup
- [ ] Text is properly formatted
- [ ] No timeout errors

---

## 🚨 Debug Mode

### Enable Console Logging

In `popup.js`, add this at the top of `callGeminiAPI` function:

```javascript
console.log('Calling Gemini API with:', { apiKey: apiKey.substring(0, 10) + '...', pageContent: pageContent.substring(0, 100), userQuery });
```

Then check console (F12) for detailed logging.

### Check Network Requests

1. Press F12 → Network tab
2. Make a query
3. Look for requests to `generativelanguage.googleapis.com`
4. Click on it to see:
   - Request body
   - Response status
   - Response headers

---

## 📈 Performance Testing

### Test Response Speed

1. Note the time before clicking "Ask Assistant"
2. Note the time when response appears
3. Typical: 2-5 seconds
4. Maximum: 10 seconds

**If slower:**
- Use shorter passages
- Check internet speed
- Check Google API status

---

## ✅ Pre-Flight Checklist

Before using the extension, verify:

- [ ] API key starts with `AIzaSy`
- [ ] API key is not expired/revoked
- [ ] API quota is available (check aistudio.google.com)
- [ ] Internet connection is working
- [ ] Google API is accessible (not blocked)
- [ ] Browser allows CORS requests (all modern browsers do)

---

## 🔗 Useful Links

- **Get API Key:** https://aistudio.google.com/apikey
- **Check Quota:** https://aistudio.google.com/apikey (same page, scroll down)
- **Gemini API Docs:** https://ai.google.dev/tutorials/python_quickstart
- **API Status:** Check the aistudio.google.com page for any notices

---

## 📞 Getting Help

If API tests fail:

1. **Check the error message** - It tells you what's wrong
2. **Verify API key** - Go to https://aistudio.google.com/apikey
3. **Check quota** - Make sure you haven't exceeded limits
4. **Test with api-test.html** - Isolate if issue is API or extension
5. **Check console (F12)** - Look for JavaScript errors
6. **Try a new API key** - Create fresh one if current is problematic

---

## 🎉 Success Indicators

When API is working:
- ✅ "Testing API..." message disappears
- ✅ You see a response from Gemini
- ✅ Extension popup shows AI-generated text
- ✅ No error messages in console
- ✅ Response time is 2-10 seconds

**You're all set!** 🚀
